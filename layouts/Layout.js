import HTMLHead from '../components/HTMLHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

export default function Layout({ children, h1, title, tags, readingTime }) {
  const container = 'w-full max-w-lg xl:max-w-2xl mx-auto px-4';

  return (
    <>
      <HTMLHead title={title} />
      <div className="text-gray-900 dark:text-gray-300 antialiased leading-relaxed min-h-screen flex flex-col">
        <Header title={title} className={container} />
        <main className={`${container} mt-6 md:mt-12`}>
          <Title title={h1 || title} tags={tags} readingTime={readingTime} />
          {children}
        </main>
        <div className="bg-gray-50 dark:bg-gray-900 pt-8 mt-auto">
          <Footer className={`${container}`} />
        </div>
      </div>
    </>
  );
}
