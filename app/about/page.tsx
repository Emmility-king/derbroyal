import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MotionEffects from "../motion-effects";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "About | DERBROYAL LIMITED",
  description:
    "Learn about DERBROYAL LIMITED, a diversified business enterprise across beauty, personal care, trading, and commercial sectors.",
};

const businessAreas = [
  {
    number: "01",
    title: "Hair sales & styling",
    description: "Hair products, styling, and salon operations.",
  },
  {
    number: "02",
    title: "Manicure & pedicure",
    description: "Beauty and personal-care services.",
  },
  {
    number: "03",
    title: "Trading & distribution",
    description: "General trading, goods supply, and distribution.",
  },
];

export default function AboutPage() {
  return (
    <main className="site-shell company-about-page">
      <SiteHeader />

      <section className="company-profile-hero section-wrap">
        <div className="company-profile-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            ABOUT DERBROYAL LIMITED
          </p>
          <h1>
            Quality, care &
            <br />
            <em>room to grow.</em>
          </h1>
          <p>
            DERBROYAL LIMITED is a diversified business enterprise established
            to provide quality products and services across the beauty, personal
            care, trading and commercial sectors.
          </p>
          <Link className="button button-primary" href="#business-areas">
            Explore what we do <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className="company-profile-image">
          <Image
            src="/derbroyal-founder.png"
            alt="Founder of DERBROYAL LIMITED"
            fill
            loading="eager"
            sizes="(max-width: 760px) 90vw, 42vw"
          />
          <span>FOUNDER • DERBROYAL LIMITED</span>
        </div>
      </section>

      <section className="company-business section-wrap" id="business-areas">
        <div className="company-section-heading">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            OUR BUSINESS
          </p>
          <h2>
            More ways to
            <br />
            <em>make a difference.</em>
          </h2>
          <p>
            The company specializes in hair sales and styling, salon operations,
            manicure and pedicure services, general trading, supply and
            distribution of goods, and other lawful business activities.
          </p>
        </div>
        <div className="company-business-grid">
          {businessAreas.map((area) => (
            <article className="company-business-card" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company-mission">
        <div className="company-mission-image">
          <Image
            src="/WhatsApp Image 2026-11-26 at 10.30.06 (2).jpeg"
            alt="Black woman with a natural curly hairstyle"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
          />
        </div>
        <div className="company-mission-copy">
          <p className="eyebrow">OUR MISSION</p>
          <h2>
            Built on quality.
            <br />
            <em>Driven to grow.</em>
          </h2>
          <p>
            Our mission is to deliver quality, professionalism and customer
            satisfaction while building a reputable brand with opportunities for
            growth and expansion across multiple industries.
          </p>
          <Link className="button button-light" href="/contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
