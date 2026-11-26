"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import MotionEffects from "../motion-effects";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { useStore } from "../context/store-context";
import { StarIcon } from "../components/icons";
import { formatNaira } from "../lib/currency";

export default function BestSellersPage() {
  const { products, addToCart, setQuickViewProduct } = useStore();

  const bestSellers = useMemo(() => {
    return products
      .filter(
        (p) =>
          p.tag.toLowerCase().includes("best") ||
          p.tag.toLowerCase().includes("signature") ||
          p.tag.toLowerCase().includes("editor") ||
          p.rating >= 4.9
      )
      .slice(0, 6);
  }, [products]);

  return (
    <main className="site-shell route-page">
      <SiteHeader />

      <section className="route-hero">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          THE MOST-LOVED ICONS
        </p>
        <h1>
          Tried, loved.
          <br />
          <em>Very you.</em>
        </h1>
        <p className="route-description">
          Our crowd favourites are all about beautiful shape, healthy shine, melt-in HD lace,
          and hair that moves with you wherever you go.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <a className="button button-primary route-button" href="#best-sellers-grid">
            Explore Best Sellers <span aria-hidden="true">↓</span>
          </a>
          <Link className="button button-light" href="/shop">
            Shop All Collections <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="route-features section-wrap" id="best-sellers-grid">
        <div className="route-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE DERBROYAL ICONS
            </p>
            <h2>
              The icons
              <br />
              <em>for a reason.</em>
            </h2>
          </div>
          <p className="section-intro">
            Hand-selected by our master stylists and celebrated by thousands of loyal clients worldwide.
          </p>
        </div>

        <div className="shop-grid">
          {bestSellers.map((item) => (
            <article className="store-product-card" key={item.id}>
              <div className="store-card-image-wrap">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.name}
                  fill
                  className="store-card-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="store-card-badge">{item.tag || "BEST SELLER"}</span>
                <button
                  type="button"
                  className="store-card-quickview-btn"
                  onClick={() => setQuickViewProduct(item)}
                >
                  Quick View
                </button>
              </div>

              <div className="store-card-content">
                <div className="store-card-meta-top">
                  <span className="card-category">{item.category.toUpperCase()}</span>
                  <span className="card-rating inline-flex items-center gap-1">
                    <StarIcon size={12} fill="#f59e0b" className="inline text-amber-500" />
                    <span>{item.rating.toFixed(1)}</span> <small>({item.reviewsCount} reviews)</small>
                  </span>
                </div>

                <h3 className="store-card-title" onClick={() => setQuickViewProduct(item)}>
                  {item.name}
                </h3>
                <p className="store-card-description">{item.description}</p>

                <div className="store-card-action-row">
                  <div className="card-price-stack">
                    <span className="card-price">{formatNaira(item.price)}</span>
                    {item.compareAtPrice && (
                      <span className="card-compare-price">{formatNaira(item.compareAtPrice)}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="button button-primary store-add-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Bag ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="route-cta">
        <p className="eyebrow">YOUR NEXT CHAPTER LOOKS GOOD</p>
        <h2>
          Good hair is
          <br />
          <em>a feeling.</em>
        </h2>
        <p>Find the unit or ritual that makes you feel radiant and utterly unstoppable.</p>
        <Link className="button button-light" href="/shop">
          Explore the full shop <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
