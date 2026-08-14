import Link from 'next/link';
import { Page, Header, Body, Chapter, Section, SectionCell, SectionHead } from '@/components/page';
import { Tagline, Description } from '@/components/text';
import { PageBadge } from '@/components/meta/PageBadge';
import { RelationsLine } from '@/components/meta/RelationsLine';
import { CodeSample } from '@/components/media/CodeSample';
import { LinkCard } from '@/components/controls/LinkCard';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { Stack } from '@/components/layout/Stack';
import { CtaRow } from '@/components/layout/CtaRow';
import { Button } from '@/components/controls/Button';
import { GainGrid } from '@/components/chapters/GainGrid';
import { SnippetBeat } from '@/components/chapters/SnippetBeat';
import { LikeThisBlock } from '@/components/chapters/LikeThisBlock';
import { GithubMark } from '@/components/marks/GithubMark';
import { TOOL } from '@/lib/tools';
import { VIRTUALS_LINES } from './snippet.data';

export default function VirtualsToolPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="tool" name="virtuals" hue="sage" />}
        tags={
          <>
            <RelationsLine label="Powered by" refs={TOOL.virtuals.poweredBy} />
            <RelationsLine label="Powers" refs={TOOL.virtuals.powers} />
          </>
        }
        title="Python collections over any storage."
        lede={
          <>
            Dicts, lists, sets, and trees that feel native to Python but live in RocksDB, LMDB, or memory.
          </>
        }
        actions={
          <CtaRow>
            <Button variant="solid" href={TOOL.virtuals.github} external>
              <GithubMark size={14} />
              <span>See on GitHub</span>
            </Button>
            <Button variant="outline" href={TOOL.virtuals.examples} external>
              <GithubMark size={14} />
              <span>Browse examples</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* What it is */}
        <Chapter>
          <SectionHead
            title="What it is."
            lede={
              <>
                The KV foundation under <Link href="/fabrics/kv">nu.kv</Link>.
                Standalone, dependency-light, usable on its own.
              </>
            }
          />
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
        </Chapter>

        {/* What you get */}
        <Chapter>
          <SectionHead title="What you get." />
          <Section split="1/1">
            <SectionCell>
              <Stack>
                <Description>
                  SQLAlchemy-shaped ergonomics without the SQL. No ORM,
                  no schema, no server process to run.
                </Description>
                <Description>
                  Every collection carries the same four properties,
                  backend to backend. The API you learn on an in-memory
                  store is the API you keep on RocksDB.
                </Description>
              </Stack>
            </SectionCell>
            <SectionCell>
              <GainGrid
                hue="sage"
                items={[
                  { title: 'Backend-agnostic.', body: 'RocksDB, LMDB, in-memory. Bring your own.' },
                  { title: 'Transactional.', body: 'Full ACID when the backend supports it.' },
                  { title: 'Observable.', body: 'Watch changes at any level of the hierarchy.' },
                  { title: 'Lazy.', body: 'Nothing loads until you access it.' },
                ]}
              />
            </SectionCell>
          </Section>
        </Chapter>

        {/* Snippet */}
        <Chapter>
          <SectionHead
            title="Sixty seconds of code."
            lede={
              <>
                Open a root. Assign nested dicts. Open a list underneath. Commit.
              </>
            }
          />
          <SnippetBeat
            ratio="45/55"
            hue="sage"
            prose={
              <Description>
                Swap <code>InMemoryStorage</code> for <code>RocksDBStorage</code>{' '}
                and the same lines write to disk.
              </Description>
            }
            code={<CodeSample filename="basic.py" lines={VIRTUALS_LINES} />}
          />
        </Chapter>

        {/* Powers Nu. */}
        <Chapter>
          <SectionHead
            title="Powers Nu."
            lede={
              <>
                <code>virtuals</code> is the substrate. <code>nu.kv</code>{' '}
                wraps it in Refs so state reads and writes look like plain Python.
              </>
            }
          />
          <Section>
            <LinkGrid>
              <LinkCard href="/fabrics/kv" name="nu.kv" hue="sage" tagline="Persistent state fabric.">
                Refs over the same KV backends. Transactions and change
                notifications baked in.
              </LinkCard>
              <LinkCard href="/tools/rdbpy" name="rdbpy" hue="steel" tagline="RocksDB bindings for Python.">
                The Python bindings that back the RocksDB storage. Also a
                standalone tool.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        <LikeThisBlock />
      </Body>
    </Page>
  );
}
