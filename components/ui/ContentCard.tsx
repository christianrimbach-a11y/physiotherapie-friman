import { ReactNode } from "react";

interface ContentCardProps {
  title: string;
  children: ReactNode;
}

export default function ContentCard({ title, children }: ContentCardProps) {
  return (
    <article
      className="rounded-2xl border border-gray-200/80 bg-gray-50/80 p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      aria-labelledby={title.replace(/\s/g, "-").toLowerCase()}
    >
      <h2
        id={title.replace(/\s/g, "-").toLowerCase()}
        className="text-xl font-semibold text-gray-900 mb-4"
      >
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </article>
  );
}
