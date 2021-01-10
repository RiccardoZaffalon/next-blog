import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Hi, I'm Riccardo</h1>
      <p>
        I'm a frontend developer working in Venice, Italy. I specialize in
        building fast and enjoyable web experiences, using modern technologies
        and user-centered design.
      </p>

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
    </Layout>
  );
}
