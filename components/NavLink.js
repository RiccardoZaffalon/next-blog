import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children, isFirst }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`inline-block font-semibold uppercase text-xs tracking-wider px-4 py-2 rounded bg-blue-100 dark:bg-gray-900 hover:text-blue-700 dark:hover:bg-gray-800 ${
          router.pathname === href
            ? ' text-blue-700 dark:text-gray-100'
            : ' text-blue-400 dark:text-gray-500'
        }${isFirst ? ' ml-0' : ' ml-4'}`}
      >
        {children}
      </a>
    </Link>
  );
}
