import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogBody } from '../BlogBody';
import { Page, Header, Body, Chapter } from '@/components/page';
import { Row } from '@/components/grid/Row';
import { Cell } from '@/components/grid/Cell';
import { CellContent } from '@/components/grid/CellContent';
import { blogSource, getAllBlogPosts, getBlogPageImage } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { formatDate } from '@/lib/date';
import s from '../blog.module.css';

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slugs[0] }));
}

export async function generateMetadata(
  props: PageProps<'/blog/[slug]'>,
): Promise<Metadata> {
  const params = await props.params;
  const post = blogSource.getPage([params.slug]);
  if (!post) notFound();

  const image = getBlogPageImage(post).url;

  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      type: 'article',
      title: post.data.title,
      description: post.data.description,
      images: image,
      publishedTime: post.data.date,
      authors: [post.data.author],
      tags: post.data.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.description,
      images: image,
    },
  };
}

export default async function BlogPost(props: PageProps<'/blog/[slug]'>) {
  const params = await props.params;
  const post = blogSource.getPage([params.slug]);
  if (!post) notFound();

  const MDX = post.data.body;

  return (
    <Page>
      <Header
        meta={
          <span className={s.postMetaRow}>
            <Link href="/blog" className={s.backLink}>← Blog</Link>
            <span className={s.metaSep}>·</span>
            <time dateTime={post.data.date}>{formatDate(post.data.date)}</time>
            <span className={s.metaSep}>·</span>
            <span className={s.author}>by {post.data.author}</span>
          </span>
        }
        title={post.data.title}
        lede={post.data.description}
      />
      <Body>
        <Chapter>
          <Row cols={1}>
            <Cell>
              <CellContent pad="lg">
                <BlogBody>
                  <MDX components={getMDXComponents()} />
                </BlogBody>
              </CellContent>
            </Cell>
          </Row>
        </Chapter>
      </Body>
    </Page>
  );
}
