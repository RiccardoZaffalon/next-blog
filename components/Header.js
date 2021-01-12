import Link from './NavLink';
import DarkMode from './DarkMode';

export default function Header({ className }) {
  return (
    <header className={`${className} pt-8 flex justify-between`}>
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
      <DarkMode />
    </header>
  );
}
