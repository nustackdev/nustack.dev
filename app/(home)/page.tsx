import { BookOpen, Star } from 'lucide-react';
import { SilverWovenName } from '@/components/site/SilverWovenName';
import { VizFrame } from '@/components/site/VizFrame';
import { MonoKicker } from '@/components/site/MonoKicker';
import { NumberedList } from '@/components/site/NumberedList';
import { Tagline, Description, Label } from '@/components/site/text';
import { CommandLine } from '@/components/site/CommandLine';
import { LinkCard } from '@/components/site/LinkCard';
import { Stack } from '@/components/site/layout/Stack';
import { CtaRow } from '@/components/site/layout/CtaRow';
import { SiteButton } from '@/components/site/SiteButton';
import {
  MemGlyph,
  KvGlyph,
  UiGlyph,
} from '@/components/site/marks/FabricGlyphs';
import { GithubMark } from '@/components/site/marks/GithubMark';
import { DiscordMark } from '@/components/site/marks/DiscordMark';
import { XMark } from '@/components/site/marks/XMark';
import {
  Page,
  Body,
  Chapter,
  Section,
  SectionHead,
} from '@/components/site/page';
import { HERO_BLOBS } from '@/components/site/bg/GradientBlobs';
import { Hero } from './_blocks/Hero';
import { IntroStory } from './_blocks/IntroStory';
import s from './page.module.css';

export default function Home() {
  return (
    <Page className={s.landingRoot} gradientBlobs={HERO_BLOBS}>
      <Hero />

      <Body>
        {/* 2. Intro story — what / how / why, plus theory + impl closer */}
        <IntroStory />

        {/* 3. Quickstart — three steps: install, run a demo, learn */}
        <Chapter>
        <SectionHead
          title="Quickstart."
          lede={<>Three steps: install, run a demo, explore Nu.</>}
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

        {/* 5. Fabrics */}
        <Chapter>
        <SectionHead
          title="Fabrics."
          lede={
            <>
              Fabrics are the tissue between Refs and the real world: memory,
              kv stores, UI, network, cluster. These are the ones Nu ships
              with today.
            </>
          }
        />

        <Section hue="steel">
          <div className={s.itemRow}>
            <div className={s.itemBody}>
              <SilverWovenName as="h3" hue="steel">nu.mem</SilverWovenName>
              <Tagline>In-memory state fabric.</Tagline>
              <Description>
                In-memory state on plain dicts. Perfect for cache, hot state,
                and in-process coordination.
              </Description>
              <CtaRow>
                <SiteButton href="/docs/reference/fabrics/mem" variant="hueTinted">
                  <BookOpen size={14} aria-hidden />
                  <span>Read the docs</span>
                </SiteButton>
              </CtaRow>
            </div>
            <div className={s.itemViz}>
              <VizFrame><MemGlyph /></VizFrame>
            </div>
          </div>
        </Section>

        <Section hue="sage">
          <div className={s.itemRow}>
            <div className={s.itemBody}>
              <SilverWovenName as="h3" hue="sage">nu.kv</SilverWovenName>
              <Tagline>Persistent state fabric.</Tagline>
              <Description>
                Refs over a KV backend (RocksDB, LMDB). Transactions,
                snapshots, and change notifications, built in.
              </Description>
              <Label>Backends: rocksdb, lmdb</Label>
              <CtaRow>
                <SiteButton href="/docs/reference/fabrics/kv" variant="hueTinted">
                  <BookOpen size={14} aria-hidden />
                  <span>Read the docs</span>
                </SiteButton>
              </CtaRow>
            </div>
            <div className={s.itemViz}>
              <VizFrame><KvGlyph /></VizFrame>
            </div>
          </div>
        </Section>

        <Section hue="teal">
          <div className={s.itemRow}>
            <div className={s.itemBody}>
              <SilverWovenName as="h3" hue="teal">nu.ui</SilverWovenName>
              <Tagline>Web UI fabric.</Tagline>
              <Description>
                Same fabric shape as the others, but the Refs are widgets:
                text, buttons, tables. The fabric renders them in the browser
                and live-updates them as your state changes.
              </Description>
              <CtaRow>
                <SiteButton href="/docs/reference/fabrics/ui" variant="hueTinted">
                  <BookOpen size={14} aria-hidden />
                  <span>Read the docs</span>
                </SiteButton>
              </CtaRow>
            </div>
            <div className={s.itemViz}>
              <VizFrame><UiGlyph /></VizFrame>
            </div>
          </div>
        </Section>

        <Section>
          <CtaRow>
            <SiteButton href="/fabrics" variant="primaryPurple">
              <span>Explore all fabrics</span>
            </SiteButton>
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
            {[
              {
                name: 'virtuals',
                tagline: 'Virtual Python collections over any KV storage.',
                repo: 'nustackdev/virtuals',
              },
              {
                name: 'invisibles',
                tagline: 'Transparent remote objects for Python.',
                repo: 'nustackdev/invisibles',
              },
              {
                name: 'rdbpy',
                tagline: 'RocksDB for Python, with transactions.',
                repo: 'nustackdev/rdbpy',
              },
              {
                name: 'kh57',
                tagline: 'Deterministic range reservoir sampling.',
                repo: 'nustackdev/kh57',
              },
            ].map((lib) => (
              <div key={lib.name} className={s.underItem}>
                <h3 className={s.underName}>{lib.name}</h3>
                <p className={s.underTagline}>{lib.tagline}</p>
                <a
                  href={`https://github.com/${lib.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className={s.underRepo}
                >
                  <GithubMark size={12} />
                  <span>{lib.repo}</span>
                </a>
              </div>
            ))}
          </div>
        </Section>
        </Chapter>

        {/* 7. Like what you see — closing CTA to turn readers into followers. */}
        <Chapter>
        <SectionHead
          title="Like what you see?"
          lede={
            <>
              The project is young. Star it, join the room, watch what we
              ship next.
            </>
          }
        />
        <Section>
          <div className={s.communityGrid}>
            <LinkCard
              href="https://github.com/nustackdev/nu"
              icon={<Star size={14} />}
              title="Star on GitHub"
            >
              nustackdev/nu
            </LinkCard>
            <LinkCard
              href="https://discord.gg/tCa8YE7XVr"
              icon={<DiscordMark size={14} />}
              title="Join Discord"
            >
              Talk to the team, share what you build.
            </LinkCard>
            <LinkCard
              href="https://twitter.com/nustackdev"
              icon={<XMark size={13} />}
              title="Follow updates"
            >
              Ship notes and small demos on X.
            </LinkCard>
          </div>
        </Section>
        </Chapter>

      </Body>
    </Page>
  );
}
