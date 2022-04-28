import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from "react-icons/fi";
import { WiSolarEclipse, WiMoonAltWaningGibbous3 } from "react-icons/wi";
import { Link } from 'next/link'

const Nav = () => {
    const{theme, setTheme} =useTheme()
    return ( 
     <nav className='flex bg-white dark:text-white dark:bg-DarkModeElement justify-between p-8 shadow'>
      {/* <Link href='/'> */}
      <div className="logo  font-bold">
        <h1>Where in the world</h1>
      </div>
      {/* </Link> */}

      <div className="btn-theme font-semibold cursor-pointer ">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='text-[12px] dark:text-white text-black font-bold'>
        {theme === 'dark' ? <WiMoonAltWaningGibbous3 size={28} /> : <WiSolarEclipse className='hover:animate-spin' size={28} /> }
      </button>
      </div>
    </nav>
     );
}
 
export default Nav;
