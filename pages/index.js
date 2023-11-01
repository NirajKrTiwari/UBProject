
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import css from "../styles/Home.module.css";
import Services from "../components/Services";
import {client} from "../lib/client";
import Menu from "../components/Menu";
import About from "../components/About.jsx";
import Marquee from "../components/Marquee";
import Head from "next/head";
import favicon from "./favicon.ico"
import Category from "../components/Category";
import NextTopLoader from 'nextjs-toploader';

export default function Home({ub}) {
  return (
    <>
    <NextTopLoader />
      <Layout>
        
      <div className={css.container}>
        <Head>
          <title>Under Belly</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" type="image/x-icon" href={favicon.src} />
        </Head>
        {/* body */}
        <main>
          <Hero/>
          <Category/>
          {/* <Marquee ub={ub}/> */}
          <Services/>
          {/* <Menu ub={ub} /> */}
          
          <About/>
        </main>
      </div>
      </Layout>
      </>
  );
}

export const getServerSideProps =async()=>
{
  const query='*[_type == "underbelly"]'
  const ub =await client.fetch(query)
  return{
    props:{ub}
  }
}