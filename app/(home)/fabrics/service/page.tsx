import { BookOpen } from 'lucide-react';
import { Page, Header, Body, Chapter, Section, SectionHead } from '@/components/page';
import { Description } from '@/components/text';
import { PageBadge } from '@/components/meta/PageBadge';
import { RelationsLine } from '@/components/meta/RelationsLine';
import { CodeSample } from '@/components/media/CodeSample';
import { Button } from '@/components/controls/Button';
import { LinkCard } from '@/components/controls/LinkCard';
import { CtaRow } from '@/components/layout/CtaRow';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { GainGrid } from '@/components/chapters/GainGrid';
import { SnippetBeat } from '@/components/chapters/SnippetBeat';
import { TryIt } from '@/components/chapters/TryIt';
import { LikeThisBlock } from '@/components/chapters/LikeThisBlock';
import { GithubMark } from '@/components/marks/GithubMark';
import { FABRIC } from '@/lib/fabrics';
import { SERVICE_SAMPLE_LINES } from './service.sample.data';

export const metadata = {
  title: 'nu.service: plug a Python object into Nu',
  description:
    'You already have a Python class. Point Nu at it and its methods start behaving like everything else in your Nu program.',
};

export default function ServiceFabricPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="fabric" name="nu.service" hue="steel" />}
        tags={<RelationsLine label="Powered by" refs={FABRIC.service.poweredBy} />}
        title="Plug a Python service into Nu."
        lede={
          <>
            You already have a Python class. Point Nu at it and its methods
            start behaving like the rest of your Nu program.
          </>
        }
        actions={
          <CtaRow>
            <Button variant="primaryPurple" href={FABRIC.service.docs}>
              <BookOpen size={14} aria-hidden />
              <span>Read the reference</span>
            </Button>
            <Button variant="hueTinted" href={FABRIC.service.src}>
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
            title="Point Nu at your service."
            lede={
              <>
                List the methods you want to reach. Give Nu the running
                instance. Now inside your Nu program, calling a method hits the
                real service and hands the result back.
              </>
            }
          />

          <SnippetBeat
            hue="steel"
            prose={
              <>
                <Description>
                  Start with a plain Python class. Nothing special about it —
                  it is the same object you already have.
                </Description>
                <Description>
                  Tell Nu which methods to expose. Each one gets a small tag
                  that says how it behaves: this one just reads, this one
                  changes something, this one runs and returns nothing.
                </Description>
                <Description>
                  Now anywhere in the program, call the method like a normal
                  function. The result flows into your UI, your storage, or the
                  next call — same as any other value in Nu.
                </Description>
              </>
            }
            code={<CodeSample filename="calculator.py" lines={SERVICE_SAMPLE_LINES} />}
          />
        </Chapter>

        {/* Chapter 2 — What your program gains */}
        <Chapter>
          <SectionHead
            title="What you get out of it."
            lede={
              <>
                A few things that fall out once your object speaks Nu.
              </>
            }
          />

          <Section>
            <GainGrid
              hue="steel"
              items={[
                {
                  title: 'Your class stays your class.',
                  body: 'No rewrite, no inheritance, no funny decorators on every method. You point Nu at what already works.',
                },
                {
                  title: 'Sync or async, your call.',
                  body: 'Write methods however you write them today. Nu runs sync programs and async programs the same way, and does the right thing with each method.',
                },
                {
                  title: 'Plays with everything else.',
                  body: 'A method result can feed a live UI, land in storage, or flow into the next call. It is a normal Nu value the moment you get it.',
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Chapter 3 — Combines well with */}
        <Chapter>
          <SectionHead
            title="Goes well with."
            lede={
              <>
                Once your methods are Nu values, the rest of the stack picks
                them up.
              </>
            }
          />

          <Section>
            <LinkGrid>
              <LinkCard
                href="/fabrics/ui"
                name="nu.ui"
                hue="teal"
                tagline="Show what your service does."
              >
                Wire a read method to a live widget. Fire a change from a
                button. No extra code between the method and the screen.
              </LinkCard>

              <LinkCard
                href="/fabrics/kv"
                name="nu.kv"
                hue="sage"
                tagline="Give it something to remember."
              >
                Store what your service produces — results, counters, cursors —
                on disk. Reload later and it is still there.
              </LinkCard>

              <LinkCard
                href="/fabrics/proxy"
                name="nu.proxy"
                hue="plum"
                tagline="Use it from another process."
              >
                Keep the service in one process, call it from another. Your
                code does not notice the difference.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        <TryIt />
        <LikeThisBlock />
      </Body>
    </Page>
  );
}
