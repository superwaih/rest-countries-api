import React from 'react'
import CountryCard from '../../Components/CountryCard'
import SearchBox from '../../Components/Search'

export default function AllCountries({region, search, setSearch, setRegion, countries}){
    function sendProps (){
        Router.push({
          pathname: '/countries',
          query:{
            countries
          }
        })
      }
    return (
        <div>

        <SearchBox region={region} search={search} setSearch={setSearch} setRegion={setRegion} countries={countries} />
        <div className="country-cards grid-cols-1 grid md:grid-cols-2 p-12 lg:grid-cols-3 xl:grid-cols-4  gap-20">

            {region == 'All' || region === undefined ? countries.filter((data) => {
                if (search == "") {
                    return data
                } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
                    return data
                }
            }).map((data) => {
                return (
                    
                    <CountryCard onClick={() => sendProps()} countryalpha3Code={data.alpha3Code} countryName={data.name} countryFlag={data.flag} countryPopulation={data.population} countryCapital={data.capital} />
                )
            }) : countries.filter(data => data.region === region).filter((data) => {
                if (search == "") {
                    return data
                } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
                    return data
                }
            }).map((data) => {
                return (
                    <CountryCard onClick={() => sendProps()} countryalpha3Code={data.alpha3Code} countryName={data.name} countryFlag={data.flag} countryPopulation={data.population} countryCapital={data.capital} />
                )
            })}

        </div>
    </div>
    )
  }






