import { Page, Header, Body } from '@/components/page';
import { FabricsCatalogue } from './FabricsCatalogue';

export default function FabricsPage() {
  return (
    <Page>
      <Header
        title="Fabrics."
        lede={
          <>
            Each fabric gives your Nu app a new capability. State, UI,
            distributed execution and more.
          </>
        }
      />
      <Body>
        <FabricsCatalogue />
      </Body>
    </Page>
  );
}
