import PageHero from "@/components/PageHero";
import GalleryPhotos from "./GalleryPhotos";
import GalleryVideo from "./GalleryVideo";
import { site } from "@/data";

// Text lives in src/data/site.json.
const copy = site.galleryPage.text.Page;

export const metadata = site.galleryPage.meta.Page;

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function GalleryPage() {
  return (
    <main className="grow">
      <PageHero title={copy.gallery} />
      <GalleryPhotos />
      <GalleryVideo />
    </main>
  );
}
