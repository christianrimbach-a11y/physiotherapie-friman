import Image from "next/image";

interface GalleryGridProps {
  images: { src: string; alt?: string }[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({
  images,
  columns = 3,
}: GalleryGridProps) {
  const gridCols =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div
      className={`grid ${gridCols} gap-4`}
      role="list"
    >
      {images.map(({ src, alt = "" }, i) => (
        <div
          key={i}
          className="relative aspect-[4/3] rounded-card overflow-hidden bg-gray-200"
          role="listitem"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={95}
          />
        </div>
      ))}
    </div>
  );
}
