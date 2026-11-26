"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../context/store-context";
import {
  ShoppingBagIcon,
  SparkleIcon,
  ShieldCheckIcon,
  TrashIcon,
  CloseIcon,
  CheckIcon,
  PackageIcon,
} from "./icons";
import BankTransferDetails from "./bank-transfer-details";
import { formatNaira } from "../lib/currency";

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    cartSubtotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useStore();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const discountAmount = promoApplied ? Math.round(cartSubtotal * 0.1) : 0;
  const finalTotal = Math.max(0, cartSubtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "ROYAL10" || promoCode.trim().toUpperCase() === "DERB10") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try 'ROYAL10' for 10% off!");
    }
  };

  const handleStartCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `DR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setCheckoutComplete(true);
    clearCart();
  };

  const resetAll = () => {
    setIsCheckingOut(false);
    setCheckoutComplete(false);
    closeCart();
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-backdrop" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      <div className="cart-overlay" onClick={closeCart} />

      <div className="cart-drawer">
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <SparkleIcon size={18} className="cart-icon-sparkle" />
            <h2>Your Shopping Bag</h2>
            <span className="cart-badge">{cartCount}</span>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Checkout Complete View */}
        {checkoutComplete ? (
          <div className="cart-success-view">
            <div className="cart-success-icon">
              <CheckIcon size={28} />
            </div>
            <h3>Order request received</h3>
            <p className="order-id">Order Reference: <strong>{orderId}</strong></p>
            <p className="order-details-text">
              Keep this reference for your records. Transfers and delivery are confirmed manually;
              this page does not verify payment.
            </p>

            <div className="order-summary-box">
              <div className="order-summary-row">
                <span>Customer</span>
                <strong>{customerInfo.name || "Valued Client"}</strong>
              </div>
              <div className="order-summary-row">
                <span>Delivery fee</span>
                <span>{customerInfo.address || "Benin City, Edo State, Nigeria"}</span>
              </div>
              <div className="order-summary-row">
                <span>Payment</span>
                <span>Fidelity Bank transfer — verification pending</span>
              </div>
            </div>

            <BankTransferDetails />

            <button
              type="button"
              className="button button-primary w-full mt-4"
              onClick={resetAll}
            >
              Continue Shopping ↗
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Checkout View */
          <form className="cart-checkout-form" onSubmit={handleCompleteOrder}>
            <div className="checkout-back-link">
              <button type="button" onClick={() => setIsCheckingOut(false)}>
                ← Back to Cart
              </button>
            </div>
            <h3>Express Checkout</h3>

            <div className="form-group">
              <label htmlFor="checkout-name">Full Name *</label>
              <input
                id="checkout-name"
                type="text"
                required
                placeholder="e.g. Amara Johnson"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkout-email">Email Address *</label>
              <input
                id="checkout-email"
                type="email"
                required
                placeholder="amara@example.com"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkout-phone">Phone Number *</label>
              <input
                id="checkout-phone"
                type="tel"
                required
                placeholder="+234 801 234 5678"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkout-address">Delivery Address *</label>
              <textarea
                id="checkout-address"
                required
                rows={2}
                placeholder="Street address, Benin City, Edo State"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
              />
            </div>

            <BankTransferDetails />
            <label className="bank-transfer-confirmation">
              <input type="checkbox" required />
              I have made the bank transfer. My order will be confirmed after payment verification.
            </label>

            <div className="checkout-total-summary">
              <div className="summary-line">
                <span>Subtotal ({cartCount} items)</span>
                <span>{formatNaira(cartSubtotal)}</span>
              </div>
              {promoApplied && (
                <div className="summary-line discount">
                  <span>Royal VIP 10% Discount</span>
                  <span>-{formatNaira(discountAmount)}</span>
                </div>
              )}
              <div className="summary-line">
                <span>Delivery fee</span>
                <span>Confirmed after order</span>
              </div>
              <div className="summary-line total-line">
                <span>Order total before delivery</span>
                <strong>{formatNaira(finalTotal)}</strong>
              </div>
            </div>

            <button type="submit" className="button button-primary w-full">
              Submit Order Request ({formatNaira(finalTotal)}) ↗
            </button>
          </form>
        ) : (
          /* Normal Cart Items View */
          <>
            <div className="cart-shipping-meter">
              <div className="shipping-meter-text">
                Delivery available in Benin City and across Nigeria. Fee confirmed based on your address.
              </div>
            </div>

            {/* Items List */}
            <div className="cart-items-container">
              {cart.length === 0 ? (
                <div className="cart-empty-state">
                  <div className="empty-bag-illustration flex justify-center text-amber-950/40 mb-3">
                    <ShoppingBagIcon size={52} strokeWidth={1.4} />
                  </div>
                  <h3>Your shopping bag is empty</h3>
                  <p>Discover our curated collection of luxury wigs, bundles, and hair studio services.</p>
                  <Link
                    href="/shop"
                    className="button button-primary"
                    onClick={closeCart}
                  >
                    Explore Shop ↗
                  </Link>
                </div>
              ) : (
                <ul className="cart-items-list">
                  {cart.map((item, idx) => (
                    <li key={`${item.product.id}-${item.selectedLength || idx}`} className="cart-item">
                      <div className="cart-item-image">
                        <Image
                          src={item.product.image}
                          alt={item.product.imageAlt || item.product.name}
                          width={90}
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div className="cart-item-details">
                        <div className="cart-item-top">
                          <h4 className="cart-item-name">{item.product.name}</h4>
                          <button
                            type="button"
                            className="cart-item-remove"
                            onClick={() => removeFromCart(item.product.id, item.selectedLength)}
                            title="Remove item"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <TrashIcon size={14} />
                          </button>
                        </div>

                        {item.selectedLength && (
                          <p className="cart-item-variant">
                            Length / Option: <span>{item.selectedLength}</span>
                          </p>
                        )}

                        <div className="cart-item-bottom">
                          <div className="cart-quantity-selector">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedLength)}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedLength)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <div className="cart-item-price">
                            {formatNaira(item.product.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="cart-footer">
                {/* Promo Code Input */}
                <form className="cart-promo-form" onSubmit={handleApplyPromo}>
                  <input
                    type="text"
                    placeholder="Discount code (e.g. ROYAL10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button type="submit" className="button button-outline-sm">
                    Apply
                  </button>
                </form>
                {promoError && <p className="promo-error">{promoError}</p>}
                {promoApplied && (
                  <p className="promo-success inline-flex items-center gap-1">
                    <CheckIcon size={14} className="text-emerald-600 inline" />
                    10% Royal Privilege Discount Applied!
                  </p>
                )}

                {/* Subtotal Calculations */}
                <div className="cart-breakdown">
                  <div className="cart-breakdown-row">
                    <span>Subtotal</span>
                    <span>{formatNaira(cartSubtotal)}</span>
                  </div>
                  {promoApplied && (
                    <div className="cart-breakdown-row discount">
                      <span>VIP Discount (10%)</span>
                      <span>-{formatNaira(discountAmount)}</span>
                    </div>
                  )}
                  <div className="cart-breakdown-row">
                    <span>Estimated Shipping</span>
                    <span>Confirmed after order</span>
                  </div>
                  <div className="cart-breakdown-row total-row">
                    <span>Items total before delivery</span>
                    <strong>{formatNaira(finalTotal)}</strong>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="cart-actions-stack">
                  <button
                    type="button"
                    className="button button-primary w-full"
                    onClick={handleStartCheckout}
                  >
                    Proceed to Checkout ({formatNaira(finalTotal)}) ↗
                  </button>

                  <div className="cart-secondary-links">
                    <Link
                      href="/cart"
                      className="text-link text-xs"
                      onClick={closeCart}
                    >
                      View Detailed Cart Page
                    </Link>
                    <button
                      type="button"
                      className="text-link text-xs text-muted"
                      onClick={clearCart}
                    >
                      Empty Bag
                    </button>
                  </div>
                </div>

                <div className="cart-trust-badges">
                  <span className="inline-flex items-center gap-1">
                    Fidelity Bank Transfer
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheckIcon size={12} /> 100% Virgin Guarantee
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <PackageIcon size={12} /> Easy 14-Day Returns
                  </span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
