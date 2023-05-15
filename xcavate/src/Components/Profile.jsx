import React from "react";
import {BsCircle} from "react-icons/bs";
const Profile = () => {
  return (
    <div className="container mt-10 m-auto flex justify-center items-center flex-col h-[100%]">
         <label
          for="dev"
          class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
        >
          Real Estate Developer
        </label>
        <div  className="py-4 px-10 rounded-md shadow-lg w-[60%] mb-2 flex justify-between"style={{ backgroundColor: "#1C1F20" }}>
            <label
              for="name"
              class="flex text-sm font-medium text-gray-900 dark:text-white"
            >
              <BsCircle color="blue" className="mt-1" /> <span className="mx-2">Personal Information</span>
            </label>
            <label
              for="name"
              class="block text-sm font-medium text-gray-900 dark:text-white"
            >
             #000000000
            </label>
          </div>
      <div
        className="py-10 px-20 rounded-md shadow-lg w-[60%]"
        style={{ backgroundColor: "#1C1F20" }}
      >
       

        <form>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Nikkku.jr"
              required
            />
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="90792579.."
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Address 1."
            />
          </div>

          <div class="mb-6">
            

            <label
              for="bio"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="We would like to know more about you as a real estate developer..."
            ></textarea>
          </div>
          <label
            for="id"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload Id
          </label>
          <label
            for="id"
            class="block mb-4 text-sm font-medium text-gray-900 dark:text-gray-500 "
          >
            Select your prefered choice of identification and upload passport, drivers lincens 
          </label>
          <div className="flex justify-center">
            
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="text-black rounded-md w-full mt-10 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  shadow-xl text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
          >
            Verify Credentials
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
