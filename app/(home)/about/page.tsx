import {
  Page,
  Body,
  Header,
  Chapter,
  Section,
  SectionHead,
} from '@/components/page';
import { Description } from '@/components/text';
import { TryIt } from '@/components/chapters/TryIt';
import { LikeThisBlock } from '@/components/chapters/LikeThisBlock';

/**
 * /about — trust page. Personal, first-person, written by Gor.
 * This file is a SKELETON. Copy blocks are marked `{{gor: ...}}` and
 * are meant to be replaced with Gor's own writing. The structure,
 * cross-links, and CTAs are the deliverable; the prose is not.
 */
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

        {/* 4. Try it — install / demo / examples row. */}
        <TryIt />

        {/* 5. Like this — closing community CTA. */}
        <LikeThisBlock />
      </Body>
    </Page>
  );
}
