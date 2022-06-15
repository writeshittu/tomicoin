import React, { useState } from "react";
import {MenuAlt3Icon, XIcon } from '@heroicons/react/solid'
const NavBarItems=({title,classProps})=>(
  <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
)

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return <nav className="w-full flex md:justify-center justify-between p-4">
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
<img src='' alt='logo' />
    </div>
    <ul className="text-white md:flex hidden list-none flex-row justify-between items-center  flex-initial">
  {['Market','Exchange','Tutorial','Wallet'].map((item,index)=>( <NavBarItems title={item} key={index}/>))}
  <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Login</li>
    </ul>
    <div className="flex relative">
      {toggleMenu ? <XIcon color="#fff" />:<XIcon color="#fff"/>}
      { toggleMenu ? <MenuAlt3Icon fontSize={28} color='#ffffff' className='cursor-pointer' onClick={()=>setToggleMenu(true)}/> : <XIcon fontSize={28} color='#ffffff' className='text-white cursor-pointer'onClick={()=>setToggleMenu(false)}/> }
      {toggleMenu && <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in" >
        <li className="text-xl w-full my-2">
          <XIcon fontSize={18} color='#ffffff' className='text-[#fff]' onClick={()=>setToggleMenu(false)}/>
        </li>
        {['Market','Exchange','Tutorial','Wallet'].map((item,index)=>( <NavBarItems title={item} classProps='my-2 text-lg text-white'  key={index}/>))}
        </ul>}
    </div>
  </nav>;
};

export default NavigationBar;
