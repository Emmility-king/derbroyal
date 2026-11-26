"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "../context/store-context";
import {
  CloseIcon,
  CheckIcon,
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ScissorsIcon,
} from "./icons";
import { formatNaira } from "../lib/currency";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useStore();
  const [selectedLength, setSelectedLength] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  if (!quickViewProduct) return null;

  const currentLength =
    selectedLength || (quickViewProduct.lengths && quickViewProduct.lengths.length > 0 ? quickViewProduct.lengths[0] : "");

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity, currentLength || undefined);
    setQuickViewProduct(null);
  };

  return (
    <div className="quickview-backdrop" role="dialog" aria-modal="true" aria-label="Product Quick View">
      <div className="quickview-overlay" onClick={() => setQuickViewProduct(null)} />

      <div className="quickview-modal">
        <button
          type="button"
          className="quickview-close"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close preview"
        >
          <CloseIcon size={16} />
        </button>

        <div className="quickview-grid">
          {/* Image */}
          <div className="quickview-image-container">
            <Image
              src={quickViewProduct.image}
              alt={quickViewProduct.imageAlt || quickViewProduct.name}
              fill
              className="quickview-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {quickViewProduct.tag && (
              <span className="quickview-badge">{quickViewProduct.tag}</span>
            )}
          </div>

          {/* Details */}
          <div className="quickview-details">
            <div className="quickview-category-tag">
              <span>{quickViewProduct.category.toUpperCase()}</span>
              {quickViewProduct.inStock ? (
                <span className="stock-tag in-stock flex items-center gap-1">
                  <CheckIcon size={12} className="inline text-emerald-600" />
                  In Stock & Ready to Ship
                </span>
              ) : (
                <span className="stock-tag out-stock">Made to Order</span>
              )}
            </div>

            <h2 className="quickview-title">{quickViewProduct.name}</h2>

            <div className="quickview-rating">
              <span className="stars flex items-center gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} size={14} fill="#f59e0b" />
                ))}
              </span>
              <span className="rating-score">{quickViewProduct.rating.toFixed(1)}</span>
              <span className="rating-count">({quickViewProduct.reviewsCount} verified reviews)</span>
            </div>

            <div className="quickview-pricing">
              <span className="price-current">{formatNaira(quickViewProduct.price)}</span>
              {quickViewProduct.compareAtPrice && (
                <span className="price-compare">{formatNaira(quickViewProduct.compareAtPrice)}</span>
              )}
              {quickViewProduct.compareAtPrice && (
                <span className="price-save">
                  Save {formatNaira(quickViewProduct.compareAtPrice - quickViewProduct.price)}
                </span>
              )}
            </div>

            <p className="quickview-desc">{quickViewProduct.description}</p>

            {/* Length selector */}
            {quickViewProduct.lengths && quickViewProduct.lengths.length > 0 && (
              <div className="quickview-options">
                <label className="option-label">
                  Length / Specification: <strong>{currentLength}</strong>
                </label>
                <div className="option-chips">
                  {quickViewProduct.lengths.map((len) => (
                    <button
                      key={len}
                      type="button"
                      className={`option-chip ${currentLength === len ? "active" : ""}`}
                      onClick={() => setSelectedLength(len)}
                    >
                      {len}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Feature Bullets */}
            {quickViewProduct.details && quickViewProduct.details.length > 0 && (
              <ul className="quickview-specs">
                {quickViewProduct.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckIcon size={13} className="text-amber-700 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Quantity and Add Button */}
            <div className="quickview-actions">
              <div className="quickview-qty">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="button button-primary quickview-add-btn"
                onClick={handleAdd}
              >
                Add to Shopping Bag • {formatNaira(quickViewProduct.price * quantity)} ↗
              </button>
            </div>

            <div className="quickview-perks">
              <span className="inline-flex items-center gap-1">
                <TruckIcon size={14} className="text-amber-700" />
                Delivery available across Nigeria
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheckIcon size={14} className="text-amber-700" />
                100% Raw Virgin Guarantee
              </span>
              <span className="inline-flex items-center gap-1">
                <ScissorsIcon size={14} className="text-amber-700" />
                Free Studio Styling Advice
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
