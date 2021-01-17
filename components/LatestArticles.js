import Link from 'next/link';
import ArticleLink from './ArticleLink';

export default function LatestArticles({ articles }) {
  return (
    <div className="mb-12 mt-6">
      {/* <h2 className="mb-4 font-semibold uppercase text-sm tracking-wider text-pink-500 dark:text-indigo-500">
        Recently published
      </h2> */}
      {articles &&
        articles.length &&
        articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <a className="block group mb-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm font-semibold">
              <ArticleLink
                title={article.title}
                subtitle={article.subtitle}
                tags={article.tags}
              />
            </a>
          </Link>
        ))}
    </div>
  );
}
