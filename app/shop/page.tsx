import type { Metadata } from "next";
import ShowcasePage from "../components/showcase-page";

export const metadata: Metadata = {
  title: "Shop Services | DERBROYAL LIMITED",
  description: "Find the right cut, colour, and care at DERBROYAL LIMITED.",
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
          label: "CUT & SHAPE",
          title: "A cut made for you",
          description:
            "A considered consultation and a shape that works with your texture and routine.",
        },
        {
          label: "COLOUR",
          title: "Colour with dimension",
          description:
            "Personalised colour ideas, from subtle brightness to a whole new mood.",
        },
        {
          label: "CARE & STYLE",
          title: "The finishing touch",
          description:
            "Nourishing care and styling for everyday confidence or a special moment.",
        },
      ]}
    />
  );
}
