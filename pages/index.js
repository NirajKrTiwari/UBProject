import Head from "next/head";
// import Hero from "../components/Hero";
// import Layout from "../components/Layout";
//import css from "../styles/Home.module.css";
//import Services from "../components/Services";
//import {client} from "../lib/client";
//import Menu from "../components/Menu";


export default function Home({ub}) {
  return (
      <div className="">
        <Head>
          <title>Under Belly</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/assets/logo.jpg" />
        </Head>
        {/* body */}
        <main>
<h1>Hiiii</h1>
        </main>
      </div>
      
  );
}

// export const getServerSideProps =async()=>
// {
//   const query='*[_type == "underbelly"]'
//   const ub =await client.fetch(query)
//   return{
//     props:{ub}
//   }
// }