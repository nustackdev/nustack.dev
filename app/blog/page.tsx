import Link from 'next/link';
import type { Metadata } from 'next';
import { Page, Header, Body, Chapter } from '@/components/page';
import { Row } from '@/components/grid/Row';
import { Cell } from '@/components/grid/Cell';
import { CellContent } from '@/components/grid/CellContent';
import { Heading, Lede } from '@/components/text';
import { MonoKicker } from '@/components/meta/MonoKicker';
import { getAllBlogPosts } from '@/lib/source';
import { appName } from '@/lib/shared';
import { formatDate } from '@/lib/date';
import { pageOG, ogPageImage } from '@/lib/og';
import s from './blog.module.css';

const TITLE = `Blog — ${appName}`;
const DESCRIPTION = 'Announcements, notes, and thinking from the nustack team.';

export const metadata: Metadata = {
  ...pageOG({
    title: TITLE,
    description: DESCRIPTION,
    image: ogPageImage('blog-index'),
    path: '/blog',
  }),
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/blog/rss.xml' },
  },
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <Page>
      <Header title="Blog" lede={DESCRIPTION} />
      <Body>
        {posts.map((post) => (
          <Link key={post.url} href={post.url} className={s.postLink}>
            <Chapter className={s.postCard}>
              <Row cols={1}>
                <Cell>
                  <CellContent pad="lg">
                    <MonoKicker as="p" size="xs" tracking="wider">
                      {formatDate(post.data.date)} · by {post.data.author}
                    </MonoKicker>
                    <Heading level={2}>{post.data.title}</Heading>
                    {post.data.description ? (
                      <Lede>{post.data.description}</Lede>
                    ) : null}
                  </CellContent>
                </Cell>
              </Row>
            </Chapter>
          </Link>
        ))}
      </Body>
    </Page>
  );
}
