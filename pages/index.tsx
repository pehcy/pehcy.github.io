import { NextPage } from 'next';
import About from '../components/about';
import Header from '../components/header';
import Layout from '../components/layout';
import Hero from '../components/hero';

const Home : NextPage = () => {
  return (
    <Layout>
      <Header />
      <div className="mx-auto md:max-w-5xl">
        <Hero />
        <About />
      </div>
    </Layout>
  );
}

export default Home;