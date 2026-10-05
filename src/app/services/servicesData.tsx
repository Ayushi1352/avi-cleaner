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
  {
    slug: "sofa-upholstery-cleaning",
    title: "Sofa & Upholstery Cleaning",
    whyName: "Sofa Cleaning",
    short: "Restore the freshness, comfort and deep hygiene of your upholstered sofas, cushions and armchairs.",
    icon: "carpet",
    image: "/images/service-sofa.webp",
    detailImage: "/images/about-sofa-vacuum.webp",
    intro:
      "Our sofa and upholstery cleaning service removes deep dust, stubborn spots, and allergens to rejuvenate your furniture. We use gentle yet powerful fabric-safe solutions that restore original freshness without damaging texture or colour.",
    checklistIntro: "We follow a detailed checklist to carefully clean and revitalize your upholstery.",
    checklist: [
      "Fabric pre-inspection & spot testing",
      "Deep dust extraction & vacuuming",
      "Stain & spot treatment",
      "Shampoo & fabric sanitization",
      "Allergen & mite removal",
      "Odour neutralising treatment",
      "Cushion deep sanitization",
      "Fast-drying air blower finish",
      "Fibre protection coat",
      "Customized as per your needs",
    ],
    ctaEyebrow: "Let's Make Your Furniture Fresh",
    ctaText: "Enjoy clean, healthy and revitalized sofas with our upholstery specialists.",
  },
  {
    slug: "sanitization-disinfection-service",
    title: "Sanitization & Disinfection",
    whyName: "Sanitization Service",
    short: "Hospital-grade sanitization eliminating 99.9% of bacteria and viruses for safe environments.",
    icon: "building",
    image: "/images/mission/mission-cleaning.webp",
    detailImage: "/images/why-choose-us.webp",
    intro:
      "Our sanitization and disinfection service targets high-touch surfaces, shared equipment, and communal zones. Using hospital-grade, eco-friendly disinfectants, we eliminate 99.9% of pathogens to keep your family and workforce safe.",
    checklistIntro: "We follow strict hygiene protocols to disinfect and protect every zone.",
    checklist: [
      "High-touch surface sterilization",
      "Doorknob & light switch wipe",
      "Restroom & pantry sanitization",
      "ULV cold fogging treatment",
      "Hospital-grade disinfectant usage",
      "Airborne pathogen neutralization",
      "Child and pet safe formulas",
      "Desk & workstation disinfection",
      "Post-sanitization check",
      "Certified hygienic clearance",
    ],
    ctaEyebrow: "Keep Your Spaces Germ-Free",
    ctaText: "Protect your family and employees with certified medical-grade disinfection.",
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In & Move-Out Cleaning",
    whyName: "Move In/Out Cleaning",
    short: "Comprehensive top-to-bottom cleaning ensuring seamless transitions into spotless properties.",
    icon: "home",
    image: "/images/project-living.webp",
    detailImage: "/images/project-kitchen.webp",
    intro:
      "Moving into a new space or vacating your current one? Our move-in and move-out cleaning service handles all the deep scrubbing, polishing, and sanitizing so you step into a spotless, welcoming environment with complete peace of mind.",
    checklistIntro: "We follow an exhaustive checklist to guarantee a 100% spotless handoff.",
    checklist: [
      "Full property dusting & cobweb clearing",
      "Inside & outside cabinet wiping",
      "Kitchen appliance degreasing",
      "Bathroom descaling & disinfection",
      "Window glass & sill cleaning",
      "Baseboards & trim detailing",
      "Floor scrubbing & polishing",
      "Closet & drawer interior wipe",
      "Trash & debris clearance",
      "Ready-to-move quality guarantee",
    ],
    ctaEyebrow: "Stress-Free Moving Cleaning",
    ctaText: "Leave the heavy scrubbing to us and focus on settling into your new journey.",
  },
];

// Detail page top photo: /images/services/<slug>-detail.webp (different from the
// card photo). The card photo is reused in the checklist section of the detail page.
(services as Array<(typeof services)[number] & { detailImage?: string; checklistImage?: string }>).forEach((s) => {
  s.detailImage = s.detailImage || `/images/services/${s.slug}-detail.webp`;
  s.checklistImage = s.checklistImage || s.image;
});

const slugAliases: Record<string, string> = {
  "home-cleaning": "home-deep-cleaning",
  "deep-cleaning": "home-deep-cleaning",
  "bathroom-cleaning": "home-deep-cleaning",
  "bathroom-sanitization": "home-deep-cleaning",
  "bathroom-sanitization-cleaning": "home-deep-cleaning",
  "office-cleaning": "office-professional-cleaning",
  "kitchen-cleaning": "kitchen-hygiene-cleaning",
  "window-cleaning": "windows-deep-cleaning",
  "windows-cleaning": "windows-deep-cleaning",
  "commercial-cleaning": "commercial-building-cleaning",
  "carpet-cleaning": "deep-carpet-cleaning",
  "sofa-cleaning": "sofa-upholstery-cleaning",
  "upholstery-cleaning": "sofa-upholstery-cleaning",
  "sanitization": "sanitization-disinfection-service",
  "disinfection": "sanitization-disinfection-service",
  "move-in-out": "move-in-move-out-cleaning",
  "move-in-out-cleaning": "move-in-move-out-cleaning",
};

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
