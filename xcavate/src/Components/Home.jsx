import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div class="w-1/1 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 main-color dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            How are you planning on using{" "}
            <span className="text-blue-500">Xcavate</span> ?
          </h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Select an option to create a Digital Identity (DID) or you could
            click the browse property option
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
