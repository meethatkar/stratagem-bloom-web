export interface ServiceShowcaseItem {
  /** Stable unique id — used as the React key and for a11y ids. */
  id: string;
  title: string;
  description: string;
  /** Optional numbering prefix, e.g. "01", "02" */
  number?: string;
  /** Image shown on the right while this item is open. */
  image: string;
  imageAlt?: string;
  /** List of capabilities for this service */
  capabilities?: string[];
  /** Call to action button details */
  cta?: { label: string; href: string };
}
