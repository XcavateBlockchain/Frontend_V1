import React from "react";
import AssetCard from "./AssetCard";
const Marketplace = () => {
  return (
    <>
      <div className="container banner h-[14rem] border w-[100%] relative p-4 mx-auto mb-5">
      <div class="w-[120px] h-[120px] left-10 p-1 absolute bottom-[-50px] rounded-full  profile-banner"/>
      </div>
      <div class="px-4 py-10 grid grid-cols-3 gap-2 container mx-auto">
        <AssetCard/>
        <AssetCard/>
        <AssetCard/>
        <AssetCard/>
        <AssetCard/>
      </div>
    </>
  );
};

export default Marketplace;
