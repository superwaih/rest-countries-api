import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMenuContext } from '../../Components/AppContext'
import { Link } from 'next/link'
import { BiArrowBack, BiListUl } from 'react-icons/bi';

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(county => {
    return {
      params: { code: county.alpha3Code.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const count = context.params.code;
  const borderArr = []
  const res = await fetch('https://restcountries.com/v2/all');
  const data = await res.json();
 
  const singleCountry = data.filter(single => single.alpha3Code === count);



  const borderCountriesArr = singleCountry.map((e) => {
    borderArr.push(e.borders)
  })
  return {
    props: { country: singleCountry, world: data, border: borderArr}

  }
}






const countryDetail = ({ country, world, border }) => {
  
  const borderCountry = [];

  if(border.length > 0){
    for(let i = 0; i < border[0].length; i++){
      world.filter((d) => {
        if(border[0][i] === d.alpha3Code){
        return  d
        }
      }).map((d) => {
        return  borderCountry.push(d)
      })
    }
  }

   

 





  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  return (
    <div>
      <div className="back-btn  p-6" >
        <button className='shadow flex items-center dark:bg-DarkModeElement rounded text-[13px] p-3' onClick={handleBack}>
          <BiArrowBack />
          Back</button>
      </div>

      {country.map((data) => {
        return (
          <div className='country-detail flex flex-col lg:flex-row  space-y-5 p-6'>
            <div className="country-flag md:w-4/5 md:h-80 lg:w-3/5 ">
              <img src={data.flag} alt="country flag" />
            </div>

            <div className="country-stats lg:pl-20 space-y-5 2/5">
              <h1 className='font-bold text-xl'>{data.name}</h1>
              <div className="statsBox flex flex-col md:flex-row ">
                <div className="native space-y-2 text-[14px]">
                  <p>Native Name: <span>{data.nativeName}</span></p>
                  <p className='font-semibold' >Population: <span className='dark:text-gray-300 font-light'>{data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                  <p className='font-semibold' >Region: <span className='dark:text-gray-300 font-light'>{data.region}</span></p>
                  <p className='font-semibold' >Sub Region: <span className='dark:text-gray-300 font-light' >{data.subregion}</span></p>
                  <p className='font-semibold' >Capital: <span className='dark:text-gray-300 font-light' >{data.capital}</span></p>
                </div>

                <div className="otherstats md:pl-5 text-[14px]">
                  <p className='font-semibold'>Top Level Domain: <span className='dark:text-gray-300 font-light' >{data.capital}</span></p>
                  <p className='font-semibold' >Currencies: <span className='dark:text-gray-300 font-light' >{data.currencies[0].name}</span></p>
                  <p className='font-semibold'>Languages:
                    {data.languages.map((lang, i) => {
                      return (
                        <span className='dark:text-gray-300 font-extralight' key={i} > {lang.name} </span>
                      )
                    })}
                  </p>
                </div>
              </div>

              <div className="border-countries text-[13px] flex space-x-2 justify-between">
                <h3 className='font-semibold' >Border Countries: </h3>
                <div className='grid-cols-2 md:grid-cols-4 grid'>
                {borderCountry.map((e) => { 
                  return(
                    <a href={'/country/'+ e.alpha3Code} className='p-2 hover:opacity-40 cursor-pointer ' key={e.alpha3Code} >
                        <span className='rounded shadow dark:bg-DarkModeElement p-2 '>{e.name.length > 15 ? e.name.slice(0,8)  : e.name  }</span>
                  </a>
                   )
              })}    
                </div>
              </div>
            </div>
          </div>
        )
      })}


      



    </div>
  );
}

export default countryDetail;