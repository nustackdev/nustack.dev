import { BookOpen } from 'lucide-react';
import { Page, Header, Body, Chapter, Section, SectionHead } from '@/components/page';
import { Tagline, Description } from '@/components/text';
import { PageBadge } from '@/components/meta/PageBadge';
import { CodeSample } from '@/components/media/CodeSample';
import { LinkCard } from '@/components/controls/LinkCard';
import { Button } from '@/components/controls/Button';
import { CtaRow } from '@/components/layout/CtaRow';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { GainGrid } from '@/components/chapters/GainGrid';
import { SnippetBeat } from '@/components/chapters/SnippetBeat';
import { FabricTryIt } from '@/components/chapters/FabricTryIt';
import { LikeThisBlock } from '@/components/chapters/LikeThisBlock';
import { GithubMark } from '@/components/marks/GithubMark';
import { FABRIC } from '@/lib/fabrics';
import { KV_SNIPPET_LINES } from './snippet.data';

export default function KvPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="fabric" name="nu.kv" hue="sage" />}
        title="State that survives every restart."
        lede={
          <>
            Your app needs to remember things. So you reach for Postgres, an
            ORM, migrations, a server. That is a lot of ceremony for a dict
            that persists. Nu gives you refs, durable by default.
          </>
        }
        actions={
          <CtaRow>
            <Button variant="primaryPurple" href={FABRIC.kv.docs}>
              <BookOpen size={14} aria-hidden />
              <span>Read the reference</span>
            </Button>
            <Button variant="hueTinted" href={FABRIC.kv.src}>
              <GithubMark size={14} />
              <span>See the code</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* Pitch: capability sentence and 60-second snippet */}
        <Chapter>
          <SectionHead
            title="See it."
            lede={
              <>
                Point a variable at durable storage the same way you would
                point it at memory. That is a ref bound to <code>nu.kv</code>.
              </>
            }
          />
          <SnippetBeat
            hue="sage"
            prose={
              <>
                <Tagline>Refs on disk. Same shape as refs in memory.</Tagline>
                <Description>
                  Declare a Shape with typed slots. Write to them. Read them
                  back. The KV backend keeps the bytes. Kill the process, run
                  it again, the values are still there.
                </Description>
                <Description>
                  Every write is atomic. Every read sees a snapshot. Every
                  slot can be watched for changes.
                </Description>
              </>
            }
            code={<CodeSample filename="mydb.py" lines={KV_SNIPPET_LINES} />}
          />
        </Chapter>

        {/* Gains: FAB per capability block */}
        <Chapter>
          <SectionHead
            title="What your program gains."
            lede={<>Three things you get the moment you import the fabric.</>}
          />
          <Section>
            <GainGrid
              hue="sage"
              items={[
                {
                  kicker: 'refs feel like variables',
                  title: 'Write four lines, not forty.',
                  body: 'Assign, read, iterate. No ORM, no schema, no migration step. Handlers stay small because persistence is under the hood.',
                },
                {
                  kicker: 'transactions built in',
                  title: 'Wrap writes in Atomic.',
                  body: 'Group any set of writes into one atomic body. Conflicts retry with backoff. Snapshots for reads come free.',
                },
                {
                  kicker: 'change notifications',
                  title: 'Subscribe once, wire live UIs.',
                  body: <>Every slot emits on change. The same signal <code>nu.ui</code> uses to re-render turns your data into a live view.</>,
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Backends: pick your storage */}
        <Chapter>
          <SectionHead
            title="Pick a backend."
            lede={
              <>
                One line switches the storage. Your Refs do not notice. Ship
                the same code from a laptop test to a production disk.
              </>
            }
          />
          <Section>
            <GainGrid
              hue="sage"
              items={[
                {
                  kicker: 'rocksdb',
                  title: 'Workhorse persistence.',
                  body: 'Billions of keys. Range scans, snapshots, WAL. The default when the data outlives the process.',
                },
                {
                  kicker: 'lmdb',
                  title: 'Fast local storage.',
                  body: 'Memory-mapped, single-file, no daemon. Great for desktop apps and small services.',
                },
                {
                  kicker: 'in-memory · text',
                  title: 'For tests and drafts.',
                  body: 'Same API, no disk. Swap in RocksDB when you are ready. Text JSON storage also ships for readable dumps.',
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Combines-with: lateral cross-links */}
        <Chapter>
          <SectionHead
            title="Combines well with."
            lede={
              <>
                Refs are refs. Pair <code>nu.kv</code> with any other fabric
                and the code shape stays identical.
              </>
            }
          />
          <Section>
            <LinkGrid>
              <LinkCard href="/fabrics/mem" name="nu.mem" hue="steel" tagline="Hot state, in-process.">
                Keep hot state in dicts, spill the durable bits into kv.
              </LinkCard>
              <LinkCard href="/fabrics/ui" name="nu.ui" hue="teal" tagline="Live browser widgets.">
                Render kv slots as text, tables, forms. Live-updates for free.
              </LinkCard>
              <LinkCard href="/fabrics/cluster" name="nu.cluster" hue="amber" tagline="Compute on the workers.">
                Teleport a body to a worker. The kv Refs travel with it.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        <FabricTryIt />
        <LikeThisBlock />
      </Body>
    </Page>
  );
}
