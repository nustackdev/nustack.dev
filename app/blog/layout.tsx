import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { FloatingNav } from '@/components/site/FloatingNav';
import { SiteFooter } from '@/components/site/SiteFooter';
import s from './blog-shell.module.css';

export default function Layout({ children }: LayoutProps<'/blog'>) {
  return (
    <div className="dark">
      <HomeLayout {...baseOptions()} slots={{ header: FloatingNav }}>
        <div className={s.shell}>
          <div className={s.content}>{children}</div>
          <SiteFooter />
        </div>
      </HomeLayout>
    </div>
  );
}
