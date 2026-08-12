import { BookOpen } from 'lucide-react';
import { Page, Header, Body, Chapter, Section, SectionHead } from '@/components/page';
import { Description } from '@/components/text';
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
import { HTTP_SAMPLE_LINES } from './http.sample.data';

export const metadata = {
  title: 'nu.http: talk to any HTTP API through Refs',
  description:
    'Declare a REST or JSON-RPC endpoint once. Call it like a function. Nu handles the wire, the JSON, sync and async.',
};

export default function HttpFabricPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="fabric" name="nu.http" hue="amber" />}
        title="Talk to any HTTP API through Refs."
        lede={
          <>
            Declare a REST or JSON-RPC endpoint once. Call it like a function.
            Nu handles the wire, the JSON, sync and async.
          </>
        }
        actions={
          <CtaRow>
            <Button variant="primaryBlue" href="/docs">
              <BookOpen size={14} aria-hidden />
              <span>Read the docs</span>
            </Button>
            <Button href="https://github.com/nustackdev/nu/tree/main/examples">
              <GithubMark size={14} />
              <span>See the code</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* Chapter 1 — capability + code */}
        <Chapter>
          <SectionHead
            title="Endpoints as Refs."
            lede={
              <>
                Give any HTTP service a Nu shape. Every method becomes a Ref
                you can compose into the same tree as your storage and UI.
              </>
            }
          />

          <SnippetBeat
            hue="amber"
            prose={
              <>
                <Description>
                  A <code>nu.Service</code> subclass names the endpoints.{' '}
                  <code>GETRef.method</code> and its four siblings cover the
                  five verbs: GET, POST, PUT, PATCH, DELETE.
                </Description>
                <Description>
                  Path placeholders and body fields come from kwargs. The
                  response arrives as parsed JSON, ready to feed into any
                  other Ref in your program.
                </Description>
                <Description>
                  Below: the GitHub repo endpoint declared once, called like a
                  local function. No client class, no request builder.
                </Description>
              </>
            }
            code={<CodeSample filename="github.py" lines={HTTP_SAMPLE_LINES} />}
          />
        </Chapter>

        {/* Chapter 2 — What your program gains */}
        <Chapter>
          <SectionHead
            title="What your program gains."
            lede={<>Three things fall out of naming HTTP calls as Refs.</>}
          />

          <Section>
            <GainGrid
              hue="amber"
              items={[
                {
                  title: 'One shape for five verbs.',
                  body: 'GET, POST, PUT, PATCH, DELETE all read the same in your code. No client boilerplate per method. One import.',
                },
                {
                  title: 'Sync and async, same code.',
                  body: (
                    <>
                      The same service runs under <code>nu.run</code> or{' '}
                      <code>nu.arun</code>. Nu picks the right httpx client for
                      the call site.
                    </>
                  ),
                },
                {
                  title: 'Composes with the tree.',
                  body: 'Feed a response into a kv slot, a UI text block, or another request. One primitive, all the way down.',
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
                Responses are Refs. Wire them straight into any other fabric.
              </>
            }
          />

          <Section>
            <LinkGrid>
              <LinkCard
                href="/fabrics/ui"
                name="nu.ui"
                hue="teal"
                tagline="Widgets that read from the wire."
              >
                Render fetched data straight into a live browser widget.
                Refresh the Ref, the page redraws.
              </LinkCard>

              <LinkCard
                href="/fabrics/proxy"
                name="nu.proxy"
                hue="plum"
                tagline="Share the service across processes."
              >
                Bind the client in one process, call it from another. Same
                Refs, over TCP or Unix socket.
              </LinkCard>

              <LinkCard
                href="/fabrics/kv"
                name="nu.kv"
                hue="sage"
                tagline="Cache and cursor state on disk."
              >
                Persist responses, poll cursors, or dedupe requests through
                a RocksDB-backed Ref.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        {/* Chapter 4 — Try it */}
        <TryItBlock
          heading="Try it."
          lede={<>One install, one command, one endpoint declared as code.</>}
          command='pip install "nustack-py[all]"'
          id="install"
          actions={
            <CtaRow>
              <Button variant="primaryBlue" href="/docs">
                <BookOpen size={14} aria-hidden />
                <span>Read the docs</span>
              </Button>
              <Button href="/fabrics">
                <span>See all fabrics</span>
              </Button>
              <Button href="https://github.com/nustackdev/nu/tree/main/examples">
                <GithubMark size={14} />
                <ButtonRepoLabel>nustackdev/nu · examples</ButtonRepoLabel>
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
