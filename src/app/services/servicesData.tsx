// Services for the Services page and the Service Detail pages.
// Each service gets a detail page at /services/<slug>.
// Photos go in /public/images/services/ with the file names used below.
// `image` is the card photo on the Services page.

const services = [
  {
    slug: "home-deep-cleaning",
    title: "Home Deep Cleaning",
    whyName: "Home Cleaning",
    short: "A healthier and fresher home for you and your family. We clean every corner with care and attention.",
    icon: "home",
    image: "/images/services/home-deep-cleaning.webp",
    intro:
      "Our home deep cleaning service is designed to give you a fresh, healthy and spotless living space. We clean every corner with care and attention, removing dust, dirt and allergens to make your home safer and more comfortable for you and your family.",
    checklistIntro: "We follow a detailed checklist to ensure your home gets a complete and thorough cleaning.",
    checklist: [
      "Dusting all surfaces",
      "Vacuuming & mopping floors",
      "Kitchen cleaning (cabinets, countertop)",
      "Bathroom cleaning & sanitization",
      "Window & glass cleaning",
      "Furniture cleaning",
      "Cobweb removal",
      "Trash removal",
      "Door & switch cleaning",
      "Customized as per your needs",
    ],
    ctaEyebrow: "Let's Make Your Home Spotless",
    ctaText: "Enjoy a cleaner, fresher and healthier home with our professional cleaning services.",
  },
  {
    slug: "office-professional-cleaning",
    title: "Office Professional Cleaning",
    short: "Keep your workplace clean, productive and welcoming with our professional office cleaning services.",
    icon: "office",
    image: "/images/services/office-professional-cleaning.webp",
    intro:
      "Our office cleaning service keeps your workplace clean, organised and welcoming. We work around your schedule to clean desks, meeting rooms, kitchens and washrooms, so your team can focus on work in a healthy environment.",
    checklistIntro: "We follow a detailed checklist to keep every part of your office fresh and hygienic.",
    checklist: [
      "Desk & workstation cleaning",
      "Vacuuming & mopping floors",
      "Meeting room cleaning",
      "Pantry & kitchen cleaning",
      "Washroom sanitization",
      "Glass & partition cleaning",
      "Trash & recycling removal",
      "Door handle & switch disinfection",
      "Reception area cleaning",
      "Flexible after-hours cleaning",
    ],
    ctaEyebrow: "Let's Make Your Office Spotless",
    ctaText: "Give your team a cleaner, healthier and more productive workplace.",
  },
  {
    slug: "kitchen-hygiene-cleaning",
    title: "Kitchen Hygiene Cleaning",
    short: "We ensure a spotless and germ-free kitchen so you can enjoy a safe and healthy cooking space.",
    icon: "kitchen",
    image: "/images/services/kitchen-hygiene-cleaning.webp",
    intro:
      "Our kitchen hygiene cleaning removes grease, grime and germs from every surface. From cabinets to appliances, we leave your kitchen spotless and safe, so you can cook with complete peace of mind.",
    checklistIntro: "We follow a detailed checklist so every corner of your kitchen is clean and germ-free.",
    checklist: [
      "Countertop degreasing",
      "Cabinet cleaning (inside & out)",
      "Stove & chimney cleaning",
      "Sink & tap descaling",
      "Refrigerator cleaning",
      "Microwave & oven cleaning",
      "Tile & backsplash cleaning",
      "Floor scrubbing & mopping",
      "Trash bin sanitization",
      "Customized as per your needs",
    ],
    ctaEyebrow: "Let's Make Your Kitchen Spotless",
    ctaText: "Enjoy a cleaner, safer and healthier kitchen with our hygiene experts.",
  },
  {
    slug: "windows-deep-cleaning",
    title: "Windows Deep Cleaning",
    short: "Crystal clear windows for a brighter and more inviting space. We remove dirt, dust and stains effectively.",
    icon: "window",
    image: "/images/services/windows-deep-cleaning.webp",
    intro:
      "Our windows deep cleaning gives you crystal clear glass inside and out. We remove dirt, dust, water spots and stains from glass, frames and tracks, so more light fills your space.",
    checklistIntro: "We follow a detailed checklist to leave every window clean, clear and streak-free.",
    checklist: [
      "Interior glass cleaning",
      "Exterior glass cleaning",
      "Frame & sill wiping",
      "Window track cleaning",
      "Mesh & screen cleaning",
      "Hard water stain removal",
      "Grill & bar cleaning",
      "Streak-free finish",
      "Balcony glass cleaning",
      "Customized as per your needs",
    ],
    ctaEyebrow: "Let's Make Your Windows Shine",
    ctaText: "Enjoy brighter rooms and a clearer view with our window experts.",
  },
  {
    slug: "commercial-building-cleaning",
    title: "Commercial Building Cleaning",
    short: "Complete cleaning solutions for commercial spaces, ensuring a clean, safe and professional environment.",
    icon: "building",
    image: "/images/services/commercial-building-cleaning.webp",
    intro:
      "Our commercial building cleaning covers lobbies, corridors, offices, washrooms and common areas. Our trained teams use safe products and a clear checklist to keep your building clean, safe and professional every day.",
    checklistIntro: "We follow a detailed checklist to keep every floor and common area clean and safe.",
    checklist: [
      "Lobby & reception cleaning",
      "Corridor & staircase cleaning",
      "Lift & elevator cleaning",
      "Washroom sanitization",
      "Floor scrubbing & polishing",
      "Glass facade (ground level)",
      "Common area disinfection",
      "Trash & recycling management",
      "Parking area sweeping",
      "Scheduled daily or weekly visits",
    ],
    ctaEyebrow: "Let's Make Your Building Spotless",
    ctaText: "Keep your commercial space clean, safe and professional every day.",
  },
  {
    slug: "deep-carpet-cleaning",
    title: "Deep Carpet Cleaning",
    short: "Remove deep-seated dirt, allergens and stains with our advanced carpet cleaning methods.",
    icon: "carpet",
    image: "/images/services/deep-carpet-cleaning.webp",
    intro:
      "Our deep carpet cleaning lifts out dirt, allergens and stains that regular vacuuming leaves behind. We use advanced equipment and safe solutions to refresh your carpets and rugs without damaging the fibres.",
    checklistIntro: "We follow a detailed checklist to bring your carpets back to life.",
    checklist: [
      "Pre-inspection of carpet type",
      "Deep vacuuming",
      "Spot & stain treatment",
      "Shampoo or steam cleaning",
      "Allergen & dust mite removal",
      "Odour removal",
      "Rug & mat cleaning",
      "Fast-drying process",
      "Fibre-safe solutions",
      "Customized as per your needs",
    ],
    ctaEyebrow: "Let's Make Your Carpets Fresh",
    ctaText: "Enjoy softer, cleaner and healthier carpets with our deep cleaning service.",
  },
];

// Detail page top photo: /images/services/<slug>-detail.webp (different from the
// card photo). The card photo is reused in the checklist section of the detail page.
(services as Array<(typeof services)[number] & { detailImage?: string; checklistImage?: string }>).forEach((s) => {
  s.detailImage = s.detailImage || `/images/services/${s.slug}-detail.webp`;
  s.checklistImage = s.checklistImage || s.image;
});

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}

export default services;
