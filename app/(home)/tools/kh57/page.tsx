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
import { GithubMark } from '@/components/marks/GithubMark';
import { DiscordMark } from '@/components/marks/DiscordMark';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { PageBadge } from '@/components/meta/PageBadge';
import { GainGrid } from '@/components/chapters/GainGrid';
import { TryItBlock } from '@/components/chapters/TryItBlock';

export const metadata = {
  title: 'kh57. Uniform samples from huge sorted key-value stores.',
  description:
    'Uniform random samples from trillion-item sorted key-value stores. Same keys, same salt, same sample. Reads stay within 2x of n.',
};

export default function Kh57ToolPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="tool" name="kh57" hue="amber" />}
        title={
          <>
            <SilverWovenName as="span" hue="amber">kh57</SilverWovenName>
            <span>. Uniform samples from a trillion sorted rows.</span>
          </>
        }
        lede={
          <>
            Pull <em>n</em> uniform samples from any range of a huge sorted
            key-value store. Deterministic, stable, range-friendly. Total
            reads stay within 2x of <em>n</em>.
          </>
        }
        actions={
          <CtaRow>
            <Button
              href="https://github.com/nustackdev/kh57"
              variant="primaryPurple"
              external
            >
              <GithubMark size={14} />
              <span>See on GitHub</span>
            </Button>
            <Button href="#how-it-works" variant="hueTinted">
              <BookOpen size={14} aria-hidden />
              <span>Read how it works</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        {/* The problem. */}
        <Chapter>
          <SectionHead
            title="The problem."
            lede={
              <>
                You have a sorted-by-key dataset. Billions of rows, maybe
                trillions. You want a uniform random slice of one range, right
                now, without loading the whole thing.
              </>
            }
          />
          <Section hue="amber">
            <Stack gap="normal">
              <Description>
                Every-Nth sampling is biased. A shuffled index destroys range
                reads. Loading the range first, then sampling, defeats the
                point. You want both: uniformity and cheap range access.
              </Description>
              <Label>
                Niche. If it is your problem, kh57 is built for exactly that
                shape.
              </Label>
            </Stack>
          </Section>
        </Chapter>

        {/* What it gives you. */}
        <Chapter>
          <SectionHead
            title="Four properties, free."
            lede={
              <>
                One hash per key, one compound sort key per row, one range
                walk per sample. Four properties fall out for free.
              </>
            }
          />
          <Section>
            <GainGrid
              hue="amber"
              cols={2}
              items={[
                {
                  title: 'Deterministic',
                  body: 'Same keys, same salt, same sample. Reproduce a report a year later with one line of code.',
                },
                {
                  title: 'Stable under growth',
                  body: 'Append new keys outside the queried range and the sample inside stays identical. No re-sampling to explain.',
                },
                {
                  title: 'Range-friendly',
                  body: 'Scan only what the query needs. Ask for 500 samples from a 100k slice, touch on the order of 1000 rows.',
                },
                {
                  title: 'Any sorted-KV backend',
                  body: (
                    <>
                      Implement <code>get</code>, <code>put</code>,{' '}
                      <code>delete</code>, <code>range_scan</code>. Done.
                      RocksDB, LMDB, or a dict for tests.
                    </>
                  ),
                },
              ]}
            />
          </Section>
        </Chapter>

        {/* Install and try. */}
        <TryItBlock
          heading="Install and try."
          lede={
            <>
              One pip install. Python 3.12+. The hot loop is Cython. Wheels
              ship for Linux.
            </>
          }
          command='pip install "nustack-py[all]"'
          actions={
            <CtaRow>
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

        {/* Sample from a range. */}
        <Chapter>
          <SectionHead title="Sample from a range." />
          <Section>
            <Stack gap="normal">
              <CodeSample
                filename="sample.py"
                lang="python"
                langShort="py"
                lines={[
                  [{ c: 'kw', t: 'from' }, { t: ' kh57 ' }, { c: 'kw', t: 'import' }, { t: ' kh57, sample, MemBackend' }],
                  [],
                  [{ t: 'backend = ' }, { c: 'nu', t: 'MemBackend' }, { t: '()' }],
                  [{ c: 'kw', t: 'for' }, { t: ' key ' }, { c: 'kw', t: 'in' }, { t: ' ' }, { c: 'nu', t: 'range' }, { t: '(' }, { c: 'str', t: '1_000_000' }, { t: '):' }],
                  [{ t: '    encoded = ' }, { c: 'nu', t: 'kh57' }, { t: '(key).to_bytes(' }, { c: 'str', t: '8' }, { t: ', ' }, { c: 'str', t: '"big"' }, { t: ')' }],
                  [{ t: '    backend.' }, { c: 'nu', t: 'put' }, { t: '(encoded, ' }, { c: 'nu', t: 'str' }, { t: '(key).encode())' }],
                  [],
                  [{ c: 'cmt', t: '# 500 uniform samples from the [100_000, 200_000) range' }],
                  [{ t: 'rows = ' }, { c: 'nu', t: 'sample' }, { t: '(backend, ' }, { c: 'str', t: '500' }, { t: ', begin=' }, { c: 'str', t: '100_000' }, { t: ', end=' }, { c: 'str', t: '200_000' }, { t: ')' }],
                ]}
              />
              <Label>
                Swap <code>MemBackend</code> for a RocksDB or LMDB adapter;
                the sample call does not change.
              </Label>
            </Stack>
          </Section>
        </Chapter>

        {/* How it works. */}
        <span id="how-it-works" aria-hidden />
        <Chapter>
          <SectionHead
            title="How it works."
            lede={
              <>
                Hash each key with SipHash-2-4. The bit length of the hash is
                the key&apos;s <em>level</em>: half the keys land in level 63,
                a quarter in 62, and so on. Store each row under a compound
                sort key of <code>(level, key)</code>.
              </>
            }
          />
          <Section>
            <Stack gap="normal">
              <Description>
                To sample from a range: walk levels sparsest to densest.
                Take a full level while it fits the quota. Reservoir-sample
                the boundary level for the remainder. Stop.
              </Description>
              <Description>
                Each level is a deterministic uniform subset of the range, so
                their union is a uniform sample. Read amplification stays
                within roughly 2x of <em>n</em>.
              </Description>
              <Label>
                Algorithm by Karen Hambardzumyan (mahnerak), 2023.
              </Label>
            </Stack>
          </Section>
        </Chapter>

        {/* Where it fits. */}
        <Chapter>
          <SectionHead
            title="Where it fits."
            lede={
              <>
                <SilverWovenName as="span" hue="amber">kh57</SilverWovenName>{' '}
                is the sampler under <code>nulog</code>&apos;s metrics store.
                It turns a billion log entries into a live chart without a
                query engine.
              </>
            }
          />
          <Section>
            <CtaRow>
              <Button href="/apps/nulog" variant="hueTinted">
                <span>See nulog</span>
              </Button>
              <Button href="/fabrics/kv" variant="hueTinted">
                <span>See nu.kv</span>
              </Button>
              <Button href="/tools" variant="hueTinted">
                <span>See other tools</span>
              </Button>
              <Button href="/" variant="hueTinted">
                <span>See the Nu stack</span>
              </Button>
            </CtaRow>
          </Section>
        </Chapter>
      </Body>
    </Page>
  );
}
