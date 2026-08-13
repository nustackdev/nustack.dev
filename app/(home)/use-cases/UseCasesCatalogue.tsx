import Link from 'next/link';
import { Chapter, Section } from '@/components/page';
import { TryItBlock } from '@/components/chapters/TryItBlock';
import { CatalogueGrid, CatalogueCard } from '@/components/chapters/CatalogueGrid';
import { Button } from '@/components/controls/Button';
import { CtaRow } from '@/components/layout/CtaRow';
import { DiscordMark } from '@/components/marks/DiscordMark';
import { GithubMark } from '@/components/marks/GithubMark';
import { USE_CASES, useCaseHref } from '@/lib/use-cases';
import { findFabric } from '@/lib/fabrics';
import { findTool } from '@/lib/tools';
import type { Powered } from '@/lib/refs';

function chipLabel(ref: Powered): string {
  if (ref.kind === 'fabric') return findFabric(ref.slug)?.name ?? ref.slug;
  if (ref.kind === 'tool') return findTool(ref.slug)?.name ?? ref.slug;
  return ref.name;
}

export function UseCasesCatalogue() {
  return (
    <>
      <Chapter>
        <Section>
          <CatalogueGrid>
            {USE_CASES.map((u) => (
              <CatalogueCard
                key={u.slug}
                href={useCaseHref(u)}
                name={u.name}
                hue={u.hue}
                job={u.job}
                tagline={u.tagline}
                description={u.description}
                stack={u.poweredBy.map(chipLabel)}
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
