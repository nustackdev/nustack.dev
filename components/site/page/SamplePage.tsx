import type { ReactNode } from 'react';
import {
  PageShell,
  Page,
  PageHero,
  PageBody,
} from './index';
import { SectionHead } from './SectionHead';

export interface SamplePageProps {
  /** Hero title. */
  title: ReactNode;
  /** Hero lede shown under the title. */
  lede?: ReactNode;
  /** Optional slot rendered below the SectionHead inside the hero. */
  heroExtras?: ReactNode;
  /** Chapters / body content. */
  children?: ReactNode;
}

/**
 * SamplePage — uniform shell for sub-pages (fabrics catalogue, per-fabric
 * pages, future about/use-cases). Landing keeps its bespoke hero; every other
 * page composes through this so shell + hero anatomy stay identical.
 */
export function SamplePage({ title, lede, heroExtras, children }: SamplePageProps) {
  return (
    <PageShell>
      <Page>
        <PageHero>
          <SectionHead title={title} lede={lede} />
          {heroExtras}
        </PageHero>
        <PageBody>{children}</PageBody>
      </Page>
    </PageShell>
  );
}
