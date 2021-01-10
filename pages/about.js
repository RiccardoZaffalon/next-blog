import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="About">
      <h1>About</h1>
      <p>
        Previously, I have lived in beautiful{' '}
        <strong>Vancouver, British Columbia</strong>, and worked as a freelancer
        for clients in Italy and Canada, providing digital solutions for small
        business owners and professionals.{' '}
      </p>
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
