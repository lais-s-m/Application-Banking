import Head from 'next/head';

import GlobalStyle, { HomeContainer } from '../styles/GlobalStyle';

import Header from '../src/components/Header';
import Form from '../src/components/Form';
import Nav from '../src/components/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>NuKenzie - Laís Martins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <HomeContainer>
        <Form />
        <Nav />
      </HomeContainer>
    </>  
  )
}
