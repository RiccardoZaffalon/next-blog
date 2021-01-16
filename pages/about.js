import Image from 'next/image';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <Layout title="About">
      <p>
        I am currently at{' '}
        <a href="//www.alpenite.com" rel="noreferrer" target="_blank">
          alpenite
        </a>
        , where I work as a{' '}
        <strong>Senior Consultant on Salesforce Commerce Cloud</strong>{' '}
        projects. Here I have had the opportunity to lead the frontend
        development of ecommerce websites for several fashion brands, including{' '}
        <a href="//www.liujo.com" rel="noreferrer" target="_blank">
          Liu Jo
        </a>
        ,{' '}
        <a href="//www.pinko.com" rel="noreferrer" target="_blank">
          Pinko
        </a>
        ,{' '}
        <a href="//www.tezenis.com" rel="noreferrer" target="_blank">
          Tezenis
        </a>
        ,{' '}
        <a href="//www.intimissimi.com" rel="noreferrer" target="_blank">
          Intimissimi
        </a>
        , and more.{' '}
      </p>
      <p>
        Besides these projects, my main focuses are introducing new helpful
        technologies to streamline my team’s work, and{' '}
        <strong>mentor junior colleagues</strong>, to help them grow and bring
        increasingly more value to the company.{' '}
      </p>
      <div className="md:flex">
        <p className="block flex-auto">
          Previously, I have lived in beautiful{' '}
          <strong>Vancouver, British Columbia</strong>, and worked as a
          freelancer for clients in Italy and Canada, providing digital
          solutions for small business owners and professionals.{' '}
        </p>

        <figure className="block flex-auto md:ml-8 min-w-200 mb-8">
          <Image
            src="/profile-dark.jpg"
            alt="Riccardo Zaffalon, profile picture"
            width="200"
            height="200"
            priority
            layout="responsive"
          />
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
