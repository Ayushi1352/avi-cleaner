import type { ContactDetails, ContactLinesSource } from "@/types/templates.types";

// Fills the "{n}"-style slots of a text from templates.json, e.g. fill("Page {n}", { n: 2 }).
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (slot, name: string) => (name in values ? String(values[name]) : slot));

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;
export const mailHref = (email: string) => `mailto:${email}`;

/** A contact item either carries its own `lines` or points at a contact field ("phone", "email", "address") with `source`. */
export function contactLines(item: ContactLinesSource, contact?: ContactDetails): string[] {
  if (!item.source) return item.lines ?? [];
  const value = contact?.[item.source as keyof ContactDetails];
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function contactHref(item: ContactLinesSource, contact?: ContactDetails) {
  const [line] = contactLines(item, contact);
  if (item.source === "phone" && line) return telHref(line);
  if (item.source === "email" && line) return mailHref(line);
  return "";
}

/** Map links for the business address ("{query}" in the URL templates). */
export function mapUrl(template: string, address: string[]) {
  return fill(template, { query: encodeURIComponent(address.join(" ")) });
}
