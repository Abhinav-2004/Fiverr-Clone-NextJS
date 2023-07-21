import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import FiverrLogo from './FiverrLogo';
import { useStateProvider } from '@/context/StateContext';
import {IoSearchOutline} from 'react-icons/io5';
import { useRouter } from 'next/router';

const Navbar = () => {
    const handleLogin=()=>{

      }
    const handleSignup=()=>{

      }
    const router=useRouter();
    const[isLoaded, setIsLoaded]=useState(true);
    const [isFixed, setIsFixed]= useState(true);
    const [searchData, setSearchData]=useState("");
    const [{showLoginModal, showSignupModal, userInfo, isSeller},dispatch]=useStateProvider();
    const links=[
        { linkName: "Fiverr Business", handler: "#", type: "link" },
        { linkName: "Explore", handler: "#", type: "link" },
        { linkName: "English", handler: "#", type: "link" },
        { linkName: "Become a Seller", handler: "#", type: "link" },
        { linkName: "Sign in", handler: handleLogin, type: "button" },
        { linkName: "Join", handler: handleSignup, type: "button2" },
      ];

    return <>
        {isLoaded && 
        <nav className={`w-full px-24 flex justify-between items-center py-6 top-0 z-30 transition-all duration-300 ${isFixed || userInfo? "fixed bg-white border-gray-200":"absolute bg-transparent border-transparent"}`}>
            <div>
                <Link href='/'>
                    <FiverrLogo fillColor={isFixed&&userInfo ? "#ffffff":"#404145"} />
                </Link>
            </div>
            <div
            className={`flex ${
              isFixed || userInfo ? "opacity-100" : "opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="w-[30rem] py-2.5 px-4 border"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              className="bg-gray-900 py-1.5 text-white w-16 flex justify-center items-center"
              onClick={() => {
                setSearchData("");
                router.push(`/search?q=${searchData}`);
              }}
            >
              <IoSearchOutline className="fill-white text-white h-6 w-6" />
            </button>
          </div>

        </nav>}
    </>
}
export default Navbar;


