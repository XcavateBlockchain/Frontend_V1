import React, { useState } from "react";
//import { data } from "../utils/assets";
import {data} from "../utils/estateData"
import AssetCard from "./AssetCard";
import EstateAssets from "./estateAssets";
const RealEstate = () => {
    const [newAssets, setNewAssets] = useState()
    const toggleVerification = (index) => {
        const newEstateAssets = [...newAssets];
        newAssets[index].isCompleted = !newAssets[index].isCompleted;
        setNewAssets(newEstateAssets);
      };
  return (
    <>
      <div className="container banner h-[14rem] border w-[100%] relative p-4 mx-auto mb-5">
      <div class="w-[120px] h-[120px] left-10 p-1 absolute bottom-[-50px] rounded-full  profile-banner"/>
      </div>
      <div class="px-4 py-10 grid grid-cols-3 gap-2 container mx-auto">
       {data.map((item)=>{
         return <EstateAssets item={item} key={item._id} />
       })}
      </div>
    </>
  );
};

export default RealEstate;
