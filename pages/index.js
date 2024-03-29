import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Router, { useRouter } from 'next/router';
import AllCountries from './country';

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all');

  const data = await res.json();

  if(!data){
    return{
      notFound: true,
      statusCode: 404
    }
  }

  return{
    props: {countries: data}
  }
}




export default function Home({countries, notFound}) {
  
  const router = useRouter()

  
  const [region, setRegion] = useState();
  const [search, setSearch] = useState("")
  const [mounted, setMounted] = useState(false);
  useEffect(()=> setMounted(true), [])
  if(!mounted){
    return null
  }
  return (
    <div >
      <Head>
        <title>Rest API countries</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      
      
    <AllCountries countries={countries} region={region} search={search} setRegion={setRegion} setSearch={setSearch} />
    </div>
  )
}
