import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {MdBedroomChild} from "react-icons/md";
import {BsCircle} from "react-icons/bs"
const AssetCard = () => {
  return (
    <>
      <div className="max-w-sm mt-2 bg-white relative  asset-card  rounded-lg shadow">
        <a href="#">
          <img
            className="rounded-t-lg w-[100%]"
            
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXGw6TIMBUlW4dEvanvpiw03ui3QeCxlX7A&usqp=CAU"
            alt=""
          />
        </a>
        <div className="p-3 absolute top-0">
        <span className="text-orange-500 border  text-xs font-medium mr-2 px-2.5 py-0.5 rounded backdrop-blur-3xl">Verified</span>
        </div>
        <div className="p-5">
          <div className="flex justify-between">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Briks and blocks
            </h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-blue-400 dark:text-blue-400">
              $3000
            </h5>
          </div>
          <div className="flex ">
            <HiOutlineLocationMarker className="text-blue-400" size={22} />
            <h5 className=" mx-2 text-1xl tracking-tight text-gray-900 dark:text-white">
              Boroughs of New york city
            </h5>
          </div>
         <div className="mt-3 text-white flex">
            <MdBedroomChild size={25}/>
            <MdBedroomChild size={25}/>
            <MdBedroomChild size={25}/>
         </div>
          <div className="mt-5 flex justify-between">
          <button
            
            className="inline-flex mint-now-button  items-center px-3 py-2 text-sm text-center text-white rounded-lg "
          >
            Mint Now
           
          </button>
          <button
            
            className="inline-flex view-details-button border items-center px-3 py-2 text-sm text-center text-white rounded-lg"
          >
            View Details
           
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetCard;
