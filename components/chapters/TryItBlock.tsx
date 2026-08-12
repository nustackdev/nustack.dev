import type { ReactNode } from 'react';
import { Chapter, Section, SectionHead } from '@/components/page';
import { CommandLine } from '@/components/media/CommandLine';
import type { SectionHue } from '@/components/page/Section';
import s from './TryItBlock.module.css';

export interface TryItBlockProps {
  /** Chapter heading. Default: "Try it." */
  heading?: ReactNode;
  /** One-line copy under the heading. */
  lede?: ReactNode;
  /** Shell command(s) — passed straight to CommandLine. */
  command: string | string[];
  /** Trailing actions row — typically a <CtaRow> of <Button>s. Sits inline
   *  to the right of the command on wide screens, wraps under on narrow. */
  actions?: ReactNode;
  /** Section hue scope. Optional — omit to inherit the page hue. */
  hue?: SectionHue;
  /** Stable id for anchor links (e.g. "install"). */
  id?: string;
  className?: string;
}

/**
 * TryItBlock — the "Try it" chapter that ends every fabric, tool, and
 * use-case page. One canonical anatomy, matching /fabrics/ui:
 *
 *   [ heading + lede ]
 *   [ command  |  actions ]     ← always side by side on wide, wrap on narrow
 *
 * Any "keep going" links belong in a separate chapter ABOVE this one,
 * using <LinkGrid>, not inside TryItBlock.
 */
export function TryItBlock({
  heading = 'Try it.',
  lede,
  command,
  actions,
  hue,
  id,
  className,
}: TryItBlockProps) {
  return (
    <Chapter className={className}>
      <SectionHead title={heading} lede={lede} />
      <Section hue={hue}>
        <div id={id} className={s.tryRow}>
          <div className={s.tryCmd}>
            <CommandLine command={command} />
          </div>
          {actions}
        </div>
      </Section>
    </Chapter>
  );
}
