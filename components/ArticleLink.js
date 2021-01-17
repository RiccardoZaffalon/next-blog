import Tag from './Tag';

export default function ArticleLink({ title, subtitle, tags }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg group-hover:text-pink-500">{title}</h3>
        {tags && (
          <div className="flex flex-1 justify-end items-center">
            {tags.map((tag, i) => (
              <Tag key={i} size="text-2xs">
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
      {subtitle && (
        <h4 className="text-gray-500 dark:text-gray-400 mt-4">{subtitle}</h4>
      )}
    </>
  );
}
