"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_STORAGE_KEY,
  type ConsentPreferences,
  parseConsent,
  toConsentJson,
} from "@/lib/consent";

function saveConsent(value: ConsentPreferences) {
  localStorage.setItem(CONSENT_STORAGE_KEY, toConsentJson(value));
  window.dispatchEvent(new Event("ptf-consent-updated"));
}

export default function CookieBanner() {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [externalMediaEnabled, setExternalMediaEnabled] = useState(false);

  useEffect(() => {
    const existing = parseConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
    setIsVisible(!existing);
    if (existing) {
      setAnalyticsEnabled(existing.analytics);
      setExternalMediaEnabled(existing.externalMedia);
    }
    setIsReady(true);
  }, []);

  const handleAcceptAll = () => {
    saveConsent({
      state: "accept-all",
      analytics: true,
      externalMedia: true,
      updatedAt: Date.now(),
    });
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    saveConsent({
      state: "necessary-only",
      analytics: false,
      externalMedia: false,
      updatedAt: Date.now(),
    });
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    saveConsent({
      state: "custom-settings",
      analytics: analyticsEnabled,
      externalMedia: externalMediaEnabled,
      updatedAt: Date.now(),
    });
    setIsVisible(false);
  };

  if (!isReady || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[70] pointer-events-none flex items-end sm:items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <section className="pointer-events-auto relative w-full max-w-2xl rounded-[16px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] border border-gray-200 p-5 sm:p-7">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Privatsphäre-Einstellungen
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          Wir setzen Cookies und ähnliche Technologien ein, damit diese Website für Sie
          sicher und zuverlässig funktioniert. Technisch notwendige Cookies nutzen wir
          ohne gesonderte Einwilligung. Optionale Cookies, Analyse und externe Inhalte
          (z.&nbsp;B. Karten) laden wir erst, wenn Sie zustimmen.
        </p>

        {showSettings ? (
          <div className="mt-5 space-y-3">
            <div className="flex items-start justify-between gap-4 rounded-[12px] border border-gray-200 p-3 sm:p-4">
              <div>
                <p className="font-medium text-gray-900">Technisch notwendig</p>
                <p className="text-sm text-gray-600 mt-1">
                  Immer aktiv, damit die Website korrekt funktioniert.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                Aktiv
              </span>
            </div>

            <label className="flex items-start justify-between gap-4 rounded-[12px] border border-gray-200 p-3 sm:p-4 cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Statistik / Analyse</p>
                <p className="text-sm text-gray-600 mt-1">
                  Hilft uns, Inhalte und Nutzerfreundlichkeit zu verbessern.
                </p>
              </div>
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-700"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              />
            </label>

            <label className="flex items-start justify-between gap-4 rounded-[12px] border border-gray-200 p-3 sm:p-4 cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Externe Medien / Drittinhalte</p>
                <p className="text-sm text-gray-600 mt-1">
                  Zum Beispiel eingebettete Karten und Inhalte externer Anbieter.
                </p>
              </div>
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-700"
                checked={externalMediaEnabled}
                onChange={(e) => setExternalMediaEnabled(e.target.checked)}
              />
            </label>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="inline-flex items-center justify-center rounded-button bg-gray-900 text-white px-4 py-3 text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={handleNecessaryOnly}
            className="inline-flex items-center justify-center rounded-button border border-gray-300 bg-white text-gray-800 px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            Weiter ohne Einwilligung
          </button>
        </div>

        <div className="mt-3">
          {!showSettings ? (
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="text-sm text-gray-700 underline underline-offset-4 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
            >
              Privatsphäre-Einstellungen individuell festlegen
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSaveCustom}
              className="text-sm text-gray-700 underline underline-offset-4 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
            >
              Auswahl speichern
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link
            href="/datenschutz"
            className="text-gray-600 hover:text-gray-900 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
          >
            Datenschutzerklärung
          </Link>
          <Link
            href="/impressum"
            className="text-gray-600 hover:text-gray-900 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
          >
            Impressum
          </Link>
        </div>
      </section>
    </div>
  );
}

