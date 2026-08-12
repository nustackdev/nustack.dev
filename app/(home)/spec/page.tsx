import { Page, Header, Body, Chapter, Section, SectionHead } from '@/components/page';
import { Heading, Tagline, Description } from '@/components/text';
import { SilverWovenName } from '@/components/meta/SilverWovenName';
import { PageBadge } from '@/components/meta/PageBadge';
import { Button, ButtonRepoLabel } from '@/components/controls/Button';
import { LinkCard } from '@/components/controls/LinkCard';
import { NumberedList } from '@/components/controls/NumberedList';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { CtaRow } from '@/components/layout/CtaRow';
import { Stack } from '@/components/layout/Stack';
import { GainGrid } from '@/components/chapters/GainGrid';
import { SnippetBeat } from '@/components/chapters/SnippetBeat';
import { CodeSample } from '@/components/media/CodeSample';
import { GithubMark } from '@/components/marks/GithubMark';
import { SPEC_MODEL_LINES } from './spec.sample.data';

const SPEC_REPO = 'https://github.com/nustackdev/interaction-model';

export default function SpecPage() {
  return (
    <Page>
      <Header
        meta={<PageBadge kind="spec" name="interaction-model" hue="steel" />}
        title="The interaction model."
        lede={
          <>
            The language-agnostic specification underneath Nu, built on four
            ideas (Refs, Interactions, Fabrics, Contexts) that any language can
            implement.
          </>
        }
      />
      <Body>
        <Chapter>
          <SectionHead
            title={
              <>
                <SilverWovenName as="span" hue="steel">interaction-model</SilverWovenName>
              </>
            }
            lede={
              <>
                A written spec, not a library. Nu is one implementation of it.
                The spec lives in its own repo so other implementations can too.
              </>
            }
          />

          {/* What the spec is */}
          <Section>
            <Stack>
              <Tagline>Name the locations. Describe what to do with them.</Tagline>
              <Description>
                A program that touches the world needs two things: names for
                what it touches, and descriptions of what to do with them.
                The spec calls the names Refs and the descriptions Interactions.
              </Description>
              <Description>
                Every element of a program is one or the other. Refs name.
                Interactions describe. Fabrics execute. That is the whole spec.
              </Description>
            </Stack>
          </Section>

          {/* The model in one snippet */}
          <SnippetBeat
            ratio="45/55"
            hue="steel"
            prose={
              <>
                <Heading level={2}>The model in one snippet.</Heading>
                <Description>
                  A program is a tree of Interactions over Refs. A Context binds
                  each Ref to a Fabric and runs the tree there.
                </Description>
                <Description>
                  Swap the Context to run the same program against test data,
                  a KV store, or a live cluster. The tree does not change.
                </Description>
              </>
            }
            code={<CodeSample filename="app.py" lines={SPEC_MODEL_LINES} />}
          />

          {/* Why it exists separately from Nu */}
          <Section split="1/1">
            <Stack>
              <Heading level={2}>Why it stands apart from Nu.</Heading>
              <Description>
                Nu is Python. The model is not. Keeping the spec separate keeps
                the ideas honest: if a rule only holds in Python, it does not
                belong in the spec.
              </Description>
              <Description>
                It also opens the door to other implementations. A Rust
                interaction runtime, a Kotlin one, a Zig one, all readable
                against the same document.
              </Description>
            </Stack>
            <GainGrid
              hue="steel"
              items={[
                { title: 'Language-agnostic.', body: 'No Python in the spec itself.' },
                { title: 'Runtime-agnostic.', body: 'Sync, async, or scheduled.' },
                { title: 'Backend-agnostic.', body: 'Any Fabric that resolves a Ref counts.' },
                { title: 'Versioned.', body: 'Layered docs, each with a clear job.' },
              ]}
            />
          </Section>

          {/* Core concepts */}
          <Section>
            <Stack>
              <Heading level={2}>Four concepts.</Heading>
              <GainGrid
                items={[
                  {
                    hue: 'steel',
                    title: 'Ref.',
                    body: 'A pointer to a resource: a KV slot, a DB row, a file path, an in-memory cell, a UI widget. It carries the address, not the value at the address. Every touch of the world goes through a Ref.',
                  },
                  {
                    hue: 'sage',
                    title: 'Interaction.',
                    body: 'Everything a program does with Refs and with other Interactions: read, write, compute, branch, iterate, compose. Programs are trees of Interactions. No side channels.',
                  },
                  {
                    hue: 'teal',
                    title: 'Fabric.',
                    body: 'An addressable space where Refs live. The machinery that resolves a Ref and carries out an Interaction against it. Postgres, filesystem, HTTP API, browser tab, an in-memory dict. Each is a Fabric.',
                  },
                  {
                    hue: 'plum',
                    title: 'Context.',
                    body: 'The union of Fabrics a program runs against. Contexts route each Ref to the Fabric that owns it. Swap the Context to move the same program between test, staging, and prod.',
                  },
                ]}
              />
            </Stack>
          </Section>

          {/* Layers */}
          <Section>
            <Stack>
              <Heading level={2}>How the spec is organized.</Heading>
              <Description>
                Six layers, read in order. Each layer earns its place by
                answering questions the layer above it opens.
              </Description>
              <NumberedList
                items={[
                  <><strong>abstract.</strong> The world today and why a new model.</>,
                  <><strong>foundations.</strong> Atom vs composition, mutation, cardinality.</>,
                  <><strong>atoms.</strong> The kinds made concrete: Ref, Query, Command, Action, Flow, Span, Form.</>,
                  <><strong>fabric.</strong> Address spaces, Context, resolution protocol.</>,
                  <><strong>domains.</strong> Optional add-ons: DSLs and Ref blueprints for specific worlds.</>,
                  <><strong>meta.</strong> Operations on trees themselves: transformations, equivalence.</>,
                ]}
              />
            </Stack>
          </Section>

          {/* Where to go next */}
          <Section>
            <Stack>
              <Heading level={2}>Where it lands in the stack.</Heading>
              <Description>
                The spec sits under Nu. Nu binds Refs to Python and ships the
                first set of Fabrics.
              </Description>
              <LinkGrid>
                <LinkCard href="/fabrics" name="Fabrics" hue="teal" tagline="The Refs, bound to real systems.">
                  Memory, disk, browser, network, cluster. Each one is a
                  concrete Fabric.
                </LinkCard>
                <LinkCard href="/about" name="About" hue="steel" tagline="Who wrote this and why.">
                  The thesis behind the spec, and where the project is going
                  next.
                </LinkCard>
              </LinkGrid>
            </Stack>
          </Section>

          {/* CTAs */}
          <Section>
            <CtaRow>
              <Button href={SPEC_REPO}>
                <GithubMark size={14} />
                <ButtonRepoLabel>Read the spec</ButtonRepoLabel>
              </Button>
              <Button href="/fabrics" variant="neutral">
                See the fabrics
              </Button>
              <Button href="/about" variant="neutral">
                About the project
              </Button>
              <Button href="/docs" variant="neutral">
                Read the docs
              </Button>
            </CtaRow>
          </Section>
        </Chapter>
      </Body>
    </Page>
  );
}
