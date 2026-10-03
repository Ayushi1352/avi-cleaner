/**
 * Video card.
 * - If `video.src` is a YouTube URL (youtu.be / youtube.com), the card shows
 *   the thumbnail image with a play-button overlay. Clicking it opens the
 *   YouTube video in a new tab.
 * - If `video.src` is a local/remote MP4 path, the browser's native player is
 *   rendered (original behaviour).
 * - If `video.src` is empty the card shows only the thumbnail image.
 */

const YOUTUBE_REGEX =
  /(?:youtu\.be\/|youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/;

function isYouTubeUrl(url: string) {
  return YOUTUBE_REGEX.test(url);
}

interface VideoData {
  title: string;
  text: string;
  thumb: string;
  src: string;
}

export default function VideoCard({ video }: { video: VideoData }) {
  const isYT = video.src ? isYouTubeUrl(video.src) : false;

  return (
    <article className="min-w-0">
      <div className="relative aspect-[570/290] w-full overflow-hidden rounded-[10px] bg-[#0f2a20] 2xl:rounded-[12px]">
        {isYT ? (
          /* YouTube thumbnail + play-button overlay; click → open YT in new tab */
          <a
            href={video.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0"
          >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={video.thumb}
              alt={video.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/45" />
            {/* Play icon */}
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#14573f] shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 translate-x-0.5 sm:h-7 sm:w-7"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </a>
        ) : video.src ? (
          /* Native video */
          <video
            src={video.src}
            poster={video.thumb}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          /* Thumbnail only */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumb}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <h3 className="mt-3 text-[17px] font-bold leading-tight text-[#0b1a12] lg:text-[16px] xl:text-[19px] 2xl:mt-4 2xl:text-[22px] 3xl:mt-[18px] 3xl:text-[25px]">
        {video.title}
      </h3>
      <p className="mt-1 text-[14px] leading-snug text-[#5a6172] lg:text-[13px] xl:text-[15px] 2xl:mt-1.5 2xl:text-[17px] 3xl:text-[20px]">
        {video.text}
      </p>
    </article>
  );
}
