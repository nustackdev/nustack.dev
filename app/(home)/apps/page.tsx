import { Page, Header, Body } from '@/components/page';
import { AppsCatalogue } from './AppsCatalogue';

export default function AppsPage() {
  return (
    <Page>
      <Header
        title="Apps."
        lede={
          <>
            Finished software built on the Nu stack. Each one uses the fabrics
            in production, ships on PyPI, and stands on its own.
          </>
        }
      />
      <Body>
        <AppsCatalogue />
      </Body>
    </Page>
  );
}
