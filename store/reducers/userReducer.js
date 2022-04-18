import axios from 'axios';

export const fetchCountries = () =>{
    return(disptach) =>{
        axios.get("https://restcountries.com/v2/all")
        .then(response =>{
            const countries = response.json()
        })
        .catch(error => {
            const errorMsg = error.message
        })
    }
}