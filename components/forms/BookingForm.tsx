"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

const bookingSchema = z.object({
  name: z.string().min(1, "Bitte geben Sie Ihren Namen an."),
  phone: z.string().min(1, "Bitte geben Sie Ihre Telefonnummer an."),
  email: z.string().min(1, "Bitte geben Sie Ihre E-Mail an.").email("Bitte gültige E-Mail eingeben."),
  preferredDate: z.string().min(1, "Bitte geben Sie ein Wunschdatum an."),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Verarbeitung zu." }),
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (_data: BookingFormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-200 rounded-sm p-8 text-center space-y-4" role="status">
        <p className="text-gray-800 font-medium text-lg">
          Vielen Dank für Ihre Anfrage. Ihr Terminwunsch ist bei uns eingegangen.
        </p>
        <p className="text-gray-600 text-sm">
          Wir melden uns in Kürze bei Ihnen zur Bestätigung.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Input
        id="booking-name"
        label="Name"
        required
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="booking-phone"
        label="Telefon"
        type="tel"
        required
        error={errors.phone?.message}
        {...register("phone")}
      />
      <Input
        id="booking-email"
        label="E-Mail"
        type="email"
        required
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="booking-date"
        label="Wunschdatum"
        type="date"
        required
        error={errors.preferredDate?.message}
        {...register("preferredDate")}
      />
      <Textarea
        id="booking-message"
        label="Nachricht (optional)"
        {...register("message")}
      />
      <div>
        <div className="flex items-start gap-3">
          <input
            id="booking-consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-800 text-gray-900 focus:ring-gray-900 focus:ring-offset-0"
            aria-invalid={errors.consent ? "true" : "false"}
            {...register("consent")}
          />
          <Label htmlFor="booking-consent" required className="mb-0">
            Ich stimme zu, dass meine Daten zur Terminvereinbarung verarbeitet werden. (
            <a href="/datenschutz" className="underline hover:no-underline">
              Datenschutz
            </a>
            )
          </Label>
        </div>
        {errors.consent && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.consent.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet …" : "Termin anfragen"}
      </Button>
    </form>
  );
}
