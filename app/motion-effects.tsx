"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from(".site-header .brand, .site-header .main-nav a, .site-header .header-cta", {
        y: -14,
        duration: 0.65,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform",
      });

      if (document.querySelector(".hero")) {
        gsap.from(".hero-copy > *", {
          y: 22,
          duration: 0.8,
          stagger: 0.11,
          delay: 0.12,
          ease: "power3.out",
          clearProps: "transform",
        });

        gsap.from(".hero-visual", {
          x: 28,
          scale: 0.97,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "transform",
        });

        gsap.to(".hero-photo", {
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.from(".service-card", {
          y: 28,
          duration: 0.7,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-grid",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".about-photo, .about-copy > *", {
          y: 24,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".look-card", {
          y: 26,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".lookbook-grid",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".contact .eyebrow, .contact h2, .contact > p, .contact .button", {
          y: 22,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact",
            start: "top 82%",
            once: true,
          },
        });
      } else if (document.querySelector(".company-about-page")) {
        gsap.from(".company-profile-copy > *, .company-profile-image", {
          y: 22,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        });

        gsap.from(".company-business-card", {
          y: 24,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".company-business-grid",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".company-mission-image, .company-mission-copy > *", {
          y: 22,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".company-mission",
            start: "top 82%",
            once: true,
          },
        });
      } else if (document.querySelector(".collection-page")) {
        gsap.from(".collection-hero__content > *", {
          y: 22,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        });

        gsap.from(".collection-toolbar", {
          y: 16,
          duration: 0.65,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "transform",
        });

        gsap.from(".collection-product-card", {
          y: 24,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".collection-grid",
            start: "top 82%",
            once: true,
          },
        });
      } else {
        gsap.from(".route-hero .eyebrow, .route-hero h1, .route-description, .route-button", {
          y: 22,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        });

        gsap.from(".route-card", {
          y: 26,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".route-grid",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".route-cta > *", {
          y: 22,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".route-cta",
            start: "top 82%",
            once: true,
          },
        });
      }
    }, document.body);

    return () => context.revert();
  }, []);

  return null;
}
