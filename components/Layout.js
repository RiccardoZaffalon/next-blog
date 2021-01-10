import HTMLHead from './HTMLHead';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';

export default function Layout({ children, h1, title }) {
  const container = 'max-w-lg mx-auto';

  return (
    <>
      <HTMLHead title={title} />
      <div className="antialiased min-h-screen">
        <Header title={title} className={container} />
        <main className={`${container} mt-6 md:mt-12 prose-lg`}>
          <Title title={h1 || title} />
          {children}
        </main>
        <Footer className={`${container} mt-6 md:mt-12 prose-lg`} />
      </div>
    </>
  );
}
