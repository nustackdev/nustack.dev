/**
 * Nav data — single source of truth for the header nav and its Stack menu.
 * Consumed by FloatingNav (desktop pill + mobile sheet) and ProductsMenu.
 */

export type ProductItem = { name: string; href: string; desc: string };
export type ProductGroup = {
  header: string;
  tagline: string;
  /** Optional href — when set, the group header itself becomes a link to
   * the group's catalogue page (e.g. Fabrics → /fabrics). */
  href?: string;
  items: ProductItem[];
  /** Optional trailing text link (e.g. "Explore →") pointing to a catalogue.
   * Redundant when `href` is set; kept for groups whose header is not itself
   * a page. */
  explore?: { label: string; href: string };
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    header: 'Fabrics',
    tagline: 'The interaction surfaces of nu.',
    href: '/fabrics',
    items: [
      { name: 'nu.mem', href: '/fabrics/mem', desc: 'In-memory state.' },
      { name: 'nu.kv', href: '/fabrics/kv', desc: 'Persistent state.' },
      { name: 'nu.ui', href: '/fabrics/ui', desc: 'Reactive web UI.' },
    ],
    explore: { label: 'Explore all', href: '/fabrics' },
  },
  {
    header: 'Tools',
    tagline: 'The libraries the fabrics stand on.',
    href: '/tools',
    items: [
      { name: 'virtuals', href: '/tools/virtuals', desc: 'Virtual Python collections.' },
      { name: 'invisibles', href: '/tools/invisibles', desc: 'Remote objects for Python.' },
      { name: 'rdbpy', href: '/tools/rdbpy', desc: 'RocksDB bindings.' },
      { name: 'kh57', href: '/tools/kh57', desc: 'Deterministic KV sampling.' },
    ],
  },
];

/** Use-cases group — footer-only for now. Not surfaced in the Stack dropdown. */
export const USE_CASES_GROUP: ProductGroup = {
  header: 'Use cases',
  tagline: 'Jobs the stack fits.',
  href: '/use-cases',
  items: [
    { name: 'AI agents', href: '/use-cases/ai-agents', desc: 'Long-running agents with memory.' },
    { name: 'Local-first apps', href: '/use-cases/local-first', desc: 'Apps that live on your machine.' },
    { name: 'Observability', href: '/use-cases/observability', desc: 'Logs and metrics without a server.' },
    { name: 'Data-intensive apps', href: '/use-cases/data-intensive', desc: 'Terabytes in one Python program.' },
    { name: 'Internal tools', href: '/use-cases/internal-tools', desc: 'Scalable dashboards that fit in a single file.' },
  ],
  explore: { label: 'Explore all', href: '/use-cases' },
};

export type WordLink = { label: string; href: string };

export const WORD_LINKS: WordLink[] = [
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Spec', href: '/spec' },
  { label: 'About', href: '/about' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/nustackdev',
  x: 'https://x.com/nustackdev',
  discord: 'https://discord.gg/nustackdev',
} as const;
