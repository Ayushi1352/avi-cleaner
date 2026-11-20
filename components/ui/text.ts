import type { CompanyData, ContactLinesSource } from "@/types/templates.types";

// Fills the "{n}"-style slots of a text from templates.json, e.g. fill("Page {n}", { n: 2 }).
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (slot, name: string) => (name in values ? String(values[name]) : slot));

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;
export const mailHref = (email: string) => `mailto:${email}`;

/** A contact item either carries its own `lines` or points at a company field ("phone", "email", "address") with `source`. */
export function contactLines(item: ContactLinesSource, company?: CompanyData): string[] {
  if (!item.source) return item.lines ?? [];
  const value = company?.[item.source as "phone" | "email" | "address"];
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function contactHref(item: ContactLinesSource, company?: CompanyData) {
  const [line] = contactLines(item, company);
  if (item.source === "phone" && line) return telHref(line);
  if (item.source === "email" && line) return mailHref(line);
  return "";
}

/** Map links for the company address ("{query}" in the URL templates). */
export function mapUrl(template: string, address: string[]) {
  return fill(template, { query: encodeURIComponent(address.join(" ")) });
}
