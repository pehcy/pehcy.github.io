import About from '../components/about';
import Header from '../components/header';
import Layout from '../components/layout';

const boxTranslateStyle: React.CSSProperties = {
  transform: 'translate(-27px, -243px)',
};

export default function Home() {
  return (
    <Layout>
      <Header />
      <div className='mx-auto md:max-w-5xl'>
        <div className='flex sm:flex-row flex-row'>
          <h1 className='text-9xl font-bold'>Hi!</h1>
          <h4 className='text-7xl font-semibold text-blue-600/100 sm:py-[8rem] px-4'>I'm Chee Yung</h4>
        </div>
        <div id='square-box'
          className='box-border w-full h-[310px] 
            border-solid border-black border-2 left-[577px]'
          style={boxTranslateStyle}
        />
      </div>
      <About />
    </Layout>
  );
}