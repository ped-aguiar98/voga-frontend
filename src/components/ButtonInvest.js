import React from 'react'

const ButtonInvest = ({children}) => {
  return (
    <div>
      <button class="mx-2 my-1 md:my-0 px-6 py-2 font-semibold text-xl rounded text-white bg-amber-500 hover:bg-amber-600 duration-500 inline-block">
      {children}
      </button>
    </div>
  )
}

export default ButtonInvest
