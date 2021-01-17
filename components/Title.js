import Tag from './Tag';

export default function Title({ title, tags, readingTime }) {
  return (
    <>
      {tags && (
        <div className="flex flex-1 justify-start items-start mb-3">
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
      )}
      <h1 className="font-bold tracking-tight text-4xl mb-8">
        {title}
        {readingTime && (
          <span className="text-sm font-normal tracking-wide text-gray-400">
            &nbsp; – {readingTime}
          </span>
        )}
      </h1>
    </>
  );
}
