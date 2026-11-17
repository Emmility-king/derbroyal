"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "New arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="DERBROYAL Limited home">
        <span className="brand-logo">
          <Image
            src="/derbroyal-logo.png"
            alt="DERBROYAL Limited crowned monogram logo"
            width={1024}
            height={768}
            priority
          />
        </span>
        <span className="brand-name">
          <strong>DERBROYAL</strong>
          <span>HAIR STUDIO</span>
        </span>
      </Link>

      <button
        className={`nav-toggle${isMenuOpen ? " nav-toggle--open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`main-nav${isMenuOpen ? " main-nav--open" : ""}`}
        id="main-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        className="header-cta"
        href="/contact"
        onClick={() => setIsMenuOpen(false)}
      >
        Let&apos;s talk hair <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
