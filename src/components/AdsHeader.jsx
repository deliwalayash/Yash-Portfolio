"use client";

import { useState } from "react";
import { FaBars, FaChevronDown, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { locationPages } from "../lib/location-pages";
import { PHONE_NUMBER } from "../lib/site-config";

const homeLinks = [
  { href: "#services", label: "Services" },
  { href: "#video", label: "Video" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blogs", label: "Blogs" },
  { href: "#clients", label: "Clients" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const innerLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/admin", label: "Admin" },
  { href: "/#contact", label: "Contact" },
];

const pageLinks = [
  { href: "/", label: "Google Ads Expert in India" },
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
        <img src="/clients/logo.png" alt="Yash Deliwala Google Ads Expert logo" />
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
            Pages
            <FaChevronDown />
          </button>
          <div className="ads-nav-dropdown__menu">
            {pageLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <a className="ads-header-call" href={`tel:${PHONE_NUMBER}`}>
        <FaPhoneAlt />
        <span>Call Now</span>
      </a>

      <button
        className="ads-menu-button"
        type="button"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {menuOpen && (
        <div className="ads-menu-layer" role="presentation" onClick={closeMenu}>
          <aside className="ads-mobile-menu" aria-label="Mobile navigation" onClick={(event) => event.stopPropagation()}>
            <div className="ads-mobile-menu__top">
              <a className="ads-brand" href={variant === "inner" ? "/" : "#home"} onClick={closeMenu}>
                <img src="/clients/logo.png" alt="Yash Deliwala Google Ads Expert logo" />
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
              <span>Pages</span>
              {pageLinks.map((link) => (
                <a href={link.href} key={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </nav>

            <a className="ads-mobile-menu__call" href={`tel:${PHONE_NUMBER}`}>
              <FaPhoneAlt />
              Call Now
            </a>
          </aside>
        </div>
      )}
    </header>
  );
}
