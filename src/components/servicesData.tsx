import { site } from "@/data/index";

// Services for the Services page and the Service Detail page.
// Every service links to the one common detail page (/services/service-details), which shows the first service.
// Photos go in /public/images/.
// `image` is the card photo on the Services page.

// Content lives in src/data/site.json.
const services = site.servicesPage.services.map((item) => ({ ...item }));

// `detailImage` is the detail page top photo (different from the card photo).
// The card photo is reused in the checklist section of the detail page.
(services as Array<(typeof services)[number] & { checklistImage?: string }>).forEach((s) => {
  s.checklistImage = s.checklistImage || s.image;
});

export default services;
