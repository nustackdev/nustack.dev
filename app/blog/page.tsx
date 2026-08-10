import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/source';
import { appName } from '@/lib/shared';
import { formatDate } from '@/lib/date';
import s from './blog.module.css';

const TITLE = `Blog — ${appName}`;
const DESCRIPTION = 'Announcements, notes, and thinking from the nustack team.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
  alternates: {
    types: { 'application/rss+xml': '/blog/rss.xml' },
  },
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <main className={s.wrap}>
      <header className={s.head}>
        <h1 className={s.title}>Blog</h1>
        <p className={s.subtitle}>{DESCRIPTION}</p>
      </header>

      <ul className={s.list}>
        {posts.map((post) => (
          <li key={post.url} className={s.item}>
            <Link href={post.url} className={s.itemLink}>
              <time className={s.date} dateTime={post.data.date}>
                {formatDate(post.data.date)}
              </time>
              <h2 className={s.itemTitle}>{post.data.title}</h2>
              {post.data.description ? (
                <p className={s.itemDesc}>{post.data.description}</p>
              ) : null}
              <p className={s.itemMeta}>by {post.data.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
