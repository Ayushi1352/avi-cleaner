const MAP_SRC = "https://www.google.com/maps?q=Connaught+Place,+New+Delhi,+Delhi+110001,+India&z=15&output=embed";

/** Contact page: full-width Google map ("View on Map" scrolls here). */
export default function ContactMap() {
  return (
    <section id="map" aria-label="Our location on the map" className="w-full scroll-mt-[90px] bg-[#e8efe9] 2xl:scroll-mt-[120px]">
      <iframe
        src={MAP_SRC}
        title="Avicleaner location on Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[340px] w-full border-0 sm:h-[420px] lg:h-[520px] 2xl:h-[660px] 3xl:h-[830px]"
      />
    </section>
  );
}
