import React from 'react'
import {RiMoneyDollarCircleLine} from "react-icons/ri";
// import {BiStats} from "react-icons/bi";
import {ImStatsDots} from "react-icons/im";
import {BsServer} from "react-icons/bs";

const CardBottom = () => {
  return (
    <div class='grid grid-cols-3 py-5'>
      <div class='grid grid-cols-12'>
        <div class='pl-10'>
          <RiMoneyDollarCircleLine size={25}/>
        </div>
          <div class=' col-start-2 col-end-12 text-left pl-8'>
            <h4 class=' text-left text-base font-bold'>Lorem ipsum dolor sit amet</h4>
          </div>
      </div>
      <div class='grid grid-cols-7'>
        <div class='pl-10'>
          <ImStatsDots size={25}/>
        </div>
        <div class=' col-start-2 col-end-12 text-left pl-2'>
        <h4 class=' text-left text-base font-bold'>Lorem ipsum dolor sit amet</h4>
        </div>
      </div>
      <div class='grid grid-cols-7'>
        <div class='pl-10'>
          <BsServer size={25}/>
        </div>
        <div class=' col-start-2 col-end-12 text-left pl-2'>
          <h4 class=' text-left text-base font-bold'>Lorem ipsum dolor sit amet</h4>
        </div>
      </div>
    </div>
  )
}

export default CardBottom
