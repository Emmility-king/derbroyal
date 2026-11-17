import type { Metadata } from "next";
import ShowcasePage from "../components/showcase-page";

export const metadata: Metadata = {
  title: "Best Sellers | DERBROYAL LIMITED",
  description: "Explore the most-loved hair services at DERBROYAL LIMITED.",
};

export default function BestSellersPage() {
  return (
    <ShowcasePage
      eyebrow="THE MOST-LOVED LOOKS"
      title="Tried, loved."
      accent="Very you."
      description="Our crowd favourites are all about beautiful shape, healthy shine, and hair that fits your life."
      sectionTitle="The icons"
      sectionAccent="for a reason."
      actionLabel="Find your favourite"
      actionHref="/shop"
      cards={[
        {
          label: "THE SIGNATURE",
          title: "The feel-good cut",
          description:
            "A tailored shape with movement and an easy-to-style finish.",
        },
        {
          label: "THE GLOW-UP",
          title: "Dimensional colour",
          description:
            "Soft, natural-looking depth designed to grow out beautifully.",
        },
        {
          label: "THE FINAL TOUCH",
          title: "The glossy blowout",
          description:
            "Smooth, bouncy styling that brings the whole look together.",
        },
      ]}
    />
  );
}
