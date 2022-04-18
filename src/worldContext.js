import { createContext, useState } from "react";


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
      props: {world: data}
    }
  }
const worldContext = createContext();

export function countriesProvider({children, world}){
    return(
        <worldContext.Provider value={world} > 
            {children}
        </worldContext.Provider>   
    )
}

export default worldContext;