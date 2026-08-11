import { Page, Header, Body } from '@/components/site/page';
import { FabricsCatalogue } from './FabricsCatalogue';

export default function FabricsPage() {
  return (
    <Page>
      <Header
        title="Fabrics."
        lede={
          <>
            Fabrics are the tissue between Refs and the real world. Core fabrics
            ship with Nu; integrations bind Nu to specific systems.
          </>
        }
      />
      <Body>
        <FabricsCatalogue />
      </Body>
    </Page>
  );
}
