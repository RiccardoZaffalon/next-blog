import { getAllPosts } from '../lib/api';
import Layout from '../layouts/Layout';
import LatestArticles from '../components/LatestArticles';

export default function Home({ articles }) {
  return (
    <Layout h1="Hi, I'm Riccardo">
      <p>
        I'm a frontend developer working in Venice, Italy. I specialize in
        building fast and enjoyable web experiences, using modern technologies
        and user-centered design.
      </p>

      <LatestArticles articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title', 'subtitle']);

  console.log(posts);

  return {
    props: {
      articles: posts.map((post) => ({
        slug: post.slug,
        title: post.title || '',
        subtitle: post.subtitle || '',
      })),
    },
  };
}
