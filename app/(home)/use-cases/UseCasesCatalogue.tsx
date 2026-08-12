import Link from 'next/link';
import { Chapter, Section } from '@/components/page';
import { TryItBlock } from '@/components/chapters/TryItBlock';
import { CatalogueGrid, CatalogueCard, type Hue } from '@/components/chapters/CatalogueGrid';
import { Button } from '@/components/controls/Button';
import { CtaRow } from '@/components/layout/CtaRow';
import { DiscordMark } from '@/components/marks/DiscordMark';
import { GithubMark } from '@/components/marks/GithubMark';

interface UseCase {
  name: string;
  slug: string;
  hue: Hue;
  job: string;
  tagline: string;
  description: string;
  stack: string[];
  status?: 'shipping' | 'coming-soon';
}

const USE_CASES: UseCase[] = [
  {
    name: 'nulog',
    slug: 'nulog',
    hue: 'sage',
    job: 'I want logs and metrics without running a server.',
    tagline: 'Billions of entries in one process.',
    description:
      'Serverless observability on plain RocksDB. Live UI over the same store. Sample huge streams without scanning them.',
    stack: ['nu.kv', 'nu.ui', 'kh57'],
  },
];

export function UseCasesCatalogue() {
  return (
    <>
      <Chapter>
        <Section>
          <CatalogueGrid>
            {USE_CASES.map((u) => (
              <CatalogueCard
                key={u.slug}
                href={`/use-cases/${u.slug}`}
                name={u.name}
                hue={u.hue}
                job={u.job}
                tagline={u.tagline}
                description={u.description}
                stack={u.stack}
                badge={u.status === 'coming-soon' ? 'Coming soon' : undefined}
              />
            ))}
          </CatalogueGrid>
        </Section>
      </Chapter>

      <TryItBlock
        command='pip install "nustack-py[all]"'
        id="install"
        lede={
          <>
            Every use case spans at least two fabrics. Browse the{' '}
            <Link href="/fabrics">full fabric catalogue</Link>, open the{' '}
            <Link href="/docs">docs</Link>, or grab the stack on{' '}
            <a href="https://github.com/nustackdev" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </>
        }
        actions={
          <CtaRow>
            <Button href="https://discord.gg/tCa8YE7XVr">
              <DiscordMark size={14} />
              <span>Ask on Discord</span>
            </Button>
            <Button href="https://github.com/nustackdev/nu/issues">
              <GithubMark size={14} />
              <span>Report an issue</span>
            </Button>
          </CtaRow>
        }
      />
    </>
  );
}
