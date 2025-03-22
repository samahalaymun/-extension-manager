import React, { useEffect, useState } from 'react'
import Logo from './Logo';

function Header() {
  const[darkMode,setDarkMode]=useState(localStorage.getItem("theme")==="dark")
   const url = import.meta.env.BASE_URL;

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
    }else{
     document.documentElement.classList.remove("dark");
     localStorage.setItem("theme", "light");
    }
  },[darkMode])
  
  return (
    <header className="py-2 px-3 flex justify-between items-center bg-neutral-0 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-sm ">
      <div>
        <Logo fill={darkMode ? "#EDEDED" : "#091540"} />
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-4 rounded-2xl cursor-pointer bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-300"
      >
        {!darkMode && <img src={url+"/assets/images/icon-moon.svg"} />}
        {darkMode && <img src={url+"/assets/images/icon-sun.svg"} />}
      </button>
    </header>
  );
}

export default Header
