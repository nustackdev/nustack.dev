import { MonoKicker } from './MonoKicker';
import { SilverWovenName, type SilverWovenHue } from './SilverWovenName';

export type PageBadgeKind = 'fabric' | 'tool' | 'use case' | 'app' | 'spec';

interface Props {
  kind: PageBadgeKind;
  name: string;
  hue: SilverWovenHue;
  className?: string;
}

/** PageBadge — the header meta slot for every detail page.
 *  Renders a lowercase mono kicker ("fabric · ", "tool · ", …) followed by
 *  the entity name in a SilverWovenName with the given hue.
 *
 *  Pass as the `meta` prop of <Header>:
 *    <Header meta={<PageBadge kind="fabric" name="nu.ui" hue="teal" />} … />
 */
export function PageBadge({ kind, name, hue, className }: Props) {
  return (
    <MonoKicker as="span" size="xs" tracking="wider" className={className}>
      {kind} ·{' '}
      <SilverWovenName as="span" hue={hue}>
        {name}
      </SilverWovenName>
    </MonoKicker>
  );
}
