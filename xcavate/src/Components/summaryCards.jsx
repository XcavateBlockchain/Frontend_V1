import React from "react";

const SummaryCards = ({sumData}) => {
    return ( 
        <>
            
        <div className="max-w-sm mt-2 bg-white relative  asset-card  shadow">
        
        {/* <div className="p-3 absolute top-0">
        <span className="text-orange-500 border  text-xs font-medium mr-2 px-2.5 py-0.5 rounded backdrop-blur-3xl">Verified</span>
        </div> */}
        <div className="p-5">
          <div className="flex justify-between">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-white-900 dark:text-white">
             {sumData.title}
            </h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-white-400 dark:text-blue-400">
               {sumData.value}
            </h5>
          </div>
          <h3 className="text-white mt-1 mb-1">{sumData.value}</h3>
         
          
       
        </div>
      </div>

        </>
     );
}
 
export default SummaryCards;