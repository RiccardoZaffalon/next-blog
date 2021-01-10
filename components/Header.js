import Head from 'next/head';
import Link from './ActiveLink';

export default function Header({ className, title }) {
  return (
    <>
      <Head>
        <title>Riccardo Zaffalon{title && ` | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={className}>
        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a className="font-semibold text-indigo-500">About</a>
              </Link>
              <Link href="/skills">
                <a className="font-semibold text-indigo-500">Skills</a>
              </Link>
              <Link href="/">
                <a className="font-semibold text-indigo-500">Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
