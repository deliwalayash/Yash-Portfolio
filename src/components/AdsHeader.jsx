"use client";
// Updated navigation header - Admin link removed

import { useState } from "react";
import { FaBars, FaChevronDown, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { locationPages } from "../lib/location-pages";
import { PHONE_NUMBER } from "../lib/site-config";
import { handleCallClick } from "../lib/tracking";

const homeLinks = [
  { href: "#results", label: "Real Results" },
  { href: "#services", label: "Services" },
  { href: "/google-ads-agency-india", label: "Agency India" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "#pricing", label: "Pricing" },
  { href: "#clients", label: "Clients" },
];

const innerLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/#contact", label: "Contact" },
];

const pageLinks = [
  { href: "/", label: "Google Ads Expert in India" },
  { href: "/google-ads-agency-india", label: "Google Ads Agency in India" },
  { href: "/blogs", label: "Google Ads Blog" },
  ...locationPages.map((page) => ({
    href: `/${page.slug}`,
    label: `Google Ads Expert in ${page.city}`,
  })),
];

export default function AdsHeader({ variant = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = variant === "inner" ? innerLinks : homeLinks;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="ads-header">
      <a className="ads-brand" href={variant === "inner" ? "/" : "#home"} aria-label="Yash Google Ads Expert">
        <img src="/clients/logo (2).jpeg" alt="Yash Deliwala Google Ads Expert logo" decoding="async" width="40" height="40" />
        <span>Yash Google Ads Expert</span>
      </a>

      <nav className="ads-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
        <div className="ads-nav-dropdown">
          <button type="button" aria-haspopup="true">
            Pages <FaChevronDown />
          </button>
          <div className="ads-nav-dropdown__menu">
            {pageLinks.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <a
        className="ads-header-call"
        href={`tel:${PHONE_NUMBER}`}
        onClick={() => handleCallClick("Header Call Click")}
      >
        <FaPhoneAlt />
        <span>Call Now</span>
      </a>

      <button
        type="button"
        className="ads-menu-button"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      {menuOpen && (
        <div className="ads-menu-layer" role="presentation" onClick={closeMenu}>
          <aside className="ads-mobile-menu" aria-label="Mobile navigation" onClick={(event) => event.stopPropagation()}>
            <div className="ads-mobile-menu__top">
              <a className="ads-brand" href={variant === "inner" ? "/" : "#home"} onClick={closeMenu}>
                <img src="/clients/logo (2).jpeg" alt="Yash Deliwala Google Ads Expert logo" decoding="async" width="40" height="40" />
                <span>Yash Google Ads Expert</span>
              </a>
              <button type="button" aria-label="Close menu" onClick={closeMenu}>
                <FaTimes />
              </button>
            </div>

            <nav className="ads-mobile-menu__links">
              {links.map((link) => (
                <a href={link.href} key={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              className="ads-mobile-menu__call"
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => {
                handleCallClick("Mobile Menu Call Click");
                closeMenu();
              }}
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </aside>
        </div>
      )}
    </header>
  );
}
