import type { Metadata } from "next";
import NewArrivalsCollection from "./new-arrivals-collection";

export const metadata: Metadata = {
  title: "New Arrivals | DERBROYAL LIMITED",
  description:
    "Discover fresh wig styles and new-season inspiration for Black women at DERBROYAL LIMITED.",
};

export default function NewArrivalsPage() {
  return <NewArrivalsCollection />;
}
