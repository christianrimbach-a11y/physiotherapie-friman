interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  text,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <blockquote className="bg-white border border-gray-200 rounded-card p-6 md:p-8 min-h-[240px] flex flex-col items-center text-center hover:border-gray-800/50 transition-colors duration-300">
      {rating > 0 && (
        <div className="flex justify-center gap-0.5 mb-4" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-gray-600 ${i < rating ? "opacity-100" : "opacity-30"}`}
            >
              ★
            </span>
          ))}
        </div>
      )}
      <p className="text-gray-800 leading-relaxed">&ldquo;{text}&rdquo;</p>
      <footer className="mt-6 text-sm font-medium text-gray-600">
        — {name}
      </footer>
    </blockquote>
  );
}
