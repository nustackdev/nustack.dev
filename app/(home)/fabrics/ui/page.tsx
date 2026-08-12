import { BookOpen, Play, Terminal } from 'lucide-react';
import { Page, Header, Body, Chapter, Section, SectionHead } from '@/components/page';
import { Description } from '@/components/text';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { PageBadge } from '@/components/meta/PageBadge';
import { CodeSample } from '@/components/media/CodeSample';
import { Button, ButtonRepoLabel } from '@/components/controls/Button';
import { LinkCard } from '@/components/controls/LinkCard';
import { CtaRow } from '@/components/layout/CtaRow';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { GainGrid } from '@/components/chapters/GainGrid';
import { SnippetBeat } from '@/components/chapters/SnippetBeat';
import { TryItBlock } from '@/components/chapters/TryItBlock';
import { GithubMark } from '@/components/marks/GithubMark';
import { DiscordMark } from '@/components/marks/DiscordMark';
import { UI_COUNTER_LINES } from './ui.sample.data';

export const metadata = {
  title: 'nu.ui — a live web UI from pure Python',
  description:
    'Widgets are Refs. State changes redraw the browser. No React, no JSX, no template engine, no HTMX.',
};

export default function UiFabricPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="fabric" name="nu.ui" hue="teal" />}
        title="Ship a live web UI from pure Python."
        lede={
          <>
            Widgets are Refs. State changes redraw the browser. No React, no
            JSX, no template engine, no HTMX.
          </>
        }
        actions={
          <CtaRow>
            <Button variant="primaryBlue" href="/use-cases/movies">
              <Play size={14} aria-hidden />
              <span>Run the demo</span>
            </Button>
            <Button href="/docs/tutorials/counter">
              <BookOpen size={14} aria-hidden />
              <span>Read the tutorial</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* Chapter 1 — PAS + capability code */}
        <Chapter>
          <SectionHead
            title="Skip the frontend tax."
            lede={
              <>
                You want a dashboard, a control panel, an internal tool. Just a
                browser page that updates when your data does.
              </>
            }
          />

          <SnippetBeat
            hue="teal"
            prose={
              <>
                <Description>
                  The Python side is a hundred lines. The frontend side is
                  another thousand: a bundler, a framework, a router, websocket
                  glue, a template engine.
                </Description>
                <Description>
                  <SilverWovenName as="span" hue="teal">
                    nu.ui
                  </SilverWovenName>{' '}
                  makes browser widgets first-class Refs. Set a value, the page
                  redraws. That is the surface.
                </Description>
                <Description>
                  Below: a RocksDB-backed counter that ticks every second and
                  streams into a live browser stat. One file. No JavaScript.
                </Description>
              </>
            }
            code={<CodeSample filename="counter.py" lines={UI_COUNTER_LINES} />}
          />
        </Chapter>

        {/* Chapter 2 — What your program gains */}
        <Chapter>
          <SectionHead
            title="What your program gains."
            lede={
              <>Three things, all falling out of naming widgets as Refs.</>
            }
          />

          <Section>
            <GainGrid
              hue="teal"
              items={[
                {
                  title: 'Widgets are Refs.',
                  body: (
                    <>
                      <code>StatRef</code>, <code>TableRef</code>,{' '}
                      <code>ButtonRef</code>, <code>FormRef</code> read and write
                      like plain Python. One vocabulary, top to bottom.
                    </>
                  ),
                },
                {
                  title: 'State edits redraw the browser.',
                  body: (
                    <>
                      Wire a KV Ref to a text block once. Every write lands in the
                      browser, live, without a hand-rolled websocket handler.
                    </>
                  ),
                },
                {
                  title: 'No JavaScript, no build.',
                  body: (
                    <>
                      You never open a <code>package.json</code>. No Node, no
                      bundler, no compile step. Just <code>python app.py</code>.
                    </>
                  ),
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Chapter 3 — Combines well with */}
        <Chapter>
          <SectionHead
            title="Combines well with."
            lede={
              <>
                Widgets are Refs. Data is Refs. Pick a state fabric, wire it
                once, watch the UI follow.
              </>
            }
          />

          <Section>
            <LinkGrid>
              <LinkCard href="/fabrics/mem" name="nu.mem" hue="steel" tagline="Hot state, in-process.">
                Use it for cache, session state, and anything you do not need
                to survive a restart.
              </LinkCard>

              <LinkCard href="/fabrics/kv" name="nu.kv" hue="sage" tagline="Durable state, on disk.">
                Refs backed by RocksDB or LMDB. Restart the process, the
                widgets snap back to where they were.
              </LinkCard>

              <LinkCard href="/fabrics/http" name="nu.http" hue="amber" tagline="Refs on the wire.">
                Expose a Ref as an HTTP endpoint, or pull one from an outside
                service. The UI does not care where data lives.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        {/* Chapter 4 — Try it */}
        <TryItBlock
          heading="Try it."
          lede={<>One install, one command, a browser tab that stays live.</>}
          command='pip install "nustack-py[all]"'
          actions={
            <CtaRow>
              <Button variant="primaryBlue" href="/use-cases/movies">
                <Play size={14} aria-hidden />
                <span>Run the movies demo</span>
              </Button>
              <Button href="/docs/reference/fabrics/ui">
                <Terminal size={14} aria-hidden />
                <span>Open the reference</span>
              </Button>
              <Button href="https://github.com/nustackdev/nu">
                <GithubMark size={14} />
                <ButtonRepoLabel>nustackdev/nu</ButtonRepoLabel>
              </Button>
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
      </Body>
    </Page>
  );
}
