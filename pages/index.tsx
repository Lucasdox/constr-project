import type { NextPage } from 'next';
import Head from 'next/head';
import Menu from '../components/menu/Menu';

const Home: NextPage = () => {
  return (
    <>
      <Head>Constru App</Head>
      <Menu />
    </>
  );
};

export default Home;
