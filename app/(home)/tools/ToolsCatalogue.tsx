import { Chapter, Section } from '@/components/page';
import { CatalogueGrid, CatalogueCard } from '@/components/chapters/CatalogueGrid';
import { Description } from '@/components/text';
import { TOOLS, toolHref } from '@/lib/tools';

export function ToolsCatalogue() {
  return (
    <Chapter>
      <Section>
        <Description>
          Each ships on PyPI and works without Nu.
        </Description>
      </Section>

      <Section>
        <CatalogueGrid>
          {TOOLS.map((t) => (
            <CatalogueCard
              key={t.slug}
              href={toolHref(t)}
              name={t.name}
              hue={t.hue}
              tagline={t.tagline}
              description={t.description}
            />
          ))}
        </CatalogueGrid>
      </Section>
    </Chapter>
  );
}
