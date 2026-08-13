import { BookOpen } from 'lucide-react';
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
import { Tagline, Description } from '@/components/text';
import { Button } from '@/components/controls/Button';
import { GainGrid } from '@/components/chapters/GainGrid';
import { LinkCard } from '@/components/controls/LinkCard';
import { CtaRow } from '@/components/layout/CtaRow';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { Stack } from '@/components/layout/Stack';
import { CodeSample, type CodeTok } from '@/components/media/CodeSample';
import { GithubMark } from '@/components/marks/GithubMark';

const HUE = 'sage'; // rdbpy backs nu.kv, share its hue

const SNIPPET: CodeTok[][] = [
  [{ c: 'kw', t: 'import' }, { t: ' ' }, { c: 'nu', t: 'rdbpy' }],
  [],
  [{ c: 'cmt', t: '# open a database' }],
  [
    { t: 'db = ' },
    { c: 'nu', t: 'rdbpy' },
    { t: '.DB(' },
    { c: 'str', t: "'/tmp/mydb'" },
    { t: ', ' },
    { c: 'nu', t: 'rdbpy' },
    { t: '.Options(create_if_missing=' },
    { c: 'kw', t: 'True' },
    { t: '))' },
  ],
  [],
  [{ c: 'cmt', t: '# put, get, iterate' }],
  [
    { t: 'db.put(' },
    { c: 'str', t: "b'user:1'" },
    { t: ', ' },
    { c: 'str', t: "b'ada'" },
    { t: ')' },
  ],
  [
    { t: 'db.get(' },
    { c: 'str', t: "b'user:1'" },
    { t: ')  ' },
    { c: 'cmt', t: "# -> b'ada'" },
  ],
  [],
  [{ c: 'cmt', t: '# atomic writes with a transaction' }],
  [
    { c: 'kw', t: 'with' },
    { t: ' db.transaction() ' },
    { c: 'kw', t: 'as' },
    { t: ' tx:' },
  ],
  [
    { t: '    tx.put(' },
    { c: 'str', t: "b'user:2'" },
    { t: ', ' },
    { c: 'str', t: "b'grace'" },
    { t: ')' },
  ],
  [
    { t: '    tx.put(' },
    { c: 'str', t: "b'user:3'" },
    { t: ', ' },
    { c: 'str', t: "b'hedy'" },
    { t: ')' },
  ],
];

export default function RdbpyPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="tool" name="rdbpy" hue={HUE} />}
        title={
          <>
            <SilverWovenName as="span" hue={HUE}>rdbpy</SilverWovenName>
            {' '}ships RocksDB for Python in one pip install.
          </>
        }
        lede={
          <>
            Real Cython bindings for RocksDB. Ships as one wheel on Linux and
            macOS, Intel and Apple Silicon. Iterators, snapshots, transactions,
            merges. No system libs to fight, no toolchain to install.
          </>
        }
        actions={
          <CtaRow>
            <Button
              href="https://github.com/nustackdev/rdbpy"
              variant="primaryPurple"
              external
            >
              <GithubMark size={14} aria-hidden />
              <span>See on GitHub</span>
            </Button>
            <Button href="/fabrics/kv" variant="neutral">
              <span>Use it via nu.kv</span>
            </Button>
          </CtaRow>
        }
      />

      <Body>
        <Chapter>
          <SectionHead
            title="What it is."
            lede={
              <>
                A Python package that opens a RocksDB database and talks to it
                directly. No sidecar server, no bridge process. Just import and
                call.
              </>
            }
          />
          <Section hue={HUE}>
            <Stack gap="normal">
              <Tagline>The whole RocksDB surface, mapped to Python.</Tagline>
              <Description>
                Databases, options, iterators, snapshots, transactions, merge
                operators, column families, backups. Bindings are written in
                Cython and compiled against a bundled RocksDB, so the wheel is
                self-contained.
              </Description>
            </Stack>
          </Section>
        </Chapter>

        <Chapter>
          <SectionHead title="Why we built it." />
          <Section>
            <Stack gap="normal">
              <Description>
                Nu needed a persistent KV backend that installs the same way on
                every machine. Existing RocksDB bindings for Python assume you
                already have RocksDB, Snappy, LZ4, and Zstd on the system, and
                the right versions. That kills one-line install.
              </Description>
              <GainGrid
                hue={HUE}
                items={[
                  {
                    title: 'One pip install.',
                    body: 'RocksDB and its compression libs ride in the wheel.',
                  },
                  {
                    title: 'Cython, not ctypes.',
                    body: 'Tight bindings over the C++ API, not a thin wrapper.',
                  },
                  {
                    title: 'Full surface.',
                    body: 'Transactions, snapshots, merge operators, column families all exposed.',
                  },
                  {
                    title: 'Backs nu.kv.',
                    body: 'The persistent state fabric stands on this.',
                  },
                ]}
              />
            </Stack>
          </Section>
        </Chapter>

        <Chapter>
          <SectionHead title="Open a database." />
          <Section hue="code">
            <CodeSample filename="db.py" lang="python" langShort="py" lines={SNIPPET} />
          </Section>
        </Chapter>

        <Chapter>
          <SectionHead
            title="Combines with."
            lede={<>Where rdbpy shows up in the rest of the stack.</>}
          />
          <Section>
            <LinkGrid>
              <LinkCard
                href="/fabrics/kv"
                title="nu.kv, persistent state fabric"
              >
                The fabric that turns Refs into durable state. Runs on rdbpy
                out of the box.
              </LinkCard>
              <LinkCard
                href="/tools/virtuals"
                title="virtuals, python collections over KV"
              >
                Dict, list, and set backed by any KV store, including rdbpy.
                The layer between raw bytes and Python objects.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        <Chapter>
          <SectionHead title="Take it from here." />
          <Section>
            <CtaRow>
              <Button
                href="https://github.com/nustackdev/rdbpy"
                variant="primaryPurple"
                external
              >
                <GithubMark size={14} aria-hidden />
                <span>See on GitHub</span>
              </Button>
              <Button href="/tools" variant="neutral">
                <span>Browse all tools</span>
              </Button>
              <Button href="/docs" variant="ghost">
                <BookOpen size={14} aria-hidden />
                <span>Read the docs</span>
              </Button>
            </CtaRow>
          </Section>
        </Chapter>
      </Body>
    </Page>
  );
}
