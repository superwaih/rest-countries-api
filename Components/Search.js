import { useState, useRef } from "react"


const SearchBox = ({countries, region, setRegion, setSearch, search}) => {
    const unique = [...new Set(countries.map(item => item.region))]
    

    const handleSelect = (e) =>{
        e.preventDefault()
        setRegion(e.target.value);

    }
    
    return ( 

        
        <div className="p-4 flex dark:text-white  flex-col md:flex-row justify-between ">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="p-4 shadow dark:bg-DarkModeElement rounded placeholder-slate-400 placeholder:text-[14px] placeholder:dark:text-white w-full md:w-[20%] lg:w-[40%]  font-[13px]" type="search" placeholder="Search for a country.."  name="" id="" />
        <select onChange={(e) => setRegion(e.target.value)} placeholder="Filter by Region" className="mt-8 h-12 p-2 dark:bg-DarkModeElement rounded shadow w-[55%] lg:w-[30%]" name="All" id="">
        <option>All</option>
        {unique.map((e, i) => {
            return(
            
                <option key={i} >{e}</option>
            )
        })}
       
        </select>
        </div>
     );
}
 
export default SearchBox;