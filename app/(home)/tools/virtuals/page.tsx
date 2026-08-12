import Link from 'next/link';
import { Page, Header, Body, Chapter, Section, SectionHead } from '@/components/page';
import { Heading, Tagline, Description } from '@/components/text';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { PageBadge } from '@/components/meta/PageBadge';
import { CodeSample } from '@/components/media/CodeSample';
import { Button, ButtonRepoLabel } from '@/components/controls/Button';
import { LinkCard } from '@/components/controls/LinkCard';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { CtaRow } from '@/components/layout/CtaRow';
import { Stack } from '@/components/layout/Stack';
import { GainGrid } from '@/components/chapters/GainGrid';
import { SnippetBeat } from '@/components/chapters/SnippetBeat';
import { TryItBlock } from '@/components/chapters/TryItBlock';
import { GithubMark } from '@/components/marks/GithubMark';
import { DiscordMark } from '@/components/marks/DiscordMark';
import { VIRTUALS_LINES } from './snippet.data';

export default function VirtualsToolPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="tool" name="virtuals" hue="sage" />}
        title="Python collections over any storage."
        lede={
          <>
            Dicts, lists, sets, and trees that feel native to Python but live in RocksDB, LMDB, or memory.
          </>
        }
      />
      <Body>
        <Chapter>
          <SectionHead
            title={<><SilverWovenName as="span" hue="sage">virtuals</SilverWovenName></>}
            lede={
              <>
                The KV foundation under <Link href="/fabrics/kv">nu.kv</Link>.
                Standalone, dependency-light, usable on its own.
              </>
            }
          />

          {/* What it is */}
          <Section>
            <Stack>
              <Tagline>Native feel. Flat KV under.</Tagline>
              <Description>
                Point a variable at storage. Read and write like a dict or a list.
                Nothing materializes until you touch it.
              </Description>
              <Description>
                Views compose data-structure logic over flat tuple-key storage.
                Any store that implements the storage protocol gets every collection for free.
              </Description>
            </Stack>
          </Section>

          {/* Why standalone */}
          <Section split="1/1">
            <Stack>
              <Heading level={2}>Why it ships alone.</Heading>
              <Description>
                <SilverWovenName as="span" hue="sage">virtuals</SilverWovenName>{' '}
                predates the Nu stack. It is the KV substrate <code>nu.kv</code> rides on,
                but it is useful on its own.
              </Description>
              <Description>
                Grab it when you want SQLAlchemy-shaped ergonomics over a KV store instead
                of over SQL. No ORM. No schema. No server.
              </Description>
            </Stack>
            <GainGrid
              hue="sage"
              items={[
                { title: 'Backend-agnostic.', body: 'RocksDB, LMDB, in-memory. Bring your own.' },
                { title: 'Transactional.', body: 'Full ACID when the backend supports it.' },
                { title: 'Observable.', body: 'Watch changes at any level of the hierarchy.' },
                { title: 'Lazy.', body: 'Nothing loads until you access it.' },
              ]}
            />
          </Section>

          {/* Snippet */}
          <SnippetBeat
            ratio="45/55"
            hue="sage"
            prose={
              <>
                <Heading level={2}>Sixty seconds of code.</Heading>
                <Description>
                  Open a root. Assign nested dicts. Open a list underneath. Commit.
                </Description>
                <Description>
                  Swap <code>InMemoryStorage</code> for <code>RocksDBStorage</code>{' '}
                  and the same lines write to disk.
                </Description>
              </>
            }
            code={<CodeSample filename="basic.py" lines={VIRTUALS_LINES} />}
          />

          {/* Combines with */}
          <Section>
            <Stack>
              <Heading level={2}>Where it fits in Nu.</Heading>
              <Description>
                <SilverWovenName as="span" hue="sage">virtuals</SilverWovenName>{' '}
                is the substrate. <code>nu.kv</code> wraps it in Refs so state reads
                and writes look like plain Python.
              </Description>
              <LinkGrid>
                <LinkCard href="/fabrics/kv" name="nu.kv" hue="sage" tagline="Persistent state fabric.">
                  Refs over the same KV backends. Transactions and change
                  notifications baked in.
                </LinkCard>
                <LinkCard href="/tools/rdbpy" name="rdbpy" hue="sage" tagline="RocksDB bindings for Python.">
                  The Python bindings that back the RocksDB storage. Also a
                  standalone tool.
                </LinkCard>
              </LinkGrid>
            </Stack>
          </Section>

        </Chapter>

        {/* Install */}
        <TryItBlock
          heading="Install."
          lede={
            <>
              For the RocksDB backend: <code>pip install virtuals-py[rocksdb]</code>.
            </>
          }
          command='pip install "nustack-py[all]"'
          id="install"
          actions={
            <CtaRow>
              <Button href="https://github.com/nustackdev/virtuals">
                <GithubMark size={14} />
                <ButtonRepoLabel>nustackdev/virtuals</ButtonRepoLabel>
              </Button>
              <Button href="/tools" variant="neutral">
                Back to tools
              </Button>
              <Button href="/fabrics/kv" variant="neutral">
                See nu.kv
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
