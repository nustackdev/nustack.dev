import { Chapter, Section } from '@/components/page';
import { CatalogueGrid, CatalogueCard, type Hue } from '@/components/chapters/CatalogueGrid';
import { Description } from '@/components/text';

interface Tool {
  name: string;
  slug: string;
  hue: Hue;
  tagline: string;
  description: string;
}

const TOOLS: Tool[] = [
  {
    name: 'virtuals',
    slug: 'virtuals',
    hue: 'sage',
    tagline: 'Virtual Python collections.',
    description:
      'Dict, list, set, tree. They look native, but sit over any KV store. Define the shape, plug in a backend, get every collection for free.',
  },
  {
    name: 'invisibles',
    slug: 'invisibles',
    hue: 'plum',
    tagline: 'Remote objects for Python.',
    description:
      'Same object, same call, different machine. Sync methods stay sync, async stays async. The proxy matches the remote API exactly.',
  },
  {
    name: 'rdbpy',
    slug: 'rdbpy',
    hue: 'steel',
    tagline: 'RocksDB bindings.',
    description:
      'RocksDB for Python with the C++ bundled in. One pip install, no separate RocksDB install. Transactions, iterators, compression included.',
  },
  {
    name: 'kh57',
    slug: 'kh57',
    hue: 'amber',
    tagline: 'Deterministic KV sampling.',
    description:
      'Uniform random samples from trillion-item sorted datasets. Same keys, same salt, same sample. Reads stay within 2x of n.',
  },
];

export function ToolsCatalogue() {
  return (
    <Chapter>
      <Section>
        <Description>
          Each ships on PyPI and works without Nu.
        </Description>
      </Section>

      <Section>
        <CatalogueGrid>
          {TOOLS.map((t) => (
            <CatalogueCard
              key={t.slug}
              href={`/tools/${t.slug}`}
              name={t.name}
              hue={t.hue}
              tagline={t.tagline}
              description={t.description}
            />
          ))}
        </CatalogueGrid>
      </Section>
    </Chapter>
  );
}
