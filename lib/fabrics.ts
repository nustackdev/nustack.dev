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

import type { Hue } from '@/components/chapters/CatalogueGrid';
import { type Powered, fabricHref as _fh } from '@/lib/refs';

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
}

export const FABRICS: Fabric[] = [
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

export const fabricHref = (f: Pick<Fabric, 'slug'>) => _fh(f.slug);

export const findFabric = (slug: string) => FABRICS.find((f) => f.slug === slug);
