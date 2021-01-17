import Link from './NavLink';
import DarkMode from './DarkMode';

export default function Header({ className }) {
  return (
    <header className={`${className} pt-8 flex justify-between`}>
      <nav>
        <ul className="-ml-4" role="menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
        </ul>
      </nav>
      <DarkMode />
    </header>
  );
}
