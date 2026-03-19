import Image from "next/image";

const PHOTO_EXT = /\.(jpg|jpeg|png|webp|avif)(\?|$)/i;

interface HeroImageProps {
  /** Bild-URL (z. B. /images/leistungen/xyz.jpg). Bei Platzhalter-SVG oder fehlend: neutraler Bereich. */
  src?: string | null;
  alt?: string;
}

function NeutralPlaceholder() {
  return (
    <div
      className="w-full aspect-[4/3] min-h-[240px] rounded-[20px] bg-gradient-to-br from-gray-100 to-gray-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.06)] overflow-hidden"
      aria-hidden="true"
    />
  );
}

export default function HeroImage({ src, alt = "" }: HeroImageProps) {
  const useImage = src && PHOTO_EXT.test(src);

  if (!useImage) {
    return (
      <div className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
        <NeutralPlaceholder />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-none relative aspect-[4/3] min-h-[240px] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover"
        quality={95}
        priority
      />
    </div>
  );
}
