import { Page, Header, Body } from '@/components/page';
import { ToolsCatalogue } from './ToolsCatalogue';

export default function ToolsPage() {
  return (
    <Page>
      <Header
        title="Tools."
        lede={
          <>
            The standalone libraries Nu is built on. Each one solves its own
            problem, ships on PyPI, and can be used without Nu.
          </>
        }
      />
      <Body>
        <ToolsCatalogue />
      </Body>
    </Page>
  );
}
