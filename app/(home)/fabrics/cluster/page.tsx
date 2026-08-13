import type { Metadata } from 'next';
import { BookOpen, Star } from 'lucide-react';
import {
  Page,
  Header,
  Body,
  Chapter,
  Section,
  SectionHead,
} from '@/components/page';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { PageBadge } from '@/components/meta/PageBadge';
import { Tagline } from '@/components/text';
import { CodeSample, type CodeTok } from '@/components/media/CodeSample';
import { GainGrid } from '@/components/chapters/GainGrid';
import { TryItBlock } from '@/components/chapters/TryItBlock';
import { LinkCard } from '@/components/controls/LinkCard';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { CtaRow } from '@/components/layout/CtaRow';
import { Stack } from '@/components/layout/Stack';
import { Button } from '@/components/controls/Button';
import { GithubMark } from '@/components/marks/GithubMark';
import { DiscordMark } from '@/components/marks/DiscordMark';
import { FABRIC } from '@/lib/fabrics';

export const metadata: Metadata = {
  title: 'nu.cluster - cluster compute fabric',
  description:
    'Run any Nu program on a cluster. Wrap a tree in Teleport and it executes on a remote actor, unchanged. Ray under the hood.',
};

// Snippet: teleport two Nu trees to two Ray actors.
// Kept close to nu/src/nu/ray/__init__.py so it is real, not hand-waved.
const k = (t: string): CodeTok => ({ c: 'kw', t });
const nu = (t: string): CodeTok => ({ c: 'nu', t });
const str = (t: string): CodeTok => ({ c: 'str', t });
const p = (t: string): CodeTok => ({ t });

const SNIPPET: CodeTok[][] = [
  [k('import'), p(' asyncio')],
  [k('from'), p(' nu '), k('import'), p(' '), nu('Provide'), p(', '), nu('ProvideList'), p(', '), nu('Sequential'), p(', arun')],
  [k('from'), p(' nu.ray '), k('import'), p(' '), nu('RayCluster'), p(', '), nu('RayService'), p(', '), nu('Teleport')],
  [],
  [p('train_epoch = ...  '), k('#'), p(' your Nu tree')],
  [],
  [p('program = '), nu('Provide'), p('('), nu('RayCluster'), p(', {'), str('"address"'), p(': '), str('"auto"'), p('},')],
  [p('    '), nu('ProvideList'), p('('), nu('RayService'), p(', [')],
  [p('        {'), str('"actor_name"'), p(': '), str('"worker-0"'), p(', '), str('"num_cpus"'), p(': 4},')],
  [p('        {'), str('"actor_name"'), p(': '), str('"worker-1"'), p(', '), str('"num_cpus"'), p(': 4},')],
  [p('    ], '), nu('Sequential'), p('(')],
  [p('        '), nu('Teleport'), p('(train_epoch, target=0),')],
  [p('        '), nu('Teleport'), p('(train_epoch, target=1),')],
  [p('    )),')],
  [p(')')],
  [],
  [p('asyncio.run(arun(program))')],
];

export default function ClusterFabricPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="fabric" name="nu.cluster" hue="amber" />}
        title={<>Run your Nu program on a cluster.</>}
        lede={
          <>
            Wrap a Nu tree in <code>Teleport</code> and it runs on a remote
            actor. Same code, cluster-scale compute.
          </>
        }
        actions={
          <CtaRow>
            <Button variant="primaryPurple" href={FABRIC.cluster.docs}>
              <BookOpen size={14} aria-hidden />
              <span>Read the reference</span>
            </Button>
            <Button variant="hueTinted" href={FABRIC.cluster.src}>
              <GithubMark size={14} />
              <span>See the code</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* 60-second snippet: teleport a tree to a worker. */}
        <Chapter>
          <SectionHead
            title="Teleport a tree."
            lede={
              <>
                Provision workers with <code>ProvideList(RayService, ...)</code>,
                then send any subtree to a tagged actor. Nothing else changes.
              </>
            }
          />
          <Section hue="amber">
            <Stack>
              <SilverWovenName as="h2" hue="amber">nu.cluster</SilverWovenName>
              <Tagline>Cluster compute fabric.</Tagline>
              <CodeSample
                filename="train.py"
                lang="python"
                langShort="py"
                lines={SNIPPET}
              />
            </Stack>
          </Section>
        </Chapter>

        {/* What your program gains - 3 FAB bullets. */}
        <Chapter>
          <SectionHead
            title="What your program gains."
            lede={<>Three shifts, one import.</>}
          />
          <Section>
            <GainGrid
              hue="amber"
              items={[
                {
                  title: 'Remote is a wrapper.',
                  body: (
                    <>
                      Drop <code>Teleport</code> around any tree. Drop it again
                      to run locally. The body never learns where it lives.
                    </>
                  ),
                },
                {
                  title: 'Actors as addresses.',
                  body: (
                    <>
                      Bind workers once with <code>ProvideList</code> or{' '}
                      <code>ProvideDict</code>. Point at them by tag:{' '}
                      <code>target=0</code>, <code>target="ledger"</code>,{' '}
                      <code>target=("shard", 3)</code>.
                    </>
                  ),
                },
                {
                  title: 'Ctx travels with the work.',
                  body: (
                    <>
                      Set <code>carry=True</code> and the parent&rsquo;s attrs
                      land on the remote actor. A handler that used one KV
                      backend locally uses the same one remotely, no rewiring.
                    </>
                  ),
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Combines with - lateral cross-links to sibling fabrics. */}
        <Chapter>
          <SectionHead
            title="Combines well with."
            lede={
              <>
                Ray runs the work. Other fabrics hold the state and wire the
                processes.
              </>
            }
          />
          <Section>
            <LinkGrid>
              <LinkCard href="/fabrics/kv" name="nu.kv" hue="sage" tagline="Durable across restarts.">
                Keep the results. Persist model weights, epoch metrics, and
                job state to a KV backend that workers share.
              </LinkCard>
              <LinkCard href="/fabrics/proxy" name="nu.proxy" hue="plum" tagline="Fabrics on the wire.">
                Put another fabric on the wire. Handy when the driver, the
                workers, and the store all sit on different boxes.
              </LinkCard>
              <LinkCard href="/fabrics/mem" name="nu.mem" hue="steel" tagline="In-process cache.">
                In-process state on the worker. Cache what a single Teleport
                needs without touching disk.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        {/* Learn + install: docs, source, one-command install. */}
        <TryItBlock
          heading="Try it."
          lede={<>One install. Two links. Python 3.10+.</>}
          command='pip install "nustack-py[all]"'
          actions={
            <CtaRow>
              <Button href="/fabrics" variant="neutral">
                <span>Browse all fabrics</span>
              </Button>
              <Button
                href="https://github.com/nustackdev/nu"
                variant="hueTinted"
              >
                <Star size={14} aria-hidden />
                <span>Star on GitHub</span>
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
