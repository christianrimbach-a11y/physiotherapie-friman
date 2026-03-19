"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

const contactSchema = z.object({
  name: z.string().min(1, "Bitte geben Sie Ihren Namen an."),
  email: z.string().min(1, "Bitte geben Sie Ihre E-Mail an.").email("Bitte gültige E-Mail eingeben."),
  phone: z.string().optional(),
  message: z.string().min(1, "Bitte geben Sie eine Nachricht ein."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Verarbeitung zu." }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-200 rounded-sm p-8 text-center" role="status">
        <p className="text-gray-800 font-medium">
          Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Input
        id="contact-name"
        label="Name"
        required
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="contact-email"
        label="E-Mail"
        type="email"
        required
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="contact-phone"
        label="Telefon (optional)"
        type="tel"
        {...register("phone")}
      />
      <Textarea
        id="contact-message"
        label="Nachricht"
        required
        error={errors.message?.message}
        {...register("message")}
      />
      <div>
        <div className="flex items-start gap-3">
          <input
            id="contact-consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-800 text-gray-900 focus:ring-gray-900 focus:ring-offset-0"
            aria-invalid={errors.consent ? "true" : "false"}
            {...register("consent")}
          />
          <Label htmlFor="contact-consent" required className="mb-0">
            Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden. (
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
        {isSubmitting ? "Wird gesendet …" : "Nachricht senden"}
      </Button>
    </form>
  );
}
