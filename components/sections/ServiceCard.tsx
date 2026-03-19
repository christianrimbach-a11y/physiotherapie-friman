import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 rounded-card overflow-hidden hover:border-gray-800 hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
    >
      {image && (
        <div className="aspect-[4/3] relative bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 rounded-t-card"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={95}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:underline">
          Mehr erfahren
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
