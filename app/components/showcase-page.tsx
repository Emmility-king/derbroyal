import Image from "next/image";
import Link from "next/link";
import MotionEffects from "../motion-effects";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

type ShowcaseCard = {
  label: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

type ShowcasePageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  sectionTitle: string;
  sectionAccent: string;
  cards: ShowcaseCard[];
  actionLabel: string;
  actionHref: string;
};

export default function ShowcasePage({
  eyebrow,
  title,
  accent,
  description,
  sectionTitle,
  sectionAccent,
  cards,
  actionLabel,
  actionHref,
}: ShowcasePageProps) {
  return (
    <main className="site-shell route-page">
      <SiteHeader />

      <section className="route-hero">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
        </p>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p className="route-description">{description}</p>
        <Link className="button button-primary route-button" href={actionHref}>
          {actionLabel} <span aria-hidden="true">↗</span>
        </Link>
        <span className="route-spark route-spark-one" aria-hidden="true">
          ✳
        </span>
        <span className="route-spark route-spark-two" aria-hidden="true">
          ✳
        </span>
      </section>

      <section className="route-features section-wrap">
        <div className="route-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE DERBROYAL EDIT
            </p>
            <h2>
              {sectionTitle}
              <br />
              <em>{sectionAccent}</em>
            </h2>
          </div>
          <p className="section-intro">
            Thoughtful details, expert care, and a little extra sparkle in
            everything we do.
          </p>
        </div>

        <div className="route-grid">
          {cards.map((card, index) => (
            <article className="route-card" key={card.title}>
              {card.image ? (
                <div className="route-card-image">
                  <Image
                    src={card.image}
                    alt={card.imageAlt ?? card.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="route-card-top">
                <span>0{index + 1}</span>
                <span aria-hidden="true">✳</span>
              </div>
              <p className="route-card-label">{card.label}</p>
              <h3>{card.title}</h3>
              <p className="route-card-description">{card.description}</p>
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
        <p>Find the service that makes you feel completely like yourself.</p>
        <Link className="button button-light" href="/shop">
          Explore the service menu <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
