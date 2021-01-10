import Image from 'next/image';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <Layout title="About">
      <div className="md:flex">
        <p className="block flex-auto">
          Previously, I have lived in beautiful{' '}
          <strong>Vancouver, British Columbia</strong>, and worked as a
          freelancer for clients in Italy and Canada, providing digital
          solutions for small business owners and professionals.{' '}
        </p>

        <figure className="block flex-auto md:ml-8 mb-8">
          <Image src="/profile-dark.jpg" width="320" height="320" />
          <figcaption className="text-sm">That's me!</figcaption>
        </figure>
      </div>

      <p>
        Before that I paid my dues interning at a few web agencies, notably at{' '}
        <a href="//www.webtechnet.it" rel="noreferrer" target="_blank">
          webtechnet
        </a>{' '}
        where I started bringing modern technologies into some of their older
        projects in 2015.{' '}
      </p>
    </Layout>
  );
}
