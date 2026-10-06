import PageHero from "@/components/PageHero";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.aboutPage.text.AboutHero;

/** Section 1: page banner with title and breadcrumb pill. */
export default function AboutHero() {
  return <PageHero title={copy.aboutUs} />;
}
