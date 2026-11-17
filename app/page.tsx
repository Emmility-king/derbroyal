import MotionEffects from "./motion-effects";
import Link from "next/link";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

const services = [
  {
    number: "01",
    title: "Cuts with character",
    description:
      "A thoughtful cut, shaped around your features, your texture, and the way you love to wear your hair.",
    detail: "The perfect refresh",
  },
  {
    number: "02",
    title: "Colour, your way",
    description:
      "From soft dimension to a whole new mood, find a colour that feels unmistakably you.",
    detail: "A little (or a lot) of change",
  },
  {
    number: "03",
    title: "Care & styling",
    description:
      "Glossy finishes, feel-good treatments, and styling for the days you want to make an entrance.",
    detail: "Your hair's happy place",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero" id="home">
        <div
          className="hero-visual"
          role="img"
          aria-label="Portrait of a Black woman with voluminous natural curls"
        >
          <div className="hero-photo" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            THE DERBROYAL EDIT
          </p>
          <h1>
            Find your
            <br />
            <em>hair era.</em>
          </h1>
          <p className="hero-description">
            A cut, colour, or curl that brings out the most confident version
            of you. Come for the transformation; leave feeling like yourself.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/new-arrivals">
              Discover the edit <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/shop">
              Explore studio services <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-stars" aria-hidden="true">
              ✳ ✳ ✳
            </span>
            <span>Your texture. Your energy. Your way.</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Your crown, your way">
        <div className="ticker-track">
          <span>YOUR CROWN, YOUR WAY</span>
          <span aria-hidden="true">✳</span>
          <span>GOOD HAIR ENERGY</span>
          <span aria-hidden="true">✳</span>
          <span>MADE TO MAKE YOU GLOW</span>
          <span aria-hidden="true">✳</span>
          <span>YOUR CROWN, YOUR WAY</span>
          <span aria-hidden="true">✳</span>
          <span>GOOD HAIR ENERGY</span>
          <span aria-hidden="true">✳</span>
          <span>MADE TO MAKE YOU GLOW</span>
          <span aria-hidden="true">✳</span>
        </div>
      </div>

      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE GOOD STUFF
            </p>
            <h2>
              Your hair,
              <br />
              <em>your moment.</em>
            </h2>
          </div>
          <p className="section-intro">
            Whether you&apos;re craving a tiny refresh or a full main-character
            moment, we&apos;re here for the transformation.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-flower" aria-hidden="true">
                  ✳
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-detail">
                <span>{service.detail}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div
          className="about-photo"
          role="img"
          aria-label="Smiling Black woman showing her natural curly hairstyle"
        >
          <span className="about-photo-note">THE FEEL-GOOD FINISH</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            THIS IS DERBROYAL
          </p>
          <h2>
            Come as
            <br />
            you are.
            <br />
            <em>Leave glowing.</em>
          </h2>
          <p>
            DERBROYAL LIMITED provides quality products and services across
            beauty, personal care, trading, and commercial sectors—from hair
            and salon services to manicure, pedicure, supply, and distribution.
          </p>
          <Link className="text-link" href="/about">
            Get to know us <span aria-hidden="true">↗</span>
          </Link>
          <div className="about-stamp" aria-hidden="true">
            <span>MADE WITH</span>
            <b>♥</b>
            <span>GOOD ENERGY</span>
          </div>
        </div>
      </section>

      <section className="lookbook section-wrap" id="lookbook">
        <div className="lookbook-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE LOOKBOOK
            </p>
            <h2>
              A mood for
              <br />
              <em>every you.</em>
            </h2>
          </div>
          <p className="section-intro">
            Save a little inspiration. Bring a whole lot of you.
          </p>
        </div>
        <div className="lookbook-grid">
          <article className="look-card look-card-one">
            <div
              className="look-image look-image-one"
              role="img"
              aria-label="Black woman with soft, glossy natural curls"
            />
            <span className="look-label">SOFT & GLOSSY</span>
          </article>
          <article className="look-card look-card-two">
            <div
              className="look-image look-image-two"
              role="img"
              aria-label="Black woman with bold, voluminous curls"
            />
            <span className="look-label">BOLD & BEAUTIFUL</span>
          </article>
          <article className="look-card look-card-three">
            <div
              className="look-image look-image-three"
              role="img"
              aria-label="Black woman wearing an effortless natural hairstyle"
            />
            <span className="look-label">EFFORTLESSLY YOU</span>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-spark contact-spark-one" aria-hidden="true">
          ✳
        </div>
        <div className="contact-spark contact-spark-two" aria-hidden="true">
          ✳
        </div>
        <p className="eyebrow">YOUR NEXT CHAPTER LOOKS GOOD</p>
        <h2>
          Ready for your
          <br />
          <em>hair moment?</em>
        </h2>
        <p>Let&apos;s find the look that feels like it was made for you.</p>
        <a className="button button-light" href="#services">
          Find your service <span aria-hidden="true">↗</span>
        </a>
      </section>

      <SiteFooter />
      <MotionEffects />
    </main>
  );
}
