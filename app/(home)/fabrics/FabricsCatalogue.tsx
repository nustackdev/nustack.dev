'use client';

import { useMemo, useState } from 'react';
import { Chapter, Section } from '@/components/page';
import { Description } from '@/components/text';
import { SearchInput } from '@/components/controls/SearchInput';
import { CatalogueGrid, CatalogueCard } from '@/components/chapters/CatalogueGrid';
import { FABRICS, fabricHref, type Fabric } from '@/lib/fabrics';

function matches(f: Fabric, q: string) {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    f.name.toLowerCase().includes(needle) ||
    f.tagline.toLowerCase().includes(needle) ||
    f.description.toLowerCase().includes(needle)
  );
}

export function FabricsCatalogue() {
  const [q, setQ] = useState('');

  const fabrics = useMemo(() => FABRICS.filter((f) => matches(f, q)), [q]);

  return (
    <Chapter>
      <Section>
        <SearchInput
          value={q}
          onChange={setQ}
          placeholder="Search fabrics..."
          ariaLabel="Search fabrics"
        />
      </Section>

      <Section>
        {fabrics.length > 0 ? (
          <CatalogueGrid>
            {fabrics.map((f) => (
              <CatalogueCard
                key={f.slug}
                href={fabricHref(f)}
                name={f.name}
                hue={f.hue}
                tagline={f.tagline}
                description={f.description}
              />
            ))}
          </CatalogueGrid>
        ) : (
          <Description>No fabrics match &ldquo;{q}&rdquo;.</Description>
        )}
      </Section>
    </Chapter>
  );
}
