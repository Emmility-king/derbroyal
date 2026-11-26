"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import MotionEffects from "../motion-effects";
import { useStore } from "../context/store-context";
import BankTransferDetails from "../components/bank-transfer-details";
import { formatNaira } from "../lib/currency";
import {
  ShoppingBagIcon,
  CrownIcon,
  ShieldCheckIcon,
  CheckIcon,
} from "../components/icons";

export default function CartPage() {
  const {
    cart,
    cartCount,
    cartSubtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useStore();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const discountAmount = promoApplied ? Math.round(cartSubtotal * 0.1) : 0;
  const grandTotal = Math.max(0, cartSubtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "ROYAL10" || promoCode.trim().toUpperCase() === "DERB10") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid discount code. Try 'ROYAL10' for 10% off.");
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `DR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(id);
    setOrderComplete(true);
    clearCart();
  };

  return (
    <main className="site-shell cart-page-wrap">
      <SiteHeader />

      <section className="cart-page-hero">
        <div className="section-wrap">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            YOUR SHOPPING BAG
          </p>
          <h1>
            Review &
            <br />
            <em>Checkout.</em>
          </h1>
          <p className="cart-page-subtitle">
            Every DERBROYAL unit is inspected by our master stylists, conditioned, and packaged
            in our signature luxury presentation box.
          </p>
        </div>
      </section>

      <section className="section-wrap cart-page-content">
        {orderComplete ? (
          <div className="cart-order-confirmed-card">
            <div className="confirmed-badge flex items-center justify-center">
              <CheckIcon size={32} />
            </div>
            <h2>Order Request Received</h2>
            <p className="confirmed-ref">
              Reference: <strong>{orderId}</strong>
            </p>
            <p className="confirmed-desc">
              Thank you, {customer.name || "valued customer"}. Keep this reference for your records.
              Transfers and delivery are confirmed manually; this page does not verify payment.
            </p>

            <div className="confirmed-details-box">
              <div>
                <span>Recipient:</span> {customer.name || "Valued Client"}
              </div>
              <div>
                <span>Delivery:</span> {customer.address || "Benin City, Edo State, Nigeria"}
              </div>
              <div>
                <span>Payment:</span> Fidelity Bank transfer — verification pending
              </div>
            </div>

            <BankTransferDetails />

            <div className="confirmed-actions">
              <Link href="/shop" className="button button-primary">
                Return to Shop ↗
              </Link>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <div className="cart-empty-page-state">
            <div className="empty-icon flex justify-center text-amber-950/40 mb-4">
              <ShoppingBagIcon size={64} strokeWidth={1.2} />
            </div>
            <h2>Your shopping bag is currently empty</h2>
            <p>Ready to discover your hair era? Browse our bestselling wigs, bundles and salon treatments.</p>
            <div className="empty-buttons">
              <Link href="/shop" className="button button-primary">
                Explore Studio Shop ↗
              </Link>
              <Link href="/contact" className="button button-light">
                Book a Fitting ↗
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-page-layout">
            {/* Left: Items list or Checkout Form */}
            <div className="cart-page-main">
              {isCheckingOut ? (
                <div className="checkout-page-card">
                  <div className="checkout-card-header">
                    <button
                      type="button"
                      className="text-link"
                      onClick={() => setIsCheckingOut(false)}
                    >
                      ← Back to Bag Items
                    </button>
                    <h2>Shipping & Payment Details</h2>
                  </div>

                  <form onSubmit={handlePlaceOrder} className="checkout-main-form">
                    <div className="form-grid-2">
                      <div className="form-field">
                        <label>Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Maya Adeleke"
                          value={customer.name}
                          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        />
                      </div>

                      <div className="form-field">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="maya@example.com"
                          value={customer.email}
                          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-field">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+234 801 234 5678"
                          value={customer.phone}
                          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-field">
                        <label>Delivery Method</label>
                        <select value="delivery" disabled>
                          <option value="delivery">
                            Nigeria delivery — fee confirmed after order
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label>Delivery Address *</label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Street address, Benin City, Edo State, Nigeria"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Special Notes / Custom Head Circumference (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Petite cap (21.5 inches), bleached extra thin"
                        value={customer.notes}
                        onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                      />
                    </div>

                    <BankTransferDetails />
                    <label className="bank-transfer-confirmation">
                      <input type="checkbox" required />
                      I have made the bank transfer. My order will be confirmed after payment verification.
                    </label>

                    <button type="submit" className="button button-primary w-full py-4 text-sm mt-4">
                      Submit Order Request • {formatNaira(grandTotal)} ↗
                    </button>
                  </form>
                </div>
              ) : (
                <div className="cart-items-table-card">
                  <div className="table-header">
                    <span>Product</span>
                    <span className="text-center">Quantity</span>
                    <span className="text-right">Total</span>
                  </div>

                  <div className="table-body">
                    {cart.map((item, idx) => (
                      <div key={`${item.product.id}-${item.selectedLength || idx}`} className="table-row">
                        <div className="product-col">
                          <div className="table-product-image">
                            <Image
                              src={item.product.image}
                              alt={item.product.imageAlt || item.product.name}
                              width={85}
                              height={95}
                              style={{ objectFit: "cover", borderRadius: "10px" }}
                            />
                          </div>
                          <div className="table-product-meta">
                            <span className="meta-category">{item.product.category.toUpperCase()}</span>
                            <h3>{item.product.name}</h3>
                            {item.selectedLength && (
                              <p className="meta-spec">Option: <strong>{item.selectedLength}</strong></p>
                            )}
                            <p className="meta-unit-price">{formatNaira(item.product.price)} each</p>
                            <button
                              type="button"
                              className="table-remove-btn"
                              onClick={() => removeFromCart(item.product.id, item.selectedLength)}
                            >
                              Remove item
                            </button>
                          </div>
                        </div>

                        <div className="qty-col">
                          <div className="cart-quantity-selector">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1, item.selectedLength)
                              }
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1, item.selectedLength)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="total-col">
                          <span>{formatNaira(item.product.price * item.quantity)}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cart-table-footer">
                    <Link href="/shop" className="text-link">
                      ← Continue Shopping
                    </Link>
                    <button type="button" className="text-link text-muted" onClick={clearCart}>
                      Clear Shopping Bag
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Order Summary Sticky Card */}
            <div className="cart-page-sidebar">
              <div className="summary-sticky-card">
                <h3>Order Summary</h3>

                <div className="sidebar-shipping-banner">
                  Delivery is available in Benin City and across Nigeria. Fee is confirmed based on your address.
                </div>

                {/* Voucher code */}
                <form onSubmit={handleApplyPromo} className="summary-promo-form">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. ROYAL10)"
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
                    10% VIP Privilege Code Applied!
                  </p>
                )}

                {/* Calculations */}
                <div className="summary-lines">
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
                  <div className="summary-line grand-total-line">
                    <span>Order total before delivery</span>
                    <strong>{formatNaira(grandTotal)}</strong>
                  </div>
                </div>

                {!isCheckingOut && (
                  <button
                    type="button"
                    className="button button-primary w-full mt-4"
                    onClick={() => setIsCheckingOut(true)}
                  >
                    Proceed to Checkout ({formatNaira(grandTotal)}) ↗
                  </button>
                )}

                <div className="sidebar-guarantees">
                  <div>
                    <span className="guarantee-icon">
                      <CrownIcon size={18} />
                    </span>
                    <div>
                      <strong>100% Virgin Hair Quality</strong>
                      <p>Full cuticle aligned, ethically sourced.</p>
                    </div>
                  </div>
                  <div>
                    <span className="guarantee-icon">
                      <ShieldCheckIcon size={18} />
                    </span>
                    <div>
                      <strong>Bespoke Studio Guarantee</strong>
                      <p>Complimentary fitting consultations in our studio.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
