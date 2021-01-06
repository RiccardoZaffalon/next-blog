import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Riccardo Zaffalon | Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Skills</h1>
      <p>
        I am proficient in <u>HTML</u>, <u>CSS</u>, and their most popular
        preprocessors (
        <em>
          e.g. <u>Pug</u>, <u>SCSS</u>
        </em>
        ), <u>JavaScript</u> (
        <em>
          including <u>ES6</u> and <u>ESNext</u>
        </em>
        ), <u>Salesforce Commerce Cloud</u> (
        <em>Certified B2C Commerce Developer</em>), and <u>git</u>.
      </p>
    </Layout>
  );
}
