import { BookOpen } from 'lucide-react';
import { Page, Header, Body, Chapter, Section, SectionCell, SectionHead } from '@/components/page';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { PageBadge } from '@/components/meta/PageBadge';
import { CodeSample } from '@/components/media/CodeSample';
import { CtaRow } from '@/components/layout/CtaRow';
import { Button } from '@/components/controls/Button';
import { LinkCard } from '@/components/controls/LinkCard';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { GainGrid } from '@/components/chapters/GainGrid';
import { FabricTryIt } from '@/components/chapters/FabricTryIt';
import { LikeThisBlock } from '@/components/chapters/LikeThisBlock';
import { GithubMark } from '@/components/marks/GithubMark';
import { FABRIC } from '@/lib/fabrics';
import { MEM_COUNTER_LINES } from './mem.sample.data';

export default function MemPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="fabric" name="nu.mem" hue="steel" />}
        title={
          <>
            Hot state, zero backend.
          </>
        }
        lede={
          <>
            Give your program state on a plain Python dict. No server, no
            schema, no wiring. Under the hood, that is{' '}
            <SilverWovenName as="span" hue="steel">nu.mem</SilverWovenName>,
            {' '}same Refs you use everywhere else in Nu.
          </>
        }
        actions={
          <CtaRow>
            <Button variant="primaryPurple" href={FABRIC.mem.docs}>
              <BookOpen size={14} aria-hidden />
              <span>Read the reference</span>
            </Button>
            <Button variant="hueTinted" href={FABRIC.mem.src}>
              <GithubMark size={14} />
              <span>See the code</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* Chapter 1 — 60-second snippet + what your program gains */}
        <Chapter>
          <SectionHead
            title="A counter, end to end."
            lede={
              <>
                Declare a shape, bind it to a dict, run the program. The
                state lives for the life of the process.
              </>
            }
          />

          <Section hue="steel" split="1/1">
            <SectionCell>
              <CodeSample filename="counter.py" lines={MEM_COUNTER_LINES} />
            </SectionCell>
            <SectionCell>
              <GainGrid
                hue="steel"
                items={[
                  {
                    title: 'State without ceremony.',
                    body: 'A dict is your database. No migration, no schema, no lifecycle to manage. Restart clears it. That is the point.',
                  },
                  {
                    title: 'Same Refs, everywhere.',
                    body: (
                      <>
                        <code>IntRef</code>, <code>DictRef</code>,{' '}
                        <code>ShapeRef</code> read the same as in{' '}
                        <code>nu.kv</code> or <code>nu.ui</code>. Swap the
                        fabric later, the program stays put.
                      </>
                    ),
                  },
                  {
                    title: 'In-process speed.',
                    body: 'Reads and writes are dict ops. No serialization, no round trip. Use it for cache, hot state, and coordination between shapes in one process.',
                  },
                ]}
              />
            </SectionCell>
          </Section>
        </Chapter>

        {/* Chapter 2 — when to reach for mem vs kv */}
        <Chapter>
          <SectionHead
            title="Pick by lifetime."
            lede={
              <>
                <SilverWovenName as="span" hue="steel">nu.mem</SilverWovenName>{' '}
                and <SilverWovenName as="span" hue="sage">nu.kv</SilverWovenName>{' '}
                share the same Ref shapes. Pick by what the state needs to
                survive.
              </>
            }
          />

          <Section>
            <LinkGrid>
              <LinkCard href="#install" name="nu.mem" hue="steel" tagline="Ephemeral, in-process.">
                Caches. Live counters. UI state. Anything you can rebuild
                on restart. Zero setup, zero disk.
              </LinkCard>
              <LinkCard href="/fabrics/kv" name="nu.kv" hue="sage" tagline="Durable, across restarts.">
                Users. Orders. Anything you need after a crash. Same Refs,
                backed by RocksDB or LMDB. Move it to nu.kv when the state
                needs to survive a restart.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        {/* Chapter 3 — combines with */}
        <Chapter>
          <SectionHead
            title="Combines well with."
            lede={
              <>
                Fabrics compose. Wire{' '}
                <SilverWovenName as="span" hue="steel">nu.mem</SilverWovenName>{' '}
                to a browser, a KV store, or another process without
                changing your Refs.
              </>
            }
          />

          <Section>
            <LinkGrid>
              <LinkCard href="/fabrics/kv" name="nu.kv" hue="sage" tagline="Durable on disk.">
                Move hot state to disk when you outgrow the process.
              </LinkCard>
              <LinkCard href="/fabrics/ui" name="nu.ui" hue="teal" tagline="Live browser widgets.">
                Bind mem state straight into browser widgets. Live
                updates, no glue.
              </LinkCard>
              <LinkCard href="/fabrics/proxy" name="nu.proxy" hue="plum" tagline="Fabrics on the wire.">
                Serve a mem fabric over a socket. Another process reads
                the same Refs.
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
