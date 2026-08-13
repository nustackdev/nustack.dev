/**
 * Tools — canonical list. Consumed by:
 *   - components/nav/nav.data.ts   (Stack dropdown + footer)
 *   - app/(home)/tools/ToolsCatalogue.tsx (full catalogue)
 *   - individual tool pages (install command, repo link, py version)
 *
 * Each tool ships as its own PyPI package with its own GitHub repo.
 */

import type { Hue } from '@/components/chapters/CatalogueGrid';
import { type Powered, toolHref as _th } from '@/lib/refs';

export interface Tool {
  name: string;
  slug: string;
  hue: Hue;
  tagline: string;
  description: string;
  navDesc: string;
  poweredBy?: Powered[];
  /** GitHub `owner/name` — display slug, also used to build the URL. */
  repo: string;
  /** Full GitHub URL (derived from `repo` at build time). */
  github: string;
  /** PyPI package name — `pip install ${pypi}`. */
  pypi: string;
  /** Minimum Python version, e.g. "3.10+". */
  pyVersion: string;
}

const gh = (repo: string) => ({ repo, github: `https://github.com/${repo}` });

export const TOOLS: Tool[] = [
  {
    name: 'virtuals',
    slug: 'virtuals',
    hue: 'sage',
    tagline: 'Virtual Python collections over any KV storage.',
    description:
      'Native-shaped Python collections that are thin views over an ordered KV store. Same API as a built-in dict or list, but the bytes stay on disk and stream in on access.',
    navDesc: 'Virtual Python collections.',
    ...gh('nustackdev/virtuals'),
    pypi: 'virtuals-py',
    pyVersion: '3.10+',
  },
  {
    name: 'invisibles',
    slug: 'invisibles',
    hue: 'plum',
    tagline: 'Transparent remote objects for Python.',
    description:
      "Move an object to another process or node; the calling code doesn't change. Sync stays sync, async stays async.",
    navDesc: 'Remote objects for Python.',
    ...gh('nustackdev/invisibles'),
    pypi: 'invisibles-py',
    pyVersion: '3.10+',
  },
  {
    name: 'rdbpy',
    slug: 'rdbpy',
    hue: 'steel',
    tagline: 'RocksDB for Python, with transactions.',
    description:
      'RocksDB and its compression libs bundled into the wheel for Linux and macOS. No system install. Open a DB and put/get/iterate.',
    navDesc: 'RocksDB bindings.',
    poweredBy: [{ kind: 'external', name: 'RocksDB', url: 'https://rocksdb.org' }],
    ...gh('nustackdev/rdbpy'),
    pypi: 'rocksdbpy',
    pyVersion: '3.9+',
  },
  {
    name: 'kh57',
    slug: 'kh57',
    hue: 'amber',
    tagline: 'Deterministic range reservoir sampling.',
    description:
      'Draw n uniform samples from a sub-range of a massive (billions) sorted KV dataset without scanning it. Any sorted KV store works as a backend.',
    navDesc: 'Deterministic KV sampling.',
    ...gh('nustackdev/kh57'),
    pypi: 'kh57',
    pyVersion: '3.10+',
  },
];

export const toolHref = (t: Pick<Tool, 'slug'>) => _th(t.slug);

export const findTool = (slug: string) => TOOLS.find((t) => t.slug === slug);

export const pipInstall = (t: Pick<Tool, 'pypi'>) => `pip install ${t.pypi}`;
