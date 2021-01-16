import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from '../../layouts/Layout';
import MarkdownToHTML from '../../components/MarkdownToHTML';
import { getPostBySlug, getAllPosts } from '../../lib/api';

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post.title}>
      <div className="article prose dark:prose-light">
        <MarkdownToHTML>{post.content}</MarkdownToHTML>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const { content } = post;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
