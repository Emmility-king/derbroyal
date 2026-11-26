"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import MotionEffects from "../motion-effects";
import { useStore } from "../context/store-context";
import { Product } from "../lib/products";
import { formatNaira } from "../lib/currency";
import {
  SearchIcon,
  CloseIcon,
  SparkleIcon,
  ShieldCheckIcon,
  CrownIcon,
  ScissorsIcon,
  PackageIcon,
  StarIcon,
} from "../components/icons";

export default function ShopPage() {
  const { products, addToCart, setQuickViewProduct } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [selectedShade, setSelectedShade] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchStyle = selectedStyle === "all" || p.style === selectedStyle;
      const matchShade = selectedShade === "all" || p.shade === selectedShade;
      const matchSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchStyle && matchShade && matchSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0; // featured default
    });
  }, [products, selectedCategory, selectedStyle, selectedShade, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedStyle("all");
    setSelectedShade("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  const hasFilters =
    selectedCategory !== "all" ||
    selectedStyle !== "all" ||
    selectedShade !== "all" ||
    searchQuery.trim() !== "";

  return (
    <main className="site-shell shop-page-wrap">
      <SiteHeader />

      {/* Hero */}
      <section className="shop-hero">
        <div className="section-wrap">
          <div className="shop-hero-top">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE DERBROYAL BOUTIQUE & SERVICES
            </p>
          </div>
          <h1>
            Find your
            <br />
            <em>signature look.</em>
          </h1>
          <p className="shop-hero-subtitle">
            Explore 100% virgin human hair units from ₦80,000 to ₦700,000, scalp care, and
            bespoke salon services in Benin City.
          </p>

          {/* Category Tabs */}
          <div className="shop-category-tabs">
            {[
              { id: "all", label: "All Offerings" },
              { id: "wigs", label: "Luxury Wigs & Units" },
              { id: "haircare", label: "Hair & Scalp Elixirs" },
              { id: "services", label: "Salon & Styling Services" },
              { id: "nails", label: "Manicure & Spa Rituals" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-tab ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="section-wrap shop-catalog-section">
        {/* Controls Toolbar */}
        <div className="shop-toolbar">
          <div className="shop-search-box">
            <span className="search-icon">
              <SearchIcon size={16} />
            </span>
            <input
              type="text"
              placeholder="Search by hair style, shade, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button type="button" className="clear-search" onClick={() => setSearchQuery("")}>
                <CloseIcon size={12} />
              </button>
            )}
          </div>

          <div className="shop-filter-group">
            <div className="filter-select-wrapper">
              <label>Style:</label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
              >
                <option value="all">All Styles</option>
                <option value="waves">Waves & Body</option>
                <option value="bobs">Bobs & Cuts</option>
                <option value="straight">Straight & Fringe</option>
                <option value="curls">Big Curls</option>
                <option value="care">Treatments</option>
              </select>
            </div>

            <div className="filter-select-wrapper">
              <label>Shade:</label>
              <select
                value={selectedShade}
                onChange={(e) => setSelectedShade(e.target.value)}
              >
                <option value="all">All Shades</option>
                <option value="natural">Natural Black (#1B)</option>
                <option value="colour">Statement Colour</option>
                <option value="blonde">Honey Blonde</option>
                <option value="burgundy">Burgundy Wine</option>
                <option value="copper">Warm Copper</option>
              </select>
            </div>

            <div className="filter-select-wrapper sort-wrapper">
              <label>Sort:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured Picks</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>

            {hasFilters && (
              <button
                type="button"
                className="clear-filters-btn"
                onClick={clearAllFilters}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="shop-results-meta">
          <p>
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "offering" : "offerings"}
            {hasFilters && " matching your filters"}
          </p>
          <div className="shop-trust-points">
            <span className="inline-flex items-center gap-1">
              <SparkleIcon size={13} className="text-amber-700 inline" /> Delivery available across Nigeria
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheckIcon size={13} className="text-amber-700 inline" /> Fidelity Bank transfer accepted
            </span>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="shop-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(len) => addToCart(product, 1, len)}
                onQuickView={() => setQuickViewProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="shop-empty-state">
            <div className="flex justify-center mb-3 text-amber-700">
              <SparkleIcon size={32} />
            </div>
            <h3>No products found</h3>
            <p>We couldn&apos;t find any offerings matching those specific filters.</p>
            <div className="empty-state-actions">
              <button type="button" className="button button-primary" onClick={clearAllFilters}>
                Clear All Filters ↗
              </button>
              <Link href="/contact" className="button button-light">
                Book a Fitting ↗
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Studio Value Props */}
      <section className="shop-perks-section section-wrap">
        <div className="perk-card">
          <div className="perk-icon text-amber-700">
            <CrownIcon size={28} />
          </div>
          <h3>100% Virgin Cuticle Hair</h3>
          <p>Unprocessed, silky human hair that takes heat and bleach seamlessly while retaining full body.</p>
        </div>
        <div className="perk-card">
          <div className="perk-icon text-amber-700">
            <SparkleIcon size={28} />
          </div>
          <h3>Melt-In HD Lace</h3>
          <p>Real Swiss invisible lace that blends into any complexion with pre-plucked single-hair knots.</p>
        </div>
        <div className="perk-card">
          <div className="perk-icon text-amber-700">
            <ScissorsIcon size={28} />
          </div>
          <h3>Bespoke Fitting Studio</h3>
          <p>Visit our Benin City studio for custom braid-downs, lace tinting, and hair installation.</p>
        </div>
        <div className="perk-card">
          <div className="perk-icon text-amber-700">
            <PackageIcon size={28} />
          </div>
          <h3>Signature Luxury Unboxing</h3>
          <p>Each unit arrives in our gold-embossed keepsake box with satin storage bag and silk edge band.</p>
        </div>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}

function ProductCard({
  product,
  onAddToCart,
  onQuickView,
}: {
  product: Product;
  onAddToCart: (selectedLength?: string) => void;
  onQuickView: () => void;
}) {
  const [selectedLength, setSelectedLength] = useState<string>(
    product.lengths && product.lengths.length > 0 ? product.lengths[0] : ""
  );

  return (
    <article className="store-product-card">
      {/* Top Media */}
      <div className="store-card-image-wrap">
        <Image
          src={product.image}
          alt={product.imageAlt || product.name}
          fill
          className="store-card-image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {product.tag && <span className="store-card-badge">{product.tag}</span>}

        <button
          type="button"
          className="store-card-quickview-btn"
          onClick={onQuickView}
        >
          Quick View
        </button>
      </div>

      {/* Body info */}
      <div className="store-card-content">
        <div className="store-card-meta-top">
          <span className="card-category">{product.category.toUpperCase()}</span>
          <span className="card-rating inline-flex items-center gap-1">
            <StarIcon size={12} fill="#f59e0b" className="inline text-amber-500" />
            <span>{product.rating.toFixed(1)}</span> <small>({product.reviewsCount})</small>
          </span>
        </div>

        <h3 className="store-card-title" onClick={onQuickView}>
          {product.name}
        </h3>

        <p className="store-card-description">{product.description}</p>

        {/* Length selector */}
        {product.lengths && product.lengths.length > 1 && (
          <div className="store-card-lengths">
            <span className="length-label">Option:</span>
            <div className="length-pills">
              {product.lengths.slice(0, 4).map((len) => (
                <button
                  key={len}
                  type="button"
                  className={`length-pill ${selectedLength === len ? "active" : ""}`}
                  onClick={() => setSelectedLength(len)}
                >
                  {len}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing & Add to cart */}
        <div className="store-card-action-row">
          <div className="card-price-stack">
            <span className="card-price">{formatNaira(product.price)}</span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="card-compare-price">{formatNaira(product.compareAtPrice)}</span>
            )}
          </div>

          <button
            type="button"
            className="button button-primary store-add-btn"
            onClick={() => onAddToCart(selectedLength || undefined)}
          >
            Add to Bag ↗
          </button>
        </div>
      </div>
    </article>
  );
}
