import { BookOpen } from 'lucide-react';
import {
  Page,
  Header,
  Body,
  Chapter,
  Section,
  SectionHead,
} from '@/components/page';
import { PageBadge } from '@/components/meta/PageBadge';
import { CodeSample } from '@/components/media/CodeSample';
import { BulletList } from '@/components/controls/BulletList';
import { LinkCard } from '@/components/controls/LinkCard';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { CtaRow } from '@/components/layout/CtaRow';
import { Button } from '@/components/controls/Button';
import { GainGrid } from '@/components/chapters/GainGrid';
import { TryItBlock } from '@/components/chapters/TryItBlock';
import { GithubMark } from '@/components/marks/GithubMark';
import { DiscordMark } from '@/components/marks/DiscordMark';
import type { CodeTok } from '@/components/media/CodeSample';

const HUE = 'plum' as const;

const SNIPPET: CodeTok[][] = [
  [{ c: 'kw', t: 'import' }, { t: ' nu' }],
  [
    { c: 'kw', t: 'from' },
    { t: ' nu.proxy ' },
    { c: 'kw', t: 'import' },
    { t: ' ' },
    { c: 'nu', t: 'InvisiblesServer' },
    { t: ', ' },
    { c: 'nu', t: 'InvisiblesProxy' },
  ],
  [
    { c: 'kw', t: 'from' },
    { t: ' nu.kv ' },
    { c: 'kw', t: 'import' },
    { t: ' ' },
    { c: 'nu', t: 'KvFabric' },
  ],
  [],
  [{ c: 'kw', t: 'class' }, { t: ' Counter(' }, { c: 'nu', t: 'nu.Shape' }, { t: '):' }],
  [{ t: '    value = ' }, { c: 'nu', t: 'nu.kv.IntRef' }, { t: '.slot()' }],
  [],
  [{ c: 'cmt', t: '# host process: expose the local KvFabric on the network' }],
  [
    { c: 'nu', t: 'nu.run' },
    { t: '(' },
    { c: 'nu', t: 'InvisiblesServer' },
    { t: '(' },
    { c: 'nu', t: 'KvFabric' },
    { t: ', ' },
    { c: 'str', t: '"0.0.0.0:19000"' },
    { t: '))' },
  ],
  [],
  [{ c: 'cmt', t: '# elsewhere: bump the same Counter.value over the wire' }],
  [{ t: 'bump = Counter.value.inc()' }],
  [
    { c: 'nu', t: 'nu.arun' },
    { t: '(' },
    { c: 'nu', t: 'InvisiblesProxy' },
    { t: '(' },
    { c: 'nu', t: 'KvFabric' },
    { t: ', bump, address=' },
    { c: 'str', t: '"10.0.0.1:19000"' },
    { t: '))' },
  ],
];

export default function ProxyFabricPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="fabric" name="nu.proxy" hue={HUE} />}
        title="Share a fabric across processes."
        lede={
          <>
            Bind a fabric on one machine. Reach it from another. Same Refs,
            same calls, over TCP or a Unix socket.
          </>
        }
        actions={
          <CtaRow>
            <Button href="#install" variant="primaryPurple">
              <span>Install nu</span>
            </Button>
            <Button href="/docs/reference/fabrics/proxy" variant="hueTinted">
              <BookOpen size={14} aria-hidden />
              <span>Read the reference</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* 60-second snippet */}
        <Chapter>
          <SectionHead
            title="Share a fabric across the wire."
            lede={
              <>
                Host a bound fabric on one process. Every other process talks
                to it through the same type.
              </>
            }
          />
          <Section hue={HUE}>
            <CodeSample
              filename="two_procs.py"
              lang="python"
              langShort="py"
              lines={SNIPPET}
            />
          </Section>
        </Chapter>

        {/* Gains */}
        <Chapter>
          <SectionHead
            title="What your program gains."
            lede={
              <>
                One import turns a local fabric into a shared one. No RPC
                stubs, no schemas, no client library to keep in sync.
              </>
            }
          />
          <Section>
            <GainGrid
              hue={HUE}
              items={[
                {
                  title: 'Local calls, remote effect.',
                  body: 'Method calls on a client proxy travel the wire and land on the bound fabric. Your handler code stays plain Python.',
                },
                {
                  title: 'Pure transport.',
                  body: 'No new Refs. No new interactions. The same Refs you already use in-process work across two.',
                },
                {
                  title: 'TCP or Unix socket.',
                  body: 'Pick the transport per address. Same API, same code, whether you span a datacenter or two processes on one box.',
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Combines with */}
        <Chapter>
          <SectionHead
            title="Combines with."
            lede={
              <>
                Proxy is the wiring under multi-process Nu programs. Pair it
                with a state fabric or a compute fabric to move real work.
              </>
            }
          />
          <Section hue={HUE}>
            <LinkGrid>
              <LinkCard
                href="/fabrics/kv"
                name="nu.kv"
                hue="sage"
                tagline="Persistent state fabric."
              >
                Host one KV store; every process reads and writes it as a
                local Ref. No connection pool to manage.
              </LinkCard>
              <LinkCard
                href="/fabrics/cluster"
                name="nu.cluster"
                hue="amber"
                tagline="Cluster compute fabric."
              >
                Ship a Nu tree to a worker, then let it talk back through
                proxy for shared state and side effects.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        {/* Where it fits */}
        <Chapter>
          <SectionHead
            title="Where it fits."
            lede={<>Reach for proxy when one process is no longer enough.</>}
          />
          <Section hue={HUE}>
            <BulletList
              items={[
                'Split a Nu program across two machines without rewriting the call sites.',
                'Front a stateful fabric (kv, ui, custom) for the rest of your cluster.',
                'Wire a background worker to the same state your web process holds.',
                'Talk to a long-running daemon from a short-lived script.',
              ]}
            />
          </Section>
        </Chapter>

        {/* Install */}
        <TryItBlock
          heading="Install."
          lede={<>One wheel. Python 3.10+. Proxy ships in the box.</>}
          command='pip install "nustack-py[all]"'
          hue={HUE}
          id="install"
          actions={
            <CtaRow>
              <Button href="/docs/reference/fabrics/proxy" variant="hueTinted">
                <BookOpen size={14} aria-hidden />
                <span>Read the reference</span>
              </Button>
              <Button
                href="https://github.com/nustackdev/nu"
                variant="neutral"
              >
                <GithubMark size={14} />
                <span>See the code</span>
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

        {/* Keep going */}
        <Chapter>
          <SectionHead
            title="Keep going."
            lede={<>Related pages, one hop away.</>}
          />
          <Section>
            <LinkGrid>
              <LinkCard href="/fabrics" title="All fabrics">
                Every fabric Nu ships with, on one page.
              </LinkCard>
              <LinkCard href="/fabrics/kv" title="nu.kv">
                Persistent state under the same Refs.
              </LinkCard>
              <LinkCard href="/fabrics/cluster" title="nu.cluster">
                Teleport a Nu tree to a cluster worker.
              </LinkCard>
              <LinkCard href="/tools/invisibles" title="invisibles">
                The transparent remote objects layer under nu.proxy.
              </LinkCard>
              <LinkCard href="/docs/reference/fabrics/proxy" title="Reference">
                Server, client, and bracket signatures.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>
      </Body>
    </Page>
  );
}
