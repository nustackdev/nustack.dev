import Link from 'next/link';
import { Chapter, Section } from '@/components/page';
import { Description } from '@/components/text';
import {
  CatalogueGrid,
  CatalogueCard,
  type Hue,
} from '@/components/chapters/CatalogueGrid';

interface App {
  name: string;
  slug: string;
  hue: Hue;
  href: string;
  external?: boolean;
  tagline: string;
  description: string;
}

const APPS: App[] = [
  {
    name: 'nulog',
    slug: 'nulog',
    hue: 'sage',
    href: 'https://github.com/nustackdev/nulog',
    external: true,
    tagline: 'Serverless logs and metrics.',
    description:
      'Append-only logs and metric series in one pip install. Runs inside your process, writes to RocksDB, ships with a live viewer.',
  },
];

export function AppsCatalogue() {
  return (
    <Chapter>
      <Section>
        <Description>
          Proof that the{' '}
          <Link href="/fabrics">fabrics</Link>{' '}
          hold up under real work. Each one ships on PyPI and runs on its own.
        </Description>
      </Section>

      <Section>
        <CatalogueGrid>
          {APPS.map((a) => (
            <CatalogueCard
              key={a.slug}
              href={a.href}
              name={a.name}
              hue={a.hue}
              tagline={a.tagline}
              description={a.description}
              external={a.external}
            />
          ))}
        </CatalogueGrid>
      </Section>
    </Chapter>
  );
}
