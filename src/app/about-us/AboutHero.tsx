import PageHero from "@/components/PageHero";
import aboutData from "@/data/about.json";

// Text lives in src/data/about.json under text.AboutHero.
const copy = aboutData.text.AboutHero;

/** Section 1: page banner with title and breadcrumb pill. */
export default function AboutHero() {
  return <PageHero title={copy.aboutUs} />;
}
