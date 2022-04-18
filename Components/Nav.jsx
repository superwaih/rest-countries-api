import { useTheme } from 'next-themes'

const Nav = () => {
    const{theme, setTheme} =useTheme()
    return ( 
     <nav className='flex bg-white dark:text-white dark:bg-DarkModeElement justify-between p-8 shadow'>
      <div className="logo  font-bold">
        <h1>Where in the world</h1>
      </div>

      <div className="btn-theme font-semibold cursor-pointer ">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='text-[12px] dark:text-white text-black font-bold'>Dark Mode{theme}</button>
      </div>
    </nav>
     );
}
 
export default Nav;
