import React from "react";
import illustration from "../assets/ilustration.png";
const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col  items-center h-[100vh]">
        <div className="w-2/3 p-4 text-center mt-[10rem] flex justify-center items-center flex-col bg-white rounded-lg shadow sm:p-8 main-color dark:border-gray-700">
          <img src={illustration} className=" w-[65%] h-[65%]" alt="Ilustration"/>
          <h5 className="mb-2 text-4xl font-bold text-gray-900 heading dark:text-white">
            Discover the Future of Property Listing on Blockchain !
          </h5>
          <p className="mb-3 home-para text-base text-gray-500 sm:text-lg mt-3 dark:text-gray-400">
          With blockchain technology, every property listed on our platform is verified, authenticated, and recorded on the immutable blockchain ledger.
          </p>
        <button type="button" class="py-2.5 mt-3 px-10 mr-2 mb-2 text-sm font-medium text-white border border-white rounded">Explore</button>

        </div>
        <div className="slider container border">
          <ul>
            <li>
              <img className="w-[100px] h-[100px]" src="https://xcavate.io/assets/USA_Developments_logo.png" alt="" />
            </li>
            <li>
              <img className="w-[100px] h-[100px]" src="https://xcavate.io/assets/USA_Developments_logo.png"  alt="" />
            </li>
            <li>
              <img className="w-[100px] h-[100px]" src="https://xcavate.io/assets/USA_Developments_logo.png"  alt="" />
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
