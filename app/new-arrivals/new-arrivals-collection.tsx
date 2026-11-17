"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import MotionEffects from "../motion-effects";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

type StyleFilter = "all" | "waves" | "bobs" | "straight";
type ShadeFilter = "all" | "natural" | "colour";
type SortOrder = "featured" | "name-asc" | "name-desc";

type Arrival = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  style: Exclude<StyleFilter, "all">;
  shade: Exclude<ShadeFilter, "all">;
  tag: string;
};

const arrivals: Arrival[] = [
  {
    name: "Rosewood Volume",
    description: "Soft, sweeping layers with a full-bodied finish.",
    image: "/WhatsApp Image 2026-11-16 at 20.02.42.jpeg",
    imageAlt: "Long rose-brown waves displayed on a wig mannequin",
    style: "waves",
    shade: "colour",
    tag: "Soft waves",
  },
  {
    name: "Midnight Muse",
    description: "Glossy black curls with all-day main-character energy.",
    image: "/WhatsApp Image 2026-11-16 at 20.02.42 (1).jpeg",
    imageAlt: "Two voluminous black curly wigs displayed on mannequins",
    style: "waves",
    shade: "natural",
    tag: "Full curls",
  },
  {
    name: "Merlot Bob",
    description: "A sleek, rich-toned bob that makes its own entrance.",
    image: "/WhatsApp Image 2026-11-16 at 20.02.42 (2).jpeg",
    imageAlt: "A deep burgundy bob wig displayed on a mannequin",
    style: "bobs",
    shade: "colour",
    tag: "Statement bob",
  },
  {
    name: "Golden Hour Curls",
    description: "Big, bouncy curls in a golden blonde statement shade.",
    image: "/WhatsApp Image 2026-11-16 at 20.02.42 (3).jpeg",
    imageAlt: "Voluminous golden blonde curls displayed on a wig mannequin",
    style: "waves",
    shade: "colour",
    tag: "Big curls",
  },
  {
    name: "Copper Fringe",
    description: "A smooth copper finish with a face-framing fringe.",
    image: "/WhatsApp Image 2026-11-16 at 20.02.43.jpeg",
    imageAlt: "A long copper wig with a full fringe displayed on a mannequin",
    style: "straight",
    shade: "colour",
    tag: "Fringe",
  },
];

const styleOptions: { value: StyleFilter; label: string }[] = [
  { value: "all", label: "All styles" },
  { value: "waves", label: "Waves & curls" },
  { value: "bobs", label: "Bobs" },
  { value: "straight", label: "Straight & fringe" },
];

const shadeOptions: { value: ShadeFilter; label: string }[] = [
  { value: "all", label: "All shades" },
  { value: "natural", label: "Natural tones" },
  { value: "colour", label: "Statement colour" },
];

function isStyleFilter(value: string): value is StyleFilter {
  return value === "all" || value === "waves" || value === "bobs" || value === "straight";
}

function isShadeFilter(value: string): value is ShadeFilter {
  return value === "all" || value === "natural" || value === "colour";
}

function isSortOrder(value: string): value is SortOrder {
  return value === "featured" || value === "name-asc" || value === "name-desc";
}

export default function NewArrivalsCollection() {
  const [styleFilter, setStyleFilter] = useState<StyleFilter>("all");
  const [shadeFilter, setShadeFilter] = useState<ShadeFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("featured");

  const visibleArrivals = useMemo(() => {
    const filtered = arrivals.filter((arrival) => {
      const matchesStyle = styleFilter === "all" || arrival.style === styleFilter;
      const matchesShade = shadeFilter === "all" || arrival.shade === shadeFilter;
      return matchesStyle && matchesShade;
    });

    if (sortOrder === "name-asc") {
      return filtered.sort((first, second) => first.name.localeCompare(second.name));
    }

    if (sortOrder === "name-desc") {
      return filtered.sort((first, second) => second.name.localeCompare(first.name));
    }

    return filtered;
  }, [shadeFilter, sortOrder, styleFilter]);

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
            <em>for your crown.</em>
          </h1>
          <p className="collection-intro">
            A fresh edit of statement wigs and salon-ready looks for Black
            women. Find your texture, choose your mood, and make the look yours.
          </p>
          <a className="collection-scroll" href="#new-styles">
            Explore the latest <span aria-hidden="true">↓</span>
          </a>
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
                onChange={(event) => {
                  if (isStyleFilter(event.currentTarget.value)) {
                    setStyleFilter(event.currentTarget.value);
                  }
                }}
              >
                {styleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="collection-select">
              <span>Shade</span>
              <select
                aria-label="Filter by shade"
                value={shadeFilter}
                onChange={(event) => {
                  if (isShadeFilter(event.currentTarget.value)) {
                    setShadeFilter(event.currentTarget.value);
                  }
                }}
              >
                {shadeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
                onChange={(event) => {
                  if (isSortOrder(event.currentTarget.value)) {
                    setSortOrder(event.currentTarget.value);
                  }
                }}
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Name, A to Z</option>
                <option value="name-desc">Name, Z to A</option>
              </select>
            </label>
          </div>
        </div>

        {visibleArrivals.length > 0 ? (
          <div className="collection-grid">
            {visibleArrivals.map((arrival) => (
              <article className="collection-product-card" key={arrival.name}>
                <div className="collection-product-image">
                  <Image
                    src={encodeURI(arrival.image)}
                    alt={arrival.imageAlt}
                    fill
                    sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                  />
                  <span className="collection-product-badge">NEW ARRIVAL</span>
                  <Link
                    className="collection-product-action"
                    href={`/contact?style=${encodeURIComponent(arrival.name)}`}
                    aria-label={`Ask about ${arrival.name}`}
                  >
                    Ask about this look <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                <div className="collection-product-info">
                  <p>{arrival.tag}</p>
                  <h2>{arrival.name}</h2>
                  <span>{arrival.description}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="collection-empty" role="status">
            No styles match those filters. Try another combination.
          </p>
        )}
      </section>

      <section className="collection-close">
        <p className="collection-eyebrow">YOUR TEXTURE. YOUR ENERGY.</p>
        <h2>
          The next look
          <em>is all yours.</em>
        </h2>
        <Link className="button button-primary" href="/contact">
          Let&apos;s find your look <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
