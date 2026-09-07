import { parse } from "yaml";
import { z } from "zod";
import yamlText from "./cv.yaml?raw";

const Localized = z.object({
  en: z.string(),
  pt: z.string(),
});

const CvSchema = z.object({
  name: z.string(),
  role: Localized,
  summary: Localized,
  contact: z.object({
    address: z.string(),
    city: z.string(),
    country: Localized,
    phone: z.string(),
    phoneHref: z.string(),
    email: z.string().email(),
    linkedin: z.string().url(),
    birthDate: z.string(),
  }),
  jobs: z.array(
    z.object({
      company: z.string(),
      location: z.string(),
      role: Localized,
      period: Localized,
      bullets: z.array(Localized),
      stack: z.array(z.string()),
    })
  ),
  education: z.object({
    degree: Localized,
    period: Localized,
    description: Localized,
  }),
  certifications: z.array(
    z.object({
      name: Localized,
      credential: Localized,
      issuer: Localized,
      date: Localized,
      description: Localized,
      credentialId: z.string(),
      url: z.string().url(),
      file: z.string(),
      image: z.string(),
    })
  ),
  skills: z.object({
    soft: z.array(Localized),
    technical: z.array(z.string()),
  }),
  languages: z.array(Localized),
  hobbies: z.array(Localized),
  pdf: Localized,
});

export type Locale = "en" | "pt";
export type Cv = z.infer<typeof CvSchema>;

const raw = parse(yamlText);
export const cv: Cv = CvSchema.parse(raw);

export function t(value: { en: string; pt: string }, locale: Locale): string {
  return value[locale];
}

export function pdfFilename(locale: Locale): string {
  return cv.pdf[locale];
}
