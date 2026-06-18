type Props = {
  src: string;
  className?: string;
  poster?: string;
};

const FALLBACK_POSTER = '/images/hero-poster.webp';

/** Lightweight hero background — loops video immediately with a poster fallback. */
export default function BoomerangVideoBg({ src, className, poster = FALLBACK_POSTER }: Props) {
  return (
    <div className={`hero-video-wrap overflow-hidden ${className ?? 'absolute inset-0 w-full h-full'}`}>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="hero-video-media absolute inset-0 h-full w-full object-cover"
      />
      <video
        src={src}
        poster={poster}
        className="hero-video-media absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-[#1f2a1d]/25 pointer-events-none" />
    </div>
  );
}
