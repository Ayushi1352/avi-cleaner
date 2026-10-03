import PageHero from "@/components/PageHero";
import GalleryPhotos from "./GalleryPhotos";
import GalleryVideo from "./GalleryVideo";

export const metadata = {
  title: "Gallery | Avicleaner",
  description: "Photos and videos of the Avicleaner team at work in homes and offices.",
};

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default function GalleryPage() {
  return (
    <main className="grow">
      <PageHero title="Gallery" />
      <GalleryPhotos />
      <GalleryVideo />
    </main>
  );
}
