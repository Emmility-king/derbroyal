import type { Metadata } from "next";
import ShowcasePage from "../components/showcase-page";

export const metadata: Metadata = {
  title: "Shop Services | DERBROYAL LIMITED",
  description:
    "Explore hair, manicure, pedicure, and personal-care services at DERBROYAL LIMITED.",
};

export default function ShopPage() {
  return (
    <ShowcasePage
      eyebrow="YOUR HAIR, WELL LOOKED AFTER"
      title="Find your"
      accent="hair ritual."
      description="Explore our studio services and choose a little refresh, a full transformation, or something lovely in between."
      sectionTitle="A little care"
      sectionAccent="goes a long way."
      actionLabel="Talk through your look"
      actionHref="/contact"
      cards={[
        {
          label: "NAIL CARE",
          title: "Manicure & pedicure",
          description:
            "Polished hands and feet, detailed nail care, and treatments that leave you feeling refreshed.",
          image: "/derbroyal-manicure-pedicure.png",
          imageAlt: "Pink manicure and pedicure treatment",
        },
        {
          label: "BEAUTY LOOK",
          title: "A polished beauty moment",
          description:
            "Effortless beauty, warm confidence, and a look made to feel completely your own.",
          image: "/derbroyal-beauty-portrait-1.jpeg",
          imageAlt: "Black woman wearing a polished beauty look",
        },
        {
          label: "PERSONAL CARE",
          title: "Care with confidence",
          description:
            "A feel-good finish with personal attention, from everyday care to a special occasion.",
          image: "/derbroyal-beauty-portrait-2.jpeg",
          imageAlt: "Smiling Black woman in a beauty portrait",
        },
      ]}
    />
  );
}
