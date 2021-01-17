export default function Tag({ size = 'text-xs', children }) {
  return (
    <div
      className={`${size} font-semibold text-blue-600 rounded mr-2 bg-blue-100 p-1 uppercase tracking-wider leading-none`}
    >
      {children}
    </div>
  );
}
