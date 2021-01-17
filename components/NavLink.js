import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children }) {
  const router = useRouter();

  return (
    <li className="inline-block m-0" role="menuitem">
      <Link href={href}>
        <a
          className={`inline-block font-semibold uppercase text-xs tracking-wider px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 ${
            router.pathname === href
              ? ' text-indigo-700 dark:text-gray-100'
              : ' text-gray-400 hover:text-gray-700 dark:text-gray-500'
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
