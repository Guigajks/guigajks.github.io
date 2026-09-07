import type { Locale } from "../data/cv";

export const ui = {
  en: {
    brand: "LGC",
    employment: "Employment History",
    education: "Education",
    certifications: "Certifications",
    viewCertificate: "View certificate",
    verifyCertificate: "Verify credential",
    credentialId: "Certificate number",
    skillsInterests: "Skills & Interests",
    skills: "Skills",
    languages: "Languages",
    hobbies: "Hobbies",
    contact: "Contact",
    details: "Details",
    phone: "Phone",
    email: "Email",
    birthDate: "Date of birth",
    links: "Links",
    downloadCv: "Download CV",
    emailMe: "Email me",
    linkedinProfile: "LinkedIn profile",
    langLabel: "Language",
  },
  pt: {
    brand: "LGC",
    employment: "Experiência Profissional",
    education: "Formação",
    certifications: "Certificações",
    viewCertificate: "Ver certificado",
    verifyCertificate: "Verificar credencial",
    credentialId: "Número do certificado",
    skillsInterests: "Competências e interesses",
    skills: "Competências",
    languages: "Idiomas",
    hobbies: "Hobbies",
    contact: "Contato",
    details: "Detalhes",
    phone: "Telefone",
    email: "E-mail",
    birthDate: "Data de nascimento",
    links: "Links",
    downloadCv: "Baixar CV",
    emailMe: "Enviar e-mail",
    linkedinProfile: "Perfil no LinkedIn",
    langLabel: "Idioma",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function labels(locale: Locale) {
  return ui[locale];
}
