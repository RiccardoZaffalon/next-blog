import Link from './NavLink';

export default function Header({ className, title }) {
  return (
    <>
      <header className={`${className} pt-8`}>
        <nav>
          <ul>
            <li>
              <Link href="/" isFirst>
                Home
              </Link>
              <Link href="/about">About</Link>
              <Link href="/skills">Skills</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
