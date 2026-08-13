/**
 * Fabrics — canonical list. Consumed by:
 *   - components/nav/nav.data.ts   (Stack dropdown + footer; filters `showcase`)
 *   - app/(home)/fabrics/FabricsCatalogue.tsx (full catalogue)
 *   - landing intro (fabric list)
 *
 * `navDesc` is the compressed microcopy for dropdown/footer/intro.
 * `showcase` marks the curated set that surfaces in nav/footer/landing.
 * `poweredBy` lists what the fabric stands on — nu tools + external tech.
 */

import type { ComponentType } from 'react';
import type { Hue } from '@/components/chapters/CatalogueGrid';
import {
  type Powered,
  fabricHref as _fh,
  fabricDocsHref as _fd,
  fabricSrcHref as _fs,
} from '@/lib/refs';
import {
  MemGlyph,
  KvGlyph,
  UiGlyph,
  ProxyGlyph,
  RayGlyph,
} from '@/components/marks/FabricGlyphs';

/** Fabric record — derived link fields (`href`, `docs`, `src`) are attached
 * at export from the slug, so consumers only need to import FABRICS/FABRIC
 * and reach `f.docs`, `f.src`, `f.href` directly. */
export interface Fabric {
  name: string;
  slug: string;
  hue: Hue;
  tagline: string;
  description: string;
  navDesc: string;
  /** Surfaces in curated spots: nav dropdown, footer, landing intro. */
  showcase?: boolean;
  poweredBy?: Powered[];
  /** Optional glyph for landing/detail pages. */
  glyph?: ComponentType;
  /** Catalogue link — derived. */
  href: string;
  /** Reference-doc link — derived. */
  docs: string;
  /** Source-code link on GitHub — derived. */
  src: string;
}

/** Author-time shape: same as Fabric minus the derived link fields. */
type FabricSpec = Omit<Fabric, 'href' | 'docs' | 'src'>;

const SPECS: FabricSpec[] = [
  {
    name: 'nu.kv',
    slug: 'kv',
    hue: 'sage',
    tagline: 'Persistent state fabric.',
    description:
      'Refs over a KV backend (RocksDB, LMDB). Transactions, snapshots, and change notifications, built in.',
    navDesc: 'Persistent state.',
    showcase: true,
    poweredBy: [
      { kind: 'tool', slug: 'virtuals' },
      { kind: 'tool', slug: 'rdbpy' },
      { kind: 'external', name: 'RocksDB', url: 'https://rocksdb.org' },
      { kind: 'external', name: 'LMDB', url: 'https://www.symas.com/lmdb' },
    ],
    glyph: KvGlyph,
  },
  {
    name: 'nu.ui',
    slug: 'ui',
    hue: 'teal',
    tagline: 'Web UI fabric.',
    description:
      'Refs are widgets: text, buttons, tables. The fabric renders them in the browser and live-updates as your state changes.',
    navDesc: 'Reactive web UI.',
    showcase: true,
    poweredBy: [],
    glyph: UiGlyph,
  },
  {
    name: 'nu.cluster',
    slug: 'cluster',
    hue: 'amber',
    tagline: 'Cluster compute fabric.',
    description:
      'Teleport a Nu tree to any worker in your cluster; it runs there and returns the result. Backed by Ray under the hood.',
    navDesc: 'Cluster compute.',
    showcase: true,
    poweredBy: [{ kind: 'external', name: 'Ray', url: 'https://www.ray.io' }],
    glyph: RayGlyph,
  },
  {
    name: 'nu.mem',
    slug: 'mem',
    hue: 'steel',
    tagline: 'In-memory state fabric.',
    description:
      'In-memory state on plain dicts. Perfect for cache, hot state, and in-process coordination.',
    navDesc: 'In-memory state.',
    showcase: true,
    poweredBy: [],
    glyph: MemGlyph,
  },
  {
    name: 'nu.proxy',
    slug: 'proxy',
    hue: 'plum',
    tagline: 'Network fabric.',
    description:
      'Puts other fabrics on the network. Bind a fabric in one process, use it from another; same Refs, over TCP or Unix socket.',
    navDesc: 'Fabrics over the network.',
    poweredBy: [{ kind: 'tool', slug: 'invisibles' }],
    glyph: ProxyGlyph,
  },
  {
    name: 'nu.http',
    slug: 'http',
    hue: 'amber',
    tagline: 'HTTP fabric.',
    description:
      'Expose Nu Refs as HTTP endpoints, or build fabrics on top of any HTTP service. Nu meets the web.',
    navDesc: 'Nu meets the web.',
    poweredBy: [
      { kind: 'external', name: 'httpx', url: 'https://www.python-httpx.org' },
    ],
  },
  {
    name: 'nu.service',
    slug: 'service',
    hue: 'steel',
    tagline: 'In-process service fabric.',
    description:
      'Wrap any Python object as a Nu Service. Its methods become Refs — queries, actions, streams, commands — you compose into the tree.',
    navDesc: 'Python objects as Refs.',
    poweredBy: [],
  },
  {
    name: 'nu.mp',
    slug: 'mp',
    hue: 'plum',
    tagline: 'Multiprocessing fabric.',
    description:
      'Run Nu trees in parallel across local processes. Backed by Python multiprocessing — no cluster required.',
    navDesc: 'Local parallel execution.',
    poweredBy: [
      {
        kind: 'external',
        name: 'Python multiprocessing',
        url: 'https://docs.python.org/3/library/multiprocessing.html',
      },
    ],
  },
];

export const FABRICS: Fabric[] = SPECS.map((f) => ({
  ...f,
  href: _fh(f.slug),
  docs: _fd(f.slug),
  src: _fs(f.slug),
}));

/** Slug-indexed map — use `FABRIC.kv.docs`, `FABRIC.mem.src`, etc. */
export const FABRIC: Record<string, Fabric> = Object.fromEntries(
  FABRICS.map((f) => [f.slug, f]),
);

export const fabricHref = (f: Pick<Fabric, 'slug'>) => _fh(f.slug);

export const findFabric = (slug: string) => FABRIC[slug];
