"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import MotionEffects from "../motion-effects";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { useStore } from "../context/store-context";
import { formatNaira } from "../lib/currency";
import { StarIcon } from "../components/icons";

export default function NewArrivalsCollection() {
  const { products, addToCart, setQuickViewProduct } = useStore();

  const [styleFilter, setStyleFilter] = useState<string>("all");
  const [shadeFilter, setShadeFilter] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("featured");

  // Filter products: show wigs & products marked as new arrivals or created recently
  const visibleArrivals = useMemo(() => {
    const list = products.filter((p) => {
      const isArrival =
        p.tag.toLowerCase().includes("new") ||
        p.tag.toLowerCase().includes("trending") ||
        p.tag.toLowerCase().includes("high") ||
        p.tag.toLowerCase().includes("editor");

      const matchesStyle = styleFilter === "all" || p.style === styleFilter;
      const matchesShade = shadeFilter === "all" || p.shade === shadeFilter;
      return (isArrival || products.length <= 10) && matchesStyle && matchesShade;
    });

    if (sortOrder === "name-asc") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortOrder === "name-desc") {
      return [...list].sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sortOrder === "price-asc") {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortOrder === "price-desc") {
      return [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, styleFilter, shadeFilter, sortOrder]);

  const hasActiveFilter = styleFilter !== "all" || shadeFilter !== "all";

  function clearFilters() {
    setStyleFilter("all");
    setShadeFilter("all");
    setSortOrder("featured");
  }

  return (
    <main className="site-shell collection-page">
      <SiteHeader />

      <section className="collection-hero">
        <div className="collection-hero__content">
          <p className="collection-eyebrow">
            <span aria-hidden="true">✳</span> THE NEW-SEASON EDIT
          </p>
          <h1>
            New arrivals
            <br />
            <em>for your crown.</em>
          </h1>
          <p className="collection-intro">
            A fresh edit of statement wigs, custom colours, and salon-ready looks for Black
            women. Find your texture, choose your mood, and make the look yours.
          </p>
          <div className="collection-hero-actions">
            <a className="button button-primary" href="#new-styles">
              Explore the latest <span aria-hidden="true">↓</span>
            </a>
            <Link className="button button-light" href="/shop">
              Browse all collections <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="collection-catalog" id="new-styles">
        <div className="collection-toolbar">
          <div className="collection-filters">
            <label className="collection-select">
              <span>Style</span>
              <select
                aria-label="Filter by style"
                value={styleFilter}
                onChange={(e) => setStyleFilter(e.target.value)}
              >
                <option value="all">All styles</option>
                <option value="waves">Waves & curls</option>
                <option value="bobs">Bobs</option>
                <option value="straight">Straight & fringe</option>
              </select>
            </label>

            <label className="collection-select">
              <span>Shade</span>
              <select
                aria-label="Filter by shade"
                value={shadeFilter}
                onChange={(e) => setShadeFilter(e.target.value)}
              >
                <option value="all">All shades</option>
                <option value="natural">Natural tones</option>
                <option value="colour">Statement colour</option>
                <option value="blonde">Blonde tones</option>
                <option value="burgundy">Burgundy wine</option>
                <option value="copper">Warm copper</option>
              </select>
            </label>

            {hasActiveFilter && (
              <button
                className="collection-clear"
                type="button"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="collection-results">
            <p aria-live="polite">
              {visibleArrivals.length}{" "}
              {visibleArrivals.length === 1 ? "style" : "styles"}
            </p>
            <label className="collection-select collection-sort">
              <span>Sort by</span>
              <select
                aria-label="Sort arrivals"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name, A to Z</option>
                <option value="name-desc">Name, Z to A</option>
              </select>
            </label>
          </div>
        </div>

        {visibleArrivals.length > 0 ? (
          <div className="collection-grid">
            {visibleArrivals.map((arrival) => (
              <article className="collection-product-card" key={arrival.id}>
                <div className="collection-product-image">
                  <Image
                    src={arrival.image}
                    alt={arrival.imageAlt || arrival.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <span className="collection-product-badge">
                    {arrival.tag || "NEW ARRIVAL"}
                  </span>
                  <button
                    type="button"
                    className="collection-product-action"
                    onClick={() => setQuickViewProduct(arrival)}
                  >
                    Quick View <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <div className="collection-product-info">
                  <div className="arrival-meta-top">
                    <p className="arrival-tag">{arrival.tag}</p>
                    <span className="arrival-rating inline-flex items-center gap-1">
                      <StarIcon size={12} fill="#f59e0b" className="text-amber-500 inline" />
                      <span>{arrival.rating.toFixed(1)}</span>
                    </span>
                  </div>

                  <h2>{arrival.name}</h2>
                  <span className="arrival-desc">{arrival.description}</span>

                  <div className="arrival-footer-row">
                    <div className="arrival-price-wrap">
                      <span className="arrival-price">{formatNaira(arrival.price)}</span>
                      {arrival.compareAtPrice && (
                        <span className="arrival-compare-price">
                          {formatNaira(arrival.compareAtPrice)}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="button button-primary arrival-add-btn"
                      onClick={() => addToCart(arrival)}
                    >
                      Add to Bag ↗
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="collection-empty" role="status">
            <p>No styles match those filters. Try another combination.</p>
            <button type="button" className="button button-primary mt-3" onClick={clearFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <section className="collection-close">
        <p className="collection-eyebrow">YOUR TEXTURE. YOUR ENERGY.</p>
        <h2>
          The next look
          <br />
          <em>is all yours.</em>
        </h2>
        <div className="flex gap-4 justify-center">
          <Link className="button button-primary" href="/shop">
            Shop Full Catalog <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button button-light" href="/contact">
            Book Fitting Consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
