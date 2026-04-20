"use client";

import { useEffect, useState } from "react";
import { CONSENT_STORAGE_KEY, parseConsent } from "@/lib/consent";

interface ConsentAwareMapEmbedProps {
  title: string;
  mapsUrl: string;
  mapsLink: string;
}

function canLoadExternalMedia() {
  const consent = parseConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
  return Boolean(consent?.externalMedia || consent?.state === "accept-all");
}

export default function ConsentAwareMapEmbed({
  title,
  mapsUrl,
  mapsLink,
}: ConsentAwareMapEmbedProps) {
  const [allowExternalMedia, setAllowExternalMedia] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const refresh = () => setAllowExternalMedia(canLoadExternalMedia());
    refresh();
    setReady(true);
    window.addEventListener("storage", refresh);
    window.addEventListener("ptf-consent-updated", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("ptf-consent-updated", refresh);
    };
  }, []);

  if (!ready) {
    return <div className="w-full h-full bg-gray-900/10" aria-hidden="true" />;
  }

  if (!allowExternalMedia) {
    return (
      <div className="w-full h-full bg-gray-900/10 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-sm text-white/85">
          Externe Karteninhalte sind derzeit nicht aktiviert.
        </p>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center rounded-button border border-white/40 px-3 py-2 text-xs sm:text-sm text-white/90 hover:bg-white/10 transition-colors"
        >
          Standort auf Google Maps öffnen
        </a>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={mapsUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
    />
  );
}

