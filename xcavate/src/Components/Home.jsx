import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/ilustration.png";
const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col  items-center h-[100vh]">
        <div className="w-2/3 p-4 text-center mt-[10rem] flex justify-center items-center flex-col rounded-lg sm:p-8 ">
          <img src={illustration} className=" w-[65%] h-[65%]" alt="Ilustration"/>
          <h5 className="mb-2 text-4xl font-bold text-gray-900 heading dark:text-white">
          Welcome TO THE LARGEST GLOBAL WEB3 REAL ESTATE INVESTOR COMMUNITY 
          </h5>
          <p className="mb-3 home-para text-base text-gray-800 sm:text-lg mt-3 dark:text-gray-400">
          Buy, sell and trade real world rental real estate through NFTs in a trustless fully dentralized way.
          </p>
        <button type="button" class="py-2.5 mt-3 px-10 mr-2 mb-2 text-sm font-medium text-black border border-black rounded"> <Link to="/market-place">Explore</Link> </button>

        </div>
        <div className="slider container flex justify-center items-center">
          <ul >
            <li>
              <img className="w-[200px] h-[200px]" src="https://xcavate.io/assets/USA_Developments_logo.png" alt="" />
            </li>
            <li>
              <img className="w-[200px] h-[200px] mt-2" src="https://xcavate.io/assets/chase-new-homes-logo.png"  alt="" />
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
