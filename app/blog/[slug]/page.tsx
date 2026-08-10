import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogBody } from '../BlogBody';
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
    <article className={s.post}>
      <Link href="/blog" className={s.postBack}>← Blog</Link>
      <header className={s.postHead}>
        <time className={s.date} dateTime={post.data.date}>
          {formatDate(post.data.date)}
        </time>
        <h1 className={s.postTitle}>{post.data.title}</h1>
        {post.data.description ? (
          <p className={s.postDesc}>{post.data.description}</p>
        ) : null}
        <p className={s.postMeta}>by {post.data.author}</p>
      </header>
      <BlogBody>
        <MDX components={getMDXComponents()} />
      </BlogBody>
    </article>
  );
}
