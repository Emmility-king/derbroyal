import type { Metadata } from "next";
import ShowcasePage from "../components/showcase-page";

export const metadata: Metadata = {
  title: "Hair Notes | DERBROYAL LIMITED",
  description: "Hair care tips, styling ideas, and inspiration from DERBROYAL LIMITED.",
};

export default function BlogsPage() {
  return (
    <ShowcasePage
      eyebrow="NOTES FROM THE STUDIO"
      title="Good hair."
      accent="Good reads."
      description="A little inspiration, a few useful rituals, and fresh ideas for making your hair feel like you."
      sectionTitle="The latest"
      sectionAccent="hair notes."
      actionLabel="Browse services"
      actionHref="/shop"
      cards={[
        {
          label: "CARE NOTES",
          title: "A routine that loves your texture",
          description:
            "Simple ways to build a wash-day routine around what your hair actually needs.",
        },
        {
          label: "STYLE NOTES",
          title: "Bring your inspiration to life",
          description:
            "How to turn saved pictures and loose ideas into a look that feels personal.",
        },
        {
          label: "COLOUR NOTES",
          title: "Keep your colour feeling fresh",
          description:
            "A few thoughtful habits to help your colour stay glossy between visits.",
        },
      ]}
    />
  );
}
