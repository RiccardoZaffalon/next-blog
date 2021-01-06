export default function Footer({ className }) {
  return (
    <footer className={className}>
      <p>
        If you want to know more, or just say “👋 Hi”, you are welcome to get in
        touch anytime at{' '}
        <a
          href="mailto:riccardo.zaffalon@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          riccardo.zaffalon@gmail.com
        </a>{' '}
        or find me on{' '}
        <a href="//twitter.com/rzaffa" rel="noreferrer" target="_blank">
          Twitter
        </a>
        ,{' '}
        <a
          href="//www.linkedin.com/in/riccardozaffalon"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        , and{' '}
        <a
          href="//github.com/RiccardoZaffalon"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .{' '}
      </p>
    </footer>
  );
}
