import Link from 'next/link';

export default function LatestArticles({ articles }) {
  return (
    articles &&
    articles.length &&
    articles.map((article, index) => (
      <Link href={`/articles/${article.slug}`} key={index}>
        <a className="text-gray-600 dark:text-gray-300">{article.title}</a>
      </Link>
    ))
  );
}
