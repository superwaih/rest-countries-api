import { createContext, useContext } from 'react'

// Create Context object.
const MenuContext = createContext()

// Export Provider.
export function MenuProvider(props) {
	const {value, children} = props
	
	return (
	   <MenuContext.Provider value={value}>
		{children}
	   </MenuContext.Provider>
	)
}

// Export useContext Hook.
export function useMenuContext() {
	return useContext(MenuContext);
}

































// import { createContext, useContext } from 'react';

// const AppContext = createContext();
// export const getStaticProps = async () => {
//     const res = await fetch('https://restcountries.com/v2/all');
  
//     const data = await res.json();
  
//     return{
//       props: {countries: data}
//     }
//   }

// export function AppWrapper({ children }) {
//   let sharedState = {countries}

//   return (
//     <AppContext.Provider value={sharedState}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }