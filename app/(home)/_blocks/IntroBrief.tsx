import { Chapter, Section, SectionHead } from '@/components/page';
import { FABRICS } from '@/lib/fabrics';
import s from './IntroBrief.module.css';

const FABRIC_COUNT = FABRICS.length;

/**
 * IntroBrief — the "How Nu works" chapter. Names the vocabulary the reader
 * has already been feeling in Capabilities (Ref, Interaction, Fabric) and
 * frames it with the crack-and-payoff arc from IntroStory, compressed to
 * four paragraphs so it lands as orientation, not a lecture.
 */
export function IntroBrief() {
  return (
    <Chapter>
      <SectionHead
        title="How Nu works."
        lede={<>Two ideas do the work; fabrics plug them into anything.</>}
      />
      <Section>
        <div className={s.body}>
          <p className={s.para}>
            Real apps aren&apos;t three lines. <code>a</code> moves into a
            database. <code>b</code> comes from a form a user submits. The
            result renders in a browser. A background job reruns it when
            either input changes. Now what used to be <code>a + b</code> is
            an ORM, a request handler, a template, a websocket, a queue.
            Almost none of it is about <code>a + b</code> anymore &mdash;
            it&apos;s all interaction between substrates.
          </p>

          <p className={`${s.para} ${s.paraEm}`}>
            <strong>Nu makes interaction the primitive.</strong>
          </p>

          <dl className={s.vocab}>
            <div className={s.item}>
              <dt>Ref</dt>
              <dd>
                A name for a value, wherever it lives &mdash; a KV slot, a
                UI text block, an LLM endpoint, a remote object.
              </dd>
            </div>
            <div className={s.item}>
              <dt>Interaction</dt>
              <dd>
                What you do with a Ref: read, write, branch, iterate,
                compose.
              </dd>
            </div>
            <div className={s.item}>
              <dt>Fabric</dt>
              <dd>
                Binds Refs to a real backend. {FABRIC_COUNT} ship with Nu
                today.
              </dd>
            </div>
          </dl>

          <p className={s.para}>
            <em>Same primitive, different substrate.</em> One Ref for any
            resource, one Interaction for any op. Nu doesn&apos;t care what
            the backend is &mdash; setting a browser text block is the same
            interaction as setting a KV slot.
          </p>

          <p className={s.para}>
            Persistence, reactivity, atomicity, observability, distribution
            &mdash; <em>not features Nu has,</em> but what falls out of
            naming interactions instead of executing them.
          </p>
        </div>
      </Section>
    </Chapter>
  );
}
