import Link from 'next/link';

export default function LatestArticles({ articles }) {
  return (
    <div className="mb-12 mt-6">
      <h2 className="mb-6 font-semibold uppercase text-sm tracking-wider text-indigo-700">
        Recently published
      </h2>
      {articles &&
        articles.length &&
        articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <a className="block mb-10 text-gray-600 dark:text-gray-300 text-sm font-semibold">
              <h3>{article.title}</h3>
              {article.subtitle && <h4>{article.subtitle}</h4>}
            </a>
          </Link>
        ))}
    </div>
  );
}
