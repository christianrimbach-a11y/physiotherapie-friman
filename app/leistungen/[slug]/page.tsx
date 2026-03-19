import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTreatmentBySlug, getTreatmentsWithDetailPage } from "@/data/treatments";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const treatments = getTreatmentsWithDetailPage();
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment?.hasDetailPage) return { title: "Leistung" };
  return {
    title: treatment.title,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment?.hasDetailPage || !treatment.detail) notFound();

  return <ServiceDetailLayout treatment={treatment} />;
}
