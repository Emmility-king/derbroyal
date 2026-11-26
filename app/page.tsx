"use client";

import MotionEffects from "./motion-effects";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { useStore } from "./context/store-context";
import { formatNaira } from "./lib/currency";
import {
  CrownIcon,
  SparkleIcon,
  TruckIcon,
  ScissorsIcon,
  StarIcon,
} from "./components/icons";

const services = [
  {
    number: "01",
    title: "Cuts with character",
    description:
      "A thoughtful cut, shaped around your features, your texture, and the way you love to wear your hair.",
    detail: "The perfect refresh",
    href: "/shop",
  },
  {
    number: "02",
    title: "Colour, your way",
    description:
      "From soft dimension to a whole new mood, find a colour that feels unmistakably you.",
    detail: "A little (or a lot) of change",
    href: "/shop",
  },
  {
    number: "03",
    title: "Care & styling",
    description:
      "Glossy finishes, feel-good treatments, and styling for the days you want to make an entrance.",
    detail: "Your hair's happy place",
    href: "/shop",
  },
];

const reviews = [
  {
    quote: "The lace literally melted into my scalp without any line of demarcation. People thought it was my real hair growing out of my head!",
    author: "Zainab A.",
    location: "Benin City, Nigeria",
    product: "Rosewood Volume Glueless Lace",
    rating: 5,
  },
  {
    quote: "I've purchased wigs from high-end boutiques all over Europe, but DERBROYAL's hair density, softness, and curl retention are on another level.",
    author: "Chiamaka O.",
    location: "Edo State, Nigeria",
    product: "Midnight Muse Raw Virgin Curls",
    rating: 5,
  },
  {
    quote: "The studio manicure and lace fitting transformed my entire weekend. The attention to detail and warm hospitality are unmatched.",
    author: "Naomi T.",
    location: "Nigeria",
    product: "Studio Manicure & Install",
    rating: 5,
  },
];

