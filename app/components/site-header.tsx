"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStore } from "../context/store-context";
import { ShoppingBagIcon, SparkleIcon } from "./icons";

const navigation = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, openCart } = useStore();

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="inline-flex items-center gap-1.5">
            <SparkleIcon size={13} className="text-amber-300 inline" />
            Serving Benin City and customers across Nigeria
          </span>
          <span className="announcement-dot">•</span>
          <span>100% Virgin Hair & Melt-in HD Lace Guarantee</span>
          <span className="announcement-dot">•</span>
          <span>Benin City, Edo State</span>
        </div>
      </div>

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
            <span>HAIR STUDIO & BOUTIQUE</span>
          </span>
        </Link>

        {/* Mobile toggles */}
        <div className="header-mobile-actions">
          <button
            type="button"
            className="mobile-cart-btn"
            onClick={openCart}
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBagIcon size={18} />
            {cartCount > 0 && <span className="cart-badge-pill">{cartCount}</span>}
          </button>

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
        </div>

        {/* Navigation */}
        <nav
          className={`main-nav${isMenuOpen ? " main-nav--open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={`nav-link ${
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "nav-link--active"
                  : ""
              }`}
              aria-current={
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "page"
                  : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions: Cart Button & Booking CTA */}
        <div className="header-desktop-actions">
          <button
            type="button"
            className="header-bag-trigger"
            onClick={openCart}
            aria-label={`Open shopping cart with ${cartCount} items`}
          >
            <ShoppingBagIcon size={16} />
            <span className="bag-label">Bag</span>
            <span className={`bag-counter ${cartCount > 0 ? "has-items" : ""}`}>
              {cartCount}
            </span>
          </button>

          <Link
            className="header-cta"
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Studio <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>
    </>
  );
}
