import React from 'react'
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import {BiStats} from "react-icons/bi";
import {ImStatsDots} from "react-icons/im";
import {BsServer} from "react-icons/bs";

const CardItems = () => {
  return (
    <div class='grid grid-rows-4 gap-20'>
      <div class='grid grid-cols-7'>
        <div class=''>
          <RiMoneyDollarCircleLine size={25}/>
        </div>
          <div class=' col-start-2 col-end-7 text-left pl-2'>
            <h4 class=' text-left text-base font-bold'>Lorem ipsum dolor sit amet</h4>
          </div>
      </div>
      <div class='grid grid-cols-7'>
        <div>
        <BiStats size={25}/>
        </div>
        <div class=' col-start-2 col-end-7 text-left pl-2'>
          <h4 class=' text-left text-base font-bold'>Lorem ipsum dolor sit amet</h4>
        </div>
      </div>
      <div class='grid grid-cols-7'>
        <div>
          <ImStatsDots size={25}/>
        </div>
        <div class=' col-start-2 col-end-7 text-left pl-2'>
        <h4 class=' text-left text-base font-bold'>Lorem ipsum dolor sit amet</h4>
        </div>
      </div>
      <div class='grid grid-cols-7'>
        <div class=' col-start-1 col-end-1'>
          <BsServer size={25}/>
        </div>
        <div class=' col-start-2 col-end-7 text-left pl-2'>
          <h4 class=' text-left text-base font-bold'>Lorem ipsum dolor sit amet</h4>
        </div>
      </div>
    </div>
  )
}

export default CardItems
