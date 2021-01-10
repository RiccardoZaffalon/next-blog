import HTMLHead from '../components/HTMLHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

export default function Layout({ children, h1, title }) {
  const container = 'w-full max-w-lg xl:max-w-2xl mx-auto px-4';

  return (
    <>
      <HTMLHead title={title} />
      <div className="antialiased text-lg leading-loose md:min-h-screen md:flex md:flex-col">
        <Header title={title} className={container} />
        <main className={`${container} mt-6 md:mt-12`}>
          <Title title={h1 || title} />
          {children}
        </main>
        <div className="mt-6 md:bg-blue-50 md:dark:bg-gray-900 md:pt-8 md:mt-auto">
          <Footer className={`${container}`} />
        </div>
      </div>
    </>
  );
}
