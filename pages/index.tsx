import { NextPage } from 'next';
import About from '../components/about';
import Header from '../components/header';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { useState } from 'react';

const Home : NextPage = () => {
  const [y, setY] = useState<number>(0);
  
  return (
    <Layout>
      <Header />
      <div className="mx-auto md:max-w-5xl">
        <Hero />
      </div>
      <div className="mx-auto md:max-w-full flex">
        <nav className="w-auto h-full sticky top-[15.5rem]">
          <ul className="overflow-hidden font-semibold flex flex-col items-center">
            <span className="pb-2 pr-5">Experience</span>
            <span className="pb-2 pr-5">Education</span>
            <span className="pb-2 pr-5">Skills</span>
          </ul>
        </nav>
        <About />
      </div>
    </Layout>
  );
}

export default Home;