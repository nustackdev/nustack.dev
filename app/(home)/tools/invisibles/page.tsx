import { BookOpen } from 'lucide-react';
import {
  Page,
  Header,
  Body,
  Chapter,
  Section,
  SectionHead,
} from '@/components/page';
import { Description, Label } from '@/components/text';
import { CodeSample } from '@/components/media/CodeSample';
import { Button } from '@/components/controls/Button';
import { CtaRow } from '@/components/layout/CtaRow';
import { Stack } from '@/components/layout/Stack';
import { GainGrid } from '@/components/chapters/GainGrid';
import { GithubMark } from '@/components/marks/GithubMark';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { PageBadge } from '@/components/meta/PageBadge';

export const metadata = {
  title: 'Invisibles: transparent remote objects for Python',
  description:
    'Move a Python object to another process or node. The code that calls it does not change.',
};

export default function InvisiblesPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="tool" name="invisibles" hue="plum" />}
        title={
          <>
            <SilverWovenName as="span" hue="plum">invisibles</SilverWovenName>
            <span>. Same object, different machine.</span>
          </>
        }
        lede={
          <>
            Move a Python object to another process or node. The code that
            calls it does not change.
          </>
        }
        actions={
          <CtaRow>
            <Button
              href="https://github.com/nustackdev/invisibles"
              variant="primaryPurple"
              external
            >
              <GithubMark size={14} />
              <span>See on GitHub</span>
            </Button>
            <Button href="/fabrics/proxy" variant="hueTinted">
              <BookOpen size={14} aria-hidden />
              <span>See the fabric it powers</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* What it is. */}
        <Chapter>
          <SectionHead
            title="What it is"
            lede={
              <>
                A transparent RPC proxy. Call methods on the proxy; they run on
                the remote object and return the result. Sync stays sync. Async
                stays async.
              </>
            }
          />
          <Section hue="plum">
            <Stack gap="normal">
              <Description>
                No base class. No schema file. No stubs to generate. Expose any
                Python object; the proxy matches its API exactly.
              </Description>
              <CodeSample
                filename="usage.py"
                lang="python"
                langShort="py"
                lines={[
                  [{ c: 'cmt', t: '# local' }],
                  [{ t: 'result = service.' }, { c: 'nu', t: 'add' }, { t: '(5, 3)' }],
                  [{ t: 'data = ' }, { c: 'kw', t: 'await' }, { t: ' service.' }, { c: 'nu', t: 'fetch' }, { t: '(' }, { c: 'str', t: '"key"' }, { t: ')' }],
                  [],
                  [{ c: 'cmt', t: '# remote, identical' }],
                  [{ t: 'result = proxy.' }, { c: 'nu', t: 'add' }, { t: '(5, 3)' }],
                  [{ t: 'data = ' }, { c: 'kw', t: 'await' }, { t: ' proxy.' }, { c: 'nu', t: 'fetch' }, { t: '(' }, { c: 'str', t: '"key"' }, { t: ')' }],
                ]}
              />
              <Label>
                Iterators, context managers, operators, exceptions, nested
                returns. All work over the wire.
              </Label>
            </Stack>
          </Section>
        </Chapter>

        {/* Why standalone. */}
        <Chapter>
          <SectionHead
            title="Why it stands alone"
            lede={
              <>
                Nu uses invisibles to bind fabrics across processes. It works
                just as well without Nu, for any Python code that needs to
                cross a boundary.
              </>
            }
          />
          <Section>
            <GainGrid
              hue="plum"
              cols={3}
              items={[
                {
                  title: 'Any object',
                  body: 'Expose a service without inheriting anything. Existing code becomes remote without a rewrite.',
                },
                {
                  title: 'Sync and async, native',
                  body: 'Two connection channels do what they are good at: a sync pump for sync methods, an async loop for async methods.',
                },
                {
                  title: 'Full Python protocol',
                  body: (
                    <>
                      <code>for x in proxy</code>, <code>with proxy</code>,{' '}
                      <code>proxy[key]</code>, <code>len(proxy)</code>. Custom
                      exceptions come back typed.
                    </>
                  ),
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Where it fits. */}
        <Chapter>
          <SectionHead
            title="Where it fits in Nu"
            lede={
              <>
                Invisibles is the foundation under <code>nu.proxy</code>, the
                network fabric. Bind a fabric in one process, use it from
                another; same Refs, over TCP or Unix socket.
              </>
            }
          />
          <Section>
            <CtaRow>
              <Button href="/fabrics/proxy" variant="hueTinted">
                <span>See nu.proxy</span>
              </Button>
              <Button href="/docs/reference/fabrics/proxy" variant="hueTinted">
                <BookOpen size={14} aria-hidden />
                <span>Read the docs</span>
              </Button>
              <Button href="/tools" variant="hueTinted">
                <span>See other tools</span>
              </Button>
              <Button href="/" variant="hueTinted">
                <span>Read the pitch</span>
              </Button>
            </CtaRow>
          </Section>
        </Chapter>
      </Body>
    </Page>
  );
}
