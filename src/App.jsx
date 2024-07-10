import { useState } from 'react'

import './App.css'
import Dipok from "../src/assets/bbst.jpg"

function App() {
  

  return (
    <>
      <div className="">
        <img  className=' relative items-center origin-center rotate-90 ... ml-[200px]' src={Dipok} alt="" />
        <h2 className=' absolute top-[522.5px] left-[818.5px] bg-[#fff] h-[12.5px] w-[13px] text-[11px] items-center leading-[12px] text-[#888B90] opacity-85 font-semibold origin-center rotate-90 ... '>11</h2>
        <h3 className=' absolute top-[607px] left-[819px] bg-[#fff] h-[10px] w-[12px] text-[09px] items-center leading-[10px] text-[#888B90] opacity-85 font-semibold origin-center rotate-90 ...'>১১</h3>
 
      </div>
    </>
  )
}

export default App
