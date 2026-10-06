import { site, fill } from "@/data";

// UI text, links and images live in src/data/site.json.
const uiImages = site.servicesPage.images.servicesData;

// Services for the Services page and the Service Detail pages.
// Each service gets a detail page at /services/<slug>.
// Photos go in /public/images/services/ with the file names used below.
// `image` is the card photo on the Services page.

// Content lives in src/data/site.json.
const services = site.servicesPage.services.map((item) => ({ ...item }));

// Detail page top photo: /images/services/<slug>-detail.webp (different from the
// card photo). The card photo is reused in the checklist section of the detail page.
(services as Array<(typeof services)[number] & { detailImage?: string; checklistImage?: string }>).forEach((s) => {
  s.detailImage = s.detailImage || fill(uiImages.slugDetail, { slug: s.slug });
  s.checklistImage = s.checklistImage || s.image;
});

// Content lives in src/data/site.json.
const slugAliases: Record<string, string> = site.servicesPage.slugAliases;

export function getServiceBySlug(rawSlug?: string | string[]) {
  if (!rawSlug) return null;
  const slugStr = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  if (typeof slugStr !== "string") return null;
  const clean = decodeURIComponent(slugStr).trim().toLowerCase().replace(/\/$/, "");

  // 1. Direct slug match
  const direct = services.find((s) => s.slug.toLowerCase() === clean);
  if (direct) return direct;

  // 2. Alias match
  const targetSlug = slugAliases[clean];
  if (targetSlug) {
    const aliased = services.find((s) => s.slug.toLowerCase() === targetSlug);
    if (aliased) return aliased;
  }

  // 3. Partial substring match
  return (
    services.find(
      (s) => s.slug.toLowerCase().includes(clean) || clean.includes(s.slug.toLowerCase())
    ) || null
  );
}

export default services;