export default function Home() {
  const { products, addToCart, setQuickViewProduct } = useStore();

  // Featured 4 products for homepage
  const featuredWigs = products.slice(0, 4);

  return (
    <main className="site-shell">
      <SiteHeader />

      {/* Hero */}
      <section className="hero" id="home">
        <div
          className="hero-visual"
          role="img"
          aria-label="DERBROYAL founder wearing long, sleek hair"
        >
          <Image
            src="/derbroyal-founder.png"
            alt=""
            fill
            preload
            sizes="100vw"
            className="hero-photo-image"
          />
          <div className="hero-photo" aria-hidden="true" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            THE DERBROYAL EDIT • LUXURY HAIR & BOUTIQUE
          </p>
          <h1>
            Find your
            <br />
            <em>hair era.</em>
          </h1>
          <p className="hero-description">
            100% Raw Virgin Hair, skin-melt invisible HD lace units, and restorative salon treatments
            crafted to bring out the most radiant, confident version of you.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/shop">
              Shop Collections <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-light" href="/new-arrivals">
              Discover New Season <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-stars" aria-hidden="true">
              ✳ ✳ ✳
            </span>
            <span>Your texture. Your crown. Your way.</span>
          </div>
        </div>
      </section>

      {/* Trust & Prestige Bar */}
      <section className="trust-strip">
        <div className="section-wrap trust-grid">
          <div className="trust-item">
            <span className="trust-icon text-amber-700">
              <CrownIcon size={24} />
            </span>
            <div>
              <strong>100% Raw Virgin Hair</strong>
              <span>Single-donor cuticle aligned</span>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon text-amber-700">
              <SparkleIcon size={24} />
            </span>
            <div>
              <strong>Real Invisible HD Lace</strong>
              <span>Pre-plucked, bleached knots</span>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon text-amber-700">
              <TruckIcon size={24} />
            </span>
            <div>
              <strong>Nigeria-wide Delivery</strong>
              <span>Delivery arranged across Nigeria</span>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon text-amber-700">
              <ScissorsIcon size={24} />
            </span>
            <div>
              <strong>Benin City Beauty Studio</strong>
              <span>Private fittings & consultations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker marquee */}
      <div className="ticker" aria-label="Your crown, your way">
        <div className="ticker-track">
          <span>YOUR CROWN, YOUR WAY</span>
          <span aria-hidden="true">✳</span>
          <span>100% VIRGIN HUMAN HAIR</span>
          <span aria-hidden="true">✳</span>
          <span>MADE TO MAKE YOU GLOW</span>
          <span aria-hidden="true">✳</span>
          <span>PRE-PLUCKED HD LACE</span>
          <span aria-hidden="true">✳</span>
          <span>BESPOKE SALON CRAFTSMANSHIP</span>
          <span aria-hidden="true">✳</span>
          <span>GOOD HAIR ENERGY</span>
          <span aria-hidden="true">✳</span>
        </div>
      </div>

      {/* Featured Products Collection on Homepage */}
      <section className="home-featured-products section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              CURATED MASTERPIECES
            </p>
            <h2>
              Featured
              <br />
              <em>luxury units.</em>
            </h2>
          </div>
          <div className="heading-action-group">
            <p className="section-intro">
              Handcrafted with pre-plucked hairlines, invisible Swiss lace, and lustrous density.
            </p>
            <Link href="/shop" className="text-link">
              View all {products.length} products <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="shop-grid">
          {featuredWigs.map((product) => (
            <article className="store-product-card" key={product.id}>
              <div className="store-card-image-wrap">
                <Image
                  src={product.image}
                  alt={product.imageAlt || product.name}
                  fill
                  className="store-card-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="store-card-badge">{product.tag || "FEATURED"}</span>
                <button
                  type="button"
                  className="store-card-quickview-btn"
                  onClick={() => setQuickViewProduct(product)}
                >
                  Quick View
                </button>
              </div>

              <div className="store-card-content">
                <div className="store-card-meta-top">
                  <span className="card-category">{product.category.toUpperCase()}</span>
                  <span className="card-rating inline-flex items-center gap-1">
                    <StarIcon size={12} fill="#f59e0b" className="inline text-amber-500" />
                    <span>{product.rating.toFixed(1)}</span> <small>({product.reviewsCount})</small>
                  </span>
                </div>

                <h3 className="store-card-title" onClick={() => setQuickViewProduct(product)}>
                  {product.name}
                </h3>
                <p className="store-card-description">{product.description}</p>

                <div className="store-card-action-row">
                  <div className="card-price-stack">
                    <span className="card-price">{formatNaira(product.price)}</span>
                    {product.compareAtPrice && (
                      <span className="card-compare-price">
                        {formatNaira(product.compareAtPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="button button-primary store-add-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Bag ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="home-featured-footer">
          <Link href="/shop" className="button button-primary">
            Explore Full Shop Menu ↗
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE GOOD STUFF
            </p>
            <h2>
              Your hair,
              <br />
              <em>your moment.</em>
            </h2>
          </div>
          <p className="section-intro">
            Whether you&apos;re craving a tiny refresh or a full main-character
            moment, we&apos;re here for the transformation.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-flower" aria-hidden="true">
                  ✳
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className="service-detail">
                <span>{service.detail}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div
          className="about-photo"
          role="img"
          aria-label="Derbroyal beauty portrait"
        >
          <span className="about-photo-note">THE FEEL-GOOD FINISH</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            THIS IS DERBROYAL
          </p>
          <h2>
            Come as
            <br />
            you are.
            <br />
            <em>Leave glowing.</em>
          </h2>
          <p>
            DERBROYAL LIMITED provides premier products and services across
            beauty, personal care, trading, and commercial sectors—from virgin human
            hair and salon services to luxury manicure, pedicure, supply, and distribution.
          </p>
          <div className="flex gap-4">
            <Link className="text-link" href="/about">
              Get to know us <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/shop">
              Shop beauty essentials <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="about-stamp" aria-hidden="true">
            <span>MADE WITH</span>
            <b>♥</b>
            <span>ROYAL CARE</span>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="testimonials-section section-wrap">
        <div className="testimonials-header">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            REAL QUEENS • REAL REVIEWS
          </p>
          <h2>
            Loved by over
            <br />
            <em>4,500+ happy clients.</em>
          </h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <article key={i} className="testimonial-card">
              <div className="testimonial-stars flex items-center gap-1">
                {[1, 2, 3, 4, 5].slice(0, r.rating).map((star) => (
                  <StarIcon key={star} size={15} fill="#f59e0b" className="text-amber-500" />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{r.quote}&rdquo;</p>
              <div className="testimonial-footer">
                <div>
                  <strong>{r.author}</strong>
                  <span className="testimonial-loc">{r.location}</span>
                </div>
                <span className="testimonial-product">{r.product}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="lookbook section-wrap" id="lookbook">
        <div className="lookbook-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE GALLERY
            </p>
            <h2>
              Made to
              <br />
              <em>be seen.</em>
            </h2>
          </div>
          <div className="gallery-invitation">
            <p className="section-intro">
              Explore the styles, services, and studio moments behind the DERBROYAL look.
            </p>
            <Link href="/gallery" className="button button-primary">
              Browse the gallery <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="contact" id="contact">
        <div className="contact-spark contact-spark-one" aria-hidden="true">
          ✳
        </div>
        <div className="contact-spark contact-spark-two" aria-hidden="true">
          ✳
        </div>
        <p className="eyebrow">YOUR NEXT CHAPTER LOOKS GOOD</p>
        <h2>
          Ready for your
          <br />
          <em>hair moment?</em>
        </h2>
        <p>Let&apos;s find the unit, colour, or service that feels like it was made for you.</p>
        <div className="flex gap-4 justify-center">
          <Link className="button button-light" href="/shop">
            Explore Boutique <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button button-light" href="/contact">
            Book Consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
