import { FabricsCatalogue } from './FabricsCatalogue';
import { SamplePage } from '@/components/site/page';

export default function FabricsPage() {
  return (
    <SamplePage
      title="Fabrics."
      lede={
        <>
          Fabrics are the tissue between Refs and the real world. Core fabrics
          ship with Nu; integrations bind Nu to specific systems.
        </>
      }
    >
      <FabricsCatalogue />
    </SamplePage>
  );
}
