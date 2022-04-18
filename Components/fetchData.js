export const getStaticProps = async () => {
    const res = await fetch('https://restcountries.com/v2/all');
  
    const data = await res.json();
  
    return{
      props: {countries: data}
    }
  }