import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {MdBedroomChild} from "react-icons/md";
import {BsCircle} from "react-icons/bs"
const EstateAssets = ({item}) => {
  return (
    <>
      <div className="max-w-sm mt-2 bg-white relative  asset-card  rounded-lg shadow">
        <a href="#">
          <img
            className="rounded-t-lg w-[100%]"
            
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXGw6TIMBUlW4dEvanvpiw03ui3QeCxlX7A&usqp=CAU"
            alt="hello"
          />
        </a>
        <div className="p-3 absolute top-0">
        {item.verificationStatus=== "listed" &&
        <span className="text-orange-500 border  text-xs font-medium mr-2 px-2.5 py-0.5 rounded backdrop-blur-3xl">Listed</span>}
        {item.verificationStatus=== "verified" &&
        <span className="text-blue-500 border  text-xs font-medium mr-2 px-2.5 py-0.5 rounded backdrop-blur-3xl">verified</span>}
        {item.verificationStatus=== "not verified" &&
        <span className="text-red-500 border  text-xs font-medium mr-2 px-2.5 py-0.5 rounded backdrop-blur-3xl">not verified</span>}
        
        </div>
        <div className="p-5">
          <div className="flex justify-between">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
             {item.title}
            </h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-blue-400 dark:text-blue-400">
              $ {item.listingPrice}
            </h5>
          </div>
          <h3 className="text-white mt-1 mb-1">{item.description}</h3>
          <div className="flex ">
            <a className="flex" href={item.googleMapCode}>
            <HiOutlineLocationMarker className="text-blue-400" size={22} />
            <h5 className=" mx-2 text-1xl tracking-tight text-gray-900 dark:text-white">
              {item.address}
            </h5>
            </a>
          </div>
          
         <div className="mt-3 text-white flex">
            <MdBedroomChild size={25}/>
            <MdBedroomChild size={25}/>
            <MdBedroomChild size={25}/>
         </div>
          <div className="mt-5 flex justify-between">
            {item.verificationStatus=== "not verified" && <button
            className="inline-flex mint-now-button  items-center px-3 py-2 text-sm text-center text-white rounded-lg "
          >
            verify
          </button>}
          {item.verificationStatus=== "verified" && <button
            className="inline-flex mint-now-button  items-center px-3 py-2 text-sm text-center text-white rounded-lg "
          >
            List
          </button>}
          {item.verificationStatus=== "listed" && <button
            className="inline-flex mint-now-button  items-center px-3 py-2 text-sm text-center text-white rounded-lg "
          >
            Listed
          </button>}
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

export default EstateAssets;
