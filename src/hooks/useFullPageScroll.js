import { useEffect, useRef } from "react";
import { animate } from "animejs";

const ANIMATION_TIME = 900;
const DESKTOP_QUERY = "(min-width: 901px)";

export default function useFullPageScroll() {
  const activeIndex = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const cleanupDesktop = useRef(null);

  useEffect(() => {
    const track = document.querySelector("[data-fullpage-track]");
    const sections = [...document.querySelectorAll("[data-fullpage-section]")];
    const header = document.querySelector("[data-site-header]");
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!track || !sections.length) {
      return undefined;
    }

    const showHeader = () => {
      if (!header) return;

      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
      header.style.pointerEvents = "auto";
      header.removeAttribute("aria-hidden");
    };

    const resetToMobile = () => {
      cleanupDesktop.current?.();
      cleanupDesktop.current = null;
      activeIndex.current = 0;
      isAnimating.current = false;

      document.documentElement.classList.remove("fullpage-active");
      document.body.classList.remove("fullpage-active");
      document.body.classList.remove("is-home-section");
      document.body.classList.remove("is-inner-section");

      animate(track, { y: 0, duration: 0 });
      showHeader();
    };

    const setupDesktop = () => {
      cleanupDesktop.current?.();

      document.documentElement.classList.add("fullpage-active");
      document.body.classList.add("fullpage-active");

      const updatePageState = (index) => {
        const isHome = index === 0;

        document.body.classList.toggle("is-home-section", isHome);
        document.body.classList.toggle("is-inner-section", !isHome);

        if (!header) return;

        header.style.pointerEvents = isHome ? "auto" : "none";
        header.setAttribute("aria-hidden", String(!isHome));

        animate(header, {
          opacity: isHome ? 1 : 0,
          y: isHome ? 0 : -120,
          duration: prefersReducedMotion ? 0 : 360,
          ease: "outCubic",
        });
      };

      const updateHash = (index) => {
        const sectionId = sections[index]?.dataset.sectionId;
        if (sectionId) {
          window.history.replaceState(null, "", `#${sectionId}`);
        }
      };

      const moveTo = (nextIndex) => {
        const clampedIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

        if (clampedIndex === activeIndex.current || isAnimating.current) {
          return;
        }

        activeIndex.current = clampedIndex;
        isAnimating.current = true;
        updatePageState(clampedIndex);

        animate(track, {
          y: -clampedIndex * window.innerHeight,
          duration: prefersReducedMotion ? 0 : ANIMATION_TIME,
          ease: "inOutCubic",
        });

        updateHash(clampedIndex);
        window.setTimeout(() => {
          isAnimating.current = false;
        }, prefersReducedMotion ? 0 : ANIMATION_TIME);
      };

      const moveBy = (direction) => {
        moveTo(activeIndex.current + direction);
      };

      const syncToHash = () => {
        const hash = window.location.hash.replace("#", "");
        const hashIndex = sections.findIndex((section) => section.dataset.sectionId === hash);
        const nextIndex = hashIndex >= 0 ? hashIndex : 0;

        activeIndex.current = nextIndex;
        updatePageState(nextIndex);
        animate(track, {
          y: -nextIndex * window.innerHeight,
          duration: 0,
        });
      };

      const handleWheel = (event) => {
        event.preventDefault();
        if (Math.abs(event.deltaY) >= 12) {
          moveBy(event.deltaY > 0 ? 1 : -1);
        }
      };

      const handleKeyDown = (event) => {
        if (["ArrowDown", "PageDown", " "].includes(event.key)) {
          event.preventDefault();
          moveBy(1);
        }

        if (["ArrowUp", "PageUp"].includes(event.key)) {
          event.preventDefault();
          moveBy(-1);
        }
      };

      const handleTouchStart = (event) => {
        touchStartY.current = event.touches[0].clientY;
      };

      const handleTouchEnd = (event) => {
        const distance = touchStartY.current - event.changedTouches[0].clientY;
        if (Math.abs(distance) > 45) {
          moveBy(distance > 0 ? 1 : -1);
        }
      };

      const handleAnchorClick = (event) => {
        const link = event.target.closest("a[href^='#']");
        if (!link) return;

        const targetId = link.getAttribute("href").replace("#", "");
        const targetIndex = sections.findIndex((section) => section.dataset.sectionId === targetId);

        if (targetIndex >= 0) {
          event.preventDefault();
          moveTo(targetIndex);
        }
      };

      const handleResize = () => {
        animate(track, {
          y: -activeIndex.current * window.innerHeight,
          duration: 0,
        });
      };

      syncToHash();

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
      window.addEventListener("resize", handleResize);
      document.addEventListener("click", handleAnchorClick);

      cleanupDesktop.current = () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("click", handleAnchorClick);
      };
    };

    const syncMode = () => {
      if (desktopQuery.matches) {
        setupDesktop();
      } else {
        resetToMobile();
      }
    };

    syncMode();
    desktopQuery.addEventListener("change", syncMode);

    return () => {
      desktopQuery.removeEventListener("change", syncMode);
      cleanupDesktop.current?.();
      cleanupDesktop.current = null;
      document.documentElement.classList.remove("fullpage-active");
      document.body.classList.remove("fullpage-active");
      document.body.classList.remove("is-home-section");
      document.body.classList.remove("is-inner-section");
      showHeader();
    };
  }, []);
}
