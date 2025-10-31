export interface WebItem {
  label: string;
  children: string[];
}

export const webServices: WebItem[] = [
  {
    label: "Discovery Call - First Consultation",
    children: [],
  },
  {
    label: "Design Phase",
    children: ["Custom Website (6-8 pages)", "Responsive Design"],
  },
  {
    label: "Developmemt",
    children: [
      "Functional integrations (contact form, newsletter signup, Google Maps, etc.)",
      "Website built on Framer, Squarespace, or Shopify",
      "Basic SEO",
      "Security and performance optmisation",
    ],
  },
  {
    label: "Launch and Handover",
    children: [],
  },
];
