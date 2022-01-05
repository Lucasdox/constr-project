import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/menu/Menu';

const Preços: NextPage = () => {
  return (
    <>
      <Head>Constru App</Head>
      <Menu />
      <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
          {/* content */}
          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <h2 className='text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
              Uma simples ferramenta de obras
            </h2>
            <p className="text-lg text-center lg:text-left mb-6">Uma ferramenta ótima para gerenciamento de suas obras em todo o país ok blz blz blz</p>
          </div>
          {/* image */}
          <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
            <Image src={"/images/civil.png"} alt='civil' height={600} width={600} className='bg-white'/>
          </div>
      </div>
    </>
  );
};

export default Preços;
