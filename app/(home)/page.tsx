import { BookOpen } from 'lucide-react';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { VizFrame } from '@/components/media/VizFrame';
import { MonoKicker } from '@/components/meta/MonoKicker';
import { Tagline, Description } from '@/components/text';
import { CommandLine } from '@/components/media/CommandLine';
import { LinkCard } from '@/components/controls/LinkCard';
import { Stack } from '@/components/layout/Stack';
import { CtaRow } from '@/components/layout/CtaRow';
import { Button } from '@/components/controls/Button';
import { GithubMark } from '@/components/marks/GithubMark';
import {
  Page,
  Body,
  Chapter,
  Section,
  SectionHead,
} from '@/components/page';
import { LikeThisBlock } from '@/components/chapters/LikeThisBlock';
import { HERO_BLOBS } from '@/components/bg/GradientBlobs';
import { Hero } from './_blocks/Hero';
import { Capabilities } from './_blocks/Capabilities';
import { IntroBrief } from './_blocks/IntroBrief';
import { FABRICS } from '@/lib/fabrics';
import { TOOLS } from '@/lib/tools';
import s from './page.module.css';

const SHOWCASE_FABRICS = FABRICS.filter((f) => f.showcase);

export default function Home() {
  return (
    <Page className={s.landingRoot} gradientBlobs={HERO_BLOBS}>
      <Hero />

      <Body>
        {/* 2. Capabilities — "Build with Nu" — 4 capability cards */}
        <Capabilities />

        {/* 3. See Nu live — install, run a demo, take it further */}
        <Chapter>
        <SectionHead
          title="See Nu live."
          lede={<>Install, run a demo, take it further.</>}
        />

        {/* Step 1 — install */}
        <Section>
          <Stack gap="normal">
            <MonoKicker as="p" size="xs" tracking="wider" className={s.stepLabel}>
              <strong>01</strong> Install
            </MonoKicker>
            <MonoKicker as="p" size="xs" tracking="wide">
              Python 3.10+ &middot; everything ships in the wheel
            </MonoKicker>
            <CommandLine command='pip install "nustack-py[all]"' />
          </Stack>
        </Section>

        {/* Step 2 — pick a demo */}
        <Section>
          <Stack gap="normal">
            <MonoKicker as="p" size="xs" tracking="wider" className={s.stepLabel}>
              <strong>02</strong> Run a demo
            </MonoKicker>
            <div className={s.demoGrid}>
              <div className={s.demoCard} data-hue="teal">
                <VizFrame hue="teal">
                  <img className={s.demoCover} src="/demos/counter.png" alt="counter demo" />
                </VizFrame>
                <SilverWovenName as="h3" hue="teal" className={s.demoName}>counter</SilverWovenName>
                <Description>A live counter, persistent across restarts.</Description>
                <CommandLine command="nu demo counter" />
              </div>
              <div className={s.demoCard} data-hue="sage">
                <VizFrame hue="sage">
                  <img className={s.demoCover} src="/demos/sampled.png" alt="sampled demo" />
                </VizFrame>
                <SilverWovenName as="h3" hue="sage" className={s.demoName}>sampled</SilverWovenName>
                <Description>An infinite series, live-sampled into a fixed-size chart.</Description>
                <CommandLine command="nu demo sampled" />
              </div>
              <div className={s.demoCard} data-hue="plum">
                <VizFrame hue="plum">
                  <img className={s.demoCover} src="/demos/movies.png" alt="movies demo" />
                </VizFrame>
                <SilverWovenName as="h3" hue="plum" className={s.demoName}>movies</SilverWovenName>
                <Description>A movie tracker: form, filterable table, detail pages.</Description>
                <CommandLine command="nu demo movies" />
              </div>
            </div>
          </Stack>
        </Section>

        {/* Step 3 — learn */}
        <Section>
          <Stack gap="normal">
            <MonoKicker as="p" size="xs" tracking="wider" className={s.stepLabel}>
              <strong>03</strong> Explore Nu
            </MonoKicker>
            <div className={s.learnGrid}>
              <LinkCard href="/docs" icon={<BookOpen size={14} />} title="Read the docs">
                Tutorials, how-tos, and the fabric reference.
              </LinkCard>
              <LinkCard
                href="https://github.com/nustackdev/nu/tree/main/examples"
                icon={<GithubMark size={14} />}
                title="Browse examples"
              >
                Full source for every demo, plus more programs to steal from.
              </LinkCard>
            </div>
          </Stack>
        </Section>
        </Chapter>

        {/* 4. How Nu works — the crack, the primitive, the vocab, the payoff */}
        <IntroBrief />

        {/* 5. Fabrics */}
        <Chapter>
        <SectionHead
          title="Fabrics."
          lede={
            <>
              Each fabric gives your Nu app a new capability. These are the
              ones Nu ships with today.
            </>
          }
        />

        {SHOWCASE_FABRICS.map((f) => {
          const Glyph = f.glyph;
          return (
            <Section key={f.slug} hue={f.hue}>
              <div className={s.itemRow}>
                <div className={s.itemBody}>
                  <SilverWovenName as="h3" hue={f.hue}>{f.name}</SilverWovenName>
                  <Tagline>{f.tagline}</Tagline>
                  <Description>{f.description}</Description>
                  <CtaRow>
                    <Button href={f.href} variant="outline">
                      <span>See it</span>
                    </Button>
                    <Button href={f.docs} variant="outline">
                      <BookOpen size={14} aria-hidden />
                      <span>Read the docs</span>
                    </Button>
                  </CtaRow>
                </div>
                {Glyph ? (
                  <div className={s.itemViz}>
                    <VizFrame><Glyph /></VizFrame>
                  </div>
                ) : null}
              </div>
            </Section>
          );
        })}

        <Section>
          <CtaRow>
            <Button href="/fabrics" variant="outline">
              <span>Explore all fabrics</span>
            </Button>
          </CtaRow>
        </Section>
        </Chapter>

        {/* 6. Under the hood — the standalone Python libs Nu is built on. */}
        <Chapter>
        <SectionHead
          title="Under the hood."
          lede={<>Standalone Python libraries Nu is built on. Each is useful on its own.</>}
        />
        <Section>
          <div className={s.underGrid}>
            {TOOLS.map((t) => (
              <div key={t.slug} className={s.underItem}>
                <h3 className={s.underName}>{t.name}</h3>
                <p className={s.underTagline}>{t.tagline}</p>
                <a
                  href={t.github}
                  target="_blank"
                  rel="noreferrer"
                  className={s.underRepo}
                >
                  <GithubMark size={12} />
                  <span>{t.repo}</span>
                </a>
              </div>
            ))}
          </div>
        </Section>
        </Chapter>

        {/* 7. Like what you see — closing CTA to turn readers into followers. */}
        <LikeThisBlock />

      </Body>
    </Page>
  );
}
