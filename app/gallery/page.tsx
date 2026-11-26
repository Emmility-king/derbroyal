import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { galleryImages } from "../lib/gallery-images";

export const metadata: Metadata = {
  title: "Gallery | DERBROYAL LIMITED",
  description:
    "Explore DERBROYAL hair, beauty, and studio photos from Benin City, Edo State.",
};

export default function GalleryPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="gallery-page section-wrap">
        <div className="lookbook-heading gallery-page-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE DERBROYAL GALLERY
            </p>
            <h1>
              Hair &amp; beauty,
              <br />
              <em>in every mood.</em>
            </h1>
          </div>
          <p className="section-intro">
            Browse our hair collections, client looks, and studio moments.
          </p>
        </div>

        <div className="lookbook-grid">
          {galleryImages.map((image) => (
            <article className="look-card gallery-card" key={image.src}>
              <div className="look-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className="gallery-photo"
                />
              </div>
              <span className="look-label">{image.label}</span>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
