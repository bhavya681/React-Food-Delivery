import React, { useState } from 'react'
import { IoLocation } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Search = ({ filterSearch, Allitems }) => {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterSearch(search);
  }


  return (
    <div className='flex justify-center my-20'>

      <select  style={{ outline: "none" }}>
        <option value={"Locations"} key={"Locations"}>Locations</option>
        <option value={"mumbai"} key={"mumbai"}>Mumbai</option>
        <option value={"delhi"} key={"delhi"}>Dehli</option>
        <option value={"pune"} key={"pune"}>Pune</option>
        <option value={"banglore"} key={"banglore"}>Banglore</option>
      </select>

      <IoLocation size={28} className='cursor-wait text-red-600 items-center text-center' />

      <div className='flex' >
        <input type="text" onChange={handleSearch} style={{ outline: "none", width: "700px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }} className='p-1 rounded-xl' placeholder=' Search Your Meal ' /> <IoIosSearch onClick={Allitems} className='cursor-pointer items-center text-center' size={28} />
      </div>

    </div>
  )
}

export default Search