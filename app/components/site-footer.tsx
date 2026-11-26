"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SparkleIcon, CheckIcon, MapPinIcon } from "./icons";

export default function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <footer className="site-footer-advanced">
      {/* Newsletter Bar */}
      <div className="footer-newsletter-section">
        <div className="section-wrap newsletter-grid">
          <div className="newsletter-copy">
            <span className="newsletter-sparkle">
              <SparkleIcon size={12} className="inline mr-1" />
              VIP PRIVILEGE CLUB
            </span>
            <h3>Join the DERBROYAL Circle</h3>
            <p>
              Receive early access to limited lace drops, bespoke styling masterclasses,
              and <strong>10% off</strong> your first order with code <strong>ROYAL10</strong>.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" className="button button-primary">
                Join Now ↗
              </button>
            </div>
            {newsletterSuccess && (
              <p className="newsletter-success">
                <CheckIcon size={14} className="inline mr-1 text-emerald-400" />
                Welcome to the Inner Circle! Check your inbox for your 10% privilege code.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="section-wrap footer-links-section">
        <div className="footer-col brand-col">
          <Link className="footer-brand" href="/">
            <span className="brand-logo-small">
              <Image
                src="/derbroyal-logo.png"
                alt="DERBROYAL Logo"
                width={48}
                height={38}
              />
            </span>
            <strong>DERBROYAL</strong>
            <span>LIMITED</span>
          </Link>
          <p className="footer-tagline">
            Diversified excellence across luxury virgin hair, bespoke wig styling,
            manicure & pedicure rituals, and professional beauty distribution.
          </p>

          <div className="footer-studio-location">
            <MapPinIcon size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Benin City, Edo State, Nigeria</strong>
              <p>Appointments: Mon – Sat, 10:00 – 19:00</p>
              <a href="mailto:Debbyroyalhairs@gmail.com">Debbyroyalhairs@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Boutique & Catalog</h4>
          <ul>
            <li>
              <Link href="/shop">All Collections</Link>
            </li>
            <li>
              <Link href="/new-arrivals">New Season Wigs</Link>
            </li>
            <li>
              <Link href="/best-sellers">Iconic Best Sellers</Link>
            </li>
            <li>
              <Link href="/cart">Shopping Bag & Checkout</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li>
              <Link href="/contact">Bespoke Fitting Consultation</Link>
            </li>
            <li>
              <Link href="/about">About DERBROYAL</Link>
            </li>
            <li>
              <Link href="/blogs">Hair & Lace Care Notes</Link>
            </li>
            <li>
              <a href="#delivery-info">Track Delivery & Shipping</a>
            </li>
            <li>
              <a href="#returns-policy">Returns & Exchange Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Studio Services</h4>
          <ul>
            <li>
              <Link href="/shop">13x6 HD Lace Wig Customization</Link>
            </li>
            <li>
              <Link href="/shop">Precision Silk Press & Cut</Link>
            </li>
            <li>
              <Link href="/shop">Deluxe Spa Manicure & Pedicure</Link>
            </li>
            <li>
              <Link href="/shop">Scalp Therapy & Hair Elixirs</Link>
            </li>
            <li>
              <Link href="/contact">Wholesale & Trade Inquiries</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Payment Badges */}
      <div className="section-wrap footer-bottom-section">
        <div className="footer-bottom-left">
          <small>© 2026 DERBROYAL LIMITED. All Rights Reserved.</small>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#cookie">Cookie Preferences</a>
          </div>
        </div>

        <div className="footer-payment-methods">
          <span className="payment-tag">Fidelity Bank Transfer</span>
        </div>

        <Link className="back-to-top" href="#">
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </div>
    </footer>
  );
}
