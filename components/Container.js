import Head from 'next/head';
import Navigation from "./navigations";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Next.js Project</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>
      </Head>
      <Navigation />
      <div className="Container p-4">{props.children}</div>
    </div>
  );
};

export default Container;
