// Fills the "{n}"-style slots of a text from templates.json, e.g. fillLabel("Page {n}", { n: 2 }).
export const fillLabel = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (slot, name: string) => (name in values ? String(values[name]) : slot));

// Phone numbers and emails become tel: / mailto: links.
export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;
export const mailHref = (email: string) => `mailto:${email}`;

// The lines and link of a company contact field ("address", "phone" or "email"); sections name the field in templates.json.
export const contactField = (company: { phone: string; email: string; addressLines: string[] }, field: string) => {
  if (field === "phone") return { lines: [company.phone], href: telHref(company.phone) };
  if (field === "email") return { lines: [company.email], href: mailHref(company.email) };
  return { lines: company.addressLines, href: "" };
};
