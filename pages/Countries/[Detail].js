import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useMenuContext} from '../../Components/AppContext'


export const getStaticPath = async () => {
    const res = await fetch('https://restcountries.com/v2/all');
    const data = await res.json();
    const paths = data.map((e) =>{
        return{
            params:{alpha3Code: e.alpha3Code.toString()}
        }
    })
    return{
        paths,
        fallback: true
    }
  }


  export const getStaticProps = async (context) => {
    const code = context.params.alpha3Code;
    const res = await fetch('https://restcountries.com/v2/all');
    const data = await res.json();
    const singleCountry = data.filter((data.alpha3Code === code))
  
    return{
      props: {country: singleCountry}
    }
  }






const countryDetail = ({country}) => {
    const menu = useMenuContext()
    console.log(menu)
    
    const router = useRouter();
    const {query: {countries, name}} = router;
    const props = {countries, name}
    const handleBack = () => {
        router.back()
    }

    return ( 
        <div>
            <div className="back-btn  p-8" >
                <button className='shadow dark:bg-DarkModeElement rounded text-[13p] p-2' onClick={handleBack}>Back</button>
            </div>

           <div className="country-details">
               <div className="country-flag">

               </div>
               <div className="country-detail">
                   {/* {<h1>{props.countries.name}</h1>} */}
                   <h2>{country.name}</h2>
                  
                   {/* {countries.filter(countries.alpha3Code ==)} */}
                   {/* <h1>{countryName}</h1> */}
                   {/* <div>
                   <p>Native Name: <span>{countryNative}</span></p>
                       <p>Popuation: <span>{countryPopulation}</span></p>
                       <p>Region: <span>{countryRegion}</span></p>
                       <p>Sub Region: <span>{countrysubRegion}</span></p>
                       <p>Capital: <span>{countryCapital}</span></p>
                       <p>Top Level Domain: <span>{countryLevel}</span></p>
                       <p>Currencies: <span>{countryCurrency}</span></p>
                       <p>Languages: <span>{countryPopulation}</span></p>
                   </div>
                   <div>
                       <p>Border Countries</p>
                       <div>

                       </div>
                   </div> */}
               </div> 
           </div>




        </div>
     );
}
 
export default countryDetail;