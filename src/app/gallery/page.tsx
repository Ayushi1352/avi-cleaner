import PageHero from "@/components/PageHero";
import GalleryPhotos from "./GalleryPhotos";
import GalleryVideo from "./GalleryVideo";
import galleryData from "@/data/gallery.json";

// Text lives in src/data/gallery.json under text.Page.
const copy = galleryData.text.Page;

export const metadata = galleryData.meta.Page;

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
