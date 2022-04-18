import Link from 'next/link'

const CountryCard = ({countryFlag, countryalpha3Code, countryCapital, countryName, countryPopulation, countryRegion}) => {
    return ( 
        <Link href={'/country/'+ countryalpha3Code}>
        <div key={countryalpha3Code} className="card items-center h-80 max-w-xs w-64   rounded transform hover:scale-105 duration-500 bg:white shadow dark:bg-DarkModeElement">
            <div className="card-img w-full  h-1/2">
                <img className="rounded-t-md w-full h-full object-cover" src={countryFlag} alt="" />
            </div>
            <div className="country-info p-4 text-[13px]">
                <h2 className='mt-2 mb-2 text-center text-[14px] font-bold' >{countryName}</h2>
                <p className='font-normal' >Population : <span className='dark:text-gray-300 font-extralight' >{countryPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                <p className='font-normal'>Region : <span className='dark:text-gray-300 font-extralight' >{countryRegion}</span></p>
                <p className='font-norma'>Capital: <span className='dark:text-gray-300 font-extralight' >{countryCapital}</span></p>
            </div>

        </div >
        </Link>
     );
}
 
export default CountryCard;