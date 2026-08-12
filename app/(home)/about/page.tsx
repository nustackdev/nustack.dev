import { BookOpen, FileText, Globe } from 'lucide-react';
import {
  Page,
  Body,
  Header,
  Chapter,
  Section,
  SectionHead,
} from '@/components/page';
import { Description } from '@/components/text';
import { LinkCard } from '@/components/controls/LinkCard';
import { LinkGrid } from '@/components/layout/LinkGrid';
import { GithubMark } from '@/components/marks/GithubMark';
import { DiscordMark } from '@/components/marks/DiscordMark';
import { XMark } from '@/components/marks/XMark';

/**
 * /about — trust page. Personal, first-person, written by Gor.
 * This file is a SKELETON. Copy blocks are marked `{{gor: ...}}` and
 * are meant to be replaced with Gor's own writing. The structure,
 * cross-links, and CTAs are the deliverable; the prose is not.
 */
const PERSONAL_SITE_URL: string | null = null;

export default function AboutPage() {
  return (
    <Page>
      <Header
        title="About."
        lede={
          <>
            {'{{gor: one-line lede. Who is behind Nu and why this page exists. Under 25 words.}}'}
          </>
        }
      />

      <Body>
        {/* 1. Who — one paragraph on Gor, in first person. */}
        <Chapter>
          <SectionHead
            title="Who."
            lede={
              <>
                {'{{gor: two-sentence intro. Name, background, where you write from. First person.}}'}
              </>
            }
          />
          <Section>
            <Description>
              {'{{gor: one paragraph. What you have shipped, what you care about, what you have been chewing on for years. Keep it plain. No CV bullets. This is the human paragraph.}}'}
            </Description>
          </Section>
        </Chapter>

        {/* 2. Why — the belief / thesis behind Nu. */}
        <Chapter>
          <SectionHead
            title="Why Nu."
            lede={
              <>
                {'{{gor: one-sentence thesis. The belief that made you start Nu.}}'}
              </>
            }
          />
          <Section>
            <Description>
              {'{{gor: paragraph 1. The pain you kept hitting. What kind of programs, what kind of ceremony, what kept feeling wrong.}}'}
            </Description>
            <Description>
              {'{{gor: paragraph 2. The shift. What clicked. Refs as the primitive, fabrics as the tissue, in one paragraph a stranger can follow.}}'}
            </Description>
            <Description>
              {'{{gor: paragraph 3. What you are betting on. One line. This is the belief the reader is buying into if they follow along.}}'}
            </Description>
          </Section>
        </Chapter>

        {/* 3. Where it is going — the arc, next 6-12 months, in the reader's terms. */}
        <Chapter>
          <SectionHead
            title="Where this is going."
            lede={
              <>
                {'{{gor: one-line framing. What the next stretch looks like from the outside.}}'}
              </>
            }
          />
          <Section>
            <Description>
              {'{{gor: paragraph on the arc. What ships next, what stays stable, what stays experimental. Concrete. No roadmap fog.}}'}
            </Description>
          </Section>
        </Chapter>

        {/* 4. Read more — lateral + deeper links out of this page. */}
        <Chapter>
          <SectionHead
            title="Go deeper."
            lede={<>Two ways to go deeper on the thinking.</>}
          />
          <Section>
            <LinkGrid>
              <LinkCard
                href="/spec"
                icon={<FileText size={14} />}
                title="The interaction model"
              >
                The language-agnostic spec Nu is one implementation of.
              </LinkCard>
              <LinkCard
                href="/blog"
                icon={<BookOpen size={14} />}
                title="Notes and updates"
              >
                Posts on what we shipped, what we broke, what is next.
              </LinkCard>
            </LinkGrid>
          </Section>
        </Chapter>

        {/* 5. Get in touch — CTA row. Primary is discord per sitemap. */}
        <Chapter>
          <SectionHead
            title="Get in touch."
            lede={
              <>
                The room is small and friendly. Say hi, ask a question, show
                what you built.
              </>
            }
          />
          <Section>
            <LinkGrid>
              <LinkCard
                href="https://discord.gg/tCa8YE7XVr"
                icon={<DiscordMark size={14} />}
                title="Join Discord"
              >
                Talk to Gor and the small circle building on Nu.
              </LinkCard>
              <LinkCard
                href="https://github.com/nustackdev"
                icon={<GithubMark size={14} />}
                title="See on GitHub"
              >
                Nu and the standalone libs live here. Star, watch, file issues.
              </LinkCard>
              <LinkCard
                href="https://twitter.com/nustackdev"
                icon={<XMark size={13} />}
                title="Follow on X"
              >
                Ship notes, small demos, and the occasional rant.
              </LinkCard>
              {PERSONAL_SITE_URL && (
                <LinkCard
                  href={PERSONAL_SITE_URL}
                  icon={<Globe size={14} />}
                  title="Gor's site"
                  external
                >
                  {'{{gor: one-line description of your personal site.}}'}
                </LinkCard>
              )}
            </LinkGrid>
          </Section>
        </Chapter>
      </Body>
    </Page>
  );
}
