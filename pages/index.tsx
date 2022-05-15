import { NextPage } from 'next';
import About from '../components/about';
import Header from '../components/header';
import Layout from '../components/layout';

const boxTranslateStyle: React.CSSProperties = {
  transform: 'translate(-27px, -243px)',
};

const Home : NextPage = () => {
  return (
    <Layout>
      <Header />
      <div className="mx-auto md:max-w-5xl">
        <div className="flex sm:flex-row flex-row">
          <h1 className="text-9xl font-bold">Hi!</h1>
          <h4 className="text-7xl font-semibold text-blue-600/100 sm:py-[8rem] px-4">I'm Chee Yung</h4>
        </div>
        <div>
          <p>I'm a network data engineer who interested in 
          Linux distros and open source projects.
          </p>
          <p>
            Sometimes I also write blogs to share
          </p>
        </div>
        <div id="square-box"
          className="box-border w-full h-[310px] 
            border-solid border-black border-2 left-[577px] bg-transparent"
          style={boxTranslateStyle}
        />
        <div className="animate-bounce p-2 w-10 h-10 rounded-full">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14l-7 7m0 0l-7 7m7 7V3" />
          </svg>
        </div>
        <About />
      </div>
    </Layout>
  );
}

export default Home;