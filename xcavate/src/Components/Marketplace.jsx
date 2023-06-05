import React from "react";
import { data } from "../utils/assets";
import AssetCard from "./AssetCard";
const Marketplace = () => {
  return (
    <>
      <center><div className="px-4 py-10 grid grid-cols-3 gap-2 container mx-auto">
       {data.map((item)=>{
         return <AssetCard item={item} key={item._id} />
       })}
      </div></center>
    </>
  );
};

export default Marketplace;
