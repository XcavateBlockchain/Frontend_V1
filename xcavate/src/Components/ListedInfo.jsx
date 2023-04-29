import React from 'react'
import { BsCircle } from "react-icons/bs";
const ListedInfo = () => {
  return (
    <>
              <div className="container mt-10 m-auto flex justify-center items-center flex-col h-[100%]">
        <label
          for="dev"
          class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nikku Real Estate Developer
        </label>
        <div
          className="py-4 px-10 rounded-md shadow-lg w-[60%] mb-2 flex justify-between"
          style={{ backgroundColor: "#1C1F20" }}
        >
          <label
            for="name"
            class="flex text-sm font-medium text-gray-900 dark:text-white"
          >
            <BsCircle color="blue" className="mt-1" />{" "}
            <span className="mx-2">Personal Information</span>
          </label>
          <label
            for="name"
            class="flex text-sm font-medium text-gray-900 dark:text-white"
          >
            <BsCircle color="blue" className="mt-1" />{" "}
            <span className="mx-2">Pricing And Listing Details</span>
          </label>
          <label
            for="name"
            class="flex text-sm font-medium text-gray-900 dark:text-white"
          >
            <BsCircle color="blue" className="mt-1" />{" "}
            <span className="mx-2">Additional Information</span>
          </label>
        </div>
        <div
          className="py-10 px-20 rounded-md shadow-lg w-[60%]"
          style={{ backgroundColor: "#1C1F20" }}
        >
          <form>
            
          <div class="mb-6">
            <label
              for="listedType"
              class="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
            >
              Listed Type
            </label>
            <input
              type="text"
              id="name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Sale,rent,lease"
              required
            />
          </div>

            
            <button
              type="submit"
              class="text-black rounded-md w-full mt-10 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  shadow-xl text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ListedInfo