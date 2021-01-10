import Head from 'next/head';

export default function HTMLHead({ title }) {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=[UA-45220537-1]"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","UA-45220537-1");`,
        }}
      />
      <title>
        Riccardo Zaffalon — Frontend web developer{title && ` | ${title}`}
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Riccardo Zaffalon, frontend web developer specialized in building fast and enjoyable web experiences, using modern web technologies and user-centered design"
      />
    </Head>
  );
}
