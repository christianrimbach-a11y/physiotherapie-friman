export type ConsentState = "accept-all" | "necessary-only" | "custom-settings";

export interface ConsentPreferences {
  state: ConsentState;
  analytics: boolean;
  externalMedia: boolean;
  updatedAt: number;
}

export const CONSENT_STORAGE_KEY = "ptf_consent_v1";

export function parseConsent(raw: string | null): ConsentPreferences | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;
    if (
      (parsed.state === "accept-all" ||
        parsed.state === "necessary-only" ||
        parsed.state === "custom-settings") &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.externalMedia === "boolean" &&
      typeof parsed.updatedAt === "number"
    ) {
      return parsed as ConsentPreferences;
    }
    return null;
  } catch {
    return null;
  }
}

export function toConsentJson(value: ConsentPreferences): string {
  return JSON.stringify(value);
}

