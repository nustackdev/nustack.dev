/**
 * Nav data — single source of truth for the header nav and its Products menu.
 * Consumed by FloatingNav (desktop pill + mobile sheet) and ProductsMenu.
 */

export type ProductItem = { name: string; href: string; desc: string };
export type ProductGroup = {
  header: string;
  tagline: string;
  items: ProductItem[];
  /** Optional trailing text link (e.g. "Explore →") pointing to a catalogue. */
  explore?: { label: string; href: string };
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    header: 'Foundations',
    tagline: 'The primitive and its spec.',
    items: [
      { name: 'nu', href: '/products/nu', desc: 'The interaction primitive.' },
      { name: 'interaction-model', href: '/products/interaction-model', desc: 'Language-agnostic spec.' },
    ],
  },
  {
    header: 'Fabrics',
    tagline: 'The interaction surfaces of nu.',
    items: [
      { name: 'nu.mem', href: '/fabrics/mem', desc: 'In-memory state.' },
      { name: 'nu.kv', href: '/fabrics/kv', desc: 'Persistent state.' },
      { name: 'nu.ui', href: '/fabrics/ui', desc: 'Reactive web UI.' },
    ],
    explore: { label: 'Explore all', href: '/fabrics' },
  },
  {
    header: 'Infra',
    tagline: 'The libraries the fabrics stand on.',
    items: [
      { name: 'virtuals', href: '/products/infra/virtuals', desc: 'Virtual Python collections.' },
      { name: 'invisibles', href: '/products/infra/invisibles', desc: 'Remote objects for Python.' },
      { name: 'rdbpy', href: '/products/infra/rdbpy', desc: 'RocksDB bindings.' },
      { name: 'kh57', href: '/products/infra/kh57', desc: 'Deterministic KV sampling.' },
    ],
  },
  {
    header: 'Apps',
    tagline: 'Tools built on Nu.',
    items: [
      { name: 'nulog', href: '/products/apps/nulog', desc: 'Serverless logs + metrics.' },
    ],
  },
];

export type WordLink = { label: string; href: string };

export const WORD_LINKS: WordLink[] = [
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/nustackdev',
  x: 'https://x.com/nustackdev',
  discord: 'https://discord.gg/nustackdev',
} as const;
