import Head from "next/head";
import Container from "../components/Container";

const Index = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Index</h1>
    </Container>
  );
};

Index.getInitialProps =(ctx)=>{
    
}

export default Index;
