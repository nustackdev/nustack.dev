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
    name: 'AI agents',
    slug: 'ai-agents',
    hue: 'plum',
    job: 'I want long-running agents with memory that persists.',
    tagline: 'Agents that survive restarts.',
    description:
      'Context, tools, and world state that stick across sessions. No vector-db-of-the-week, no scaffolding rewrites.',
    stack: ['nu.kv', 'nu.mem', 'nu.ray'],
  },
  {
    name: 'Local-first apps',
    slug: 'local-first',
    hue: 'teal',
    job: 'I want software that runs on my machine, forever.',
    tagline: 'Own your data and your loop.',
    description:
      'Apps that keep their data on your disk, sync when they can, work when they can\'t. No account, no server, no monthly bill.',
    stack: ['nu.kv', 'nu.ui'],
  },
  {
    name: 'Observability',
    slug: 'observability',
    hue: 'sage',
    job: 'I want logs and metrics without running a server.',
    tagline: 'Track anything, chart anything. At scale.',
    description:
      'Serverless observability on plain RocksDB. Live UI over the same store. Sample huge streams without scanning them. Shipped as nulog.',
    stack: ['nu.kv', 'nu.ui', 'kh57'],
  },
  {
    name: 'Data-intensive apps',
    slug: 'data-intensive',
    hue: 'amber',
    job: 'I want terabytes of data in one Python program.',
    tagline: 'Big stores, live views.',
    description:
      'Own the data, own the queries, own the loop. Scale by adding processes, not services.',
    stack: ['nu.kv', 'nu.ray', 'nu.proxy'],
  },
  {
    name: 'Internal tools',
    slug: 'internal-tools',
    hue: 'steel',
    job: 'I want dashboards and admin panels my team actually uses.',
    tagline: 'Scalable dashboards that fit in a single file.',
    description:
      'Live web UIs for ops, support, and finance, built by whoever owns the process. No frontend team, no deploy pipeline.',
    stack: ['nu.ui', 'nu.kv', 'nu.http'],
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
