import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const container = 'max-w-lg mx-auto';

  return (
    <div className="bg-gray-100 text-gray-900 antialiased min-h-screen">
      <Header className={container} />
      <main className={`${container} mt-6 prose-lg`}>{children}</main>
      <Footer className={`${container} mt-6 prose-lg`} />
    </div>
  );
}
