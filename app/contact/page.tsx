import type { Metadata } from "next";
import ShowcasePage from "../components/showcase-page";

export const metadata: Metadata = {
  title: "Contact | DERBROYAL LIMITED",
  description: "Start planning your next look with DERBROYAL LIMITED.",
};

export default function ContactPage() {
  return (
    <ShowcasePage
      eyebrow="LET'S TALK HAIR"
      title="Your next"
      accent="look starts here."
      description="Tell us what you have in mind. We’ll help you find a service that fits your hair, your style, and your plans."
      sectionTitle="A good visit"
      sectionAccent="starts with you."
      actionLabel="See our services"
      actionHref="/shop"
      cards={[
        {
          label: "YOUR IDEAS",
          title: "Bring your inspiration",
          description:
            "A saved photo, a colour mood, or simply how you want to feel—we can start anywhere.",
        },
        {
          label: "YOUR HAIR",
          title: "Tell us what works",
          description:
            "Share your texture, routine, and what you love. The details help us make it yours.",
        },
        {
          label: "YOUR NEXT STEP",
          title: "Choose your service",
          description:
            "Explore cuts, colour, and care, then decide which direction feels right for you.",
        },
      ]}
    />
  );
}
