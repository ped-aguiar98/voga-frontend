import React from 'react'

const Button = ({ children, color }) => {
  return (
    <div>
      <button class="mx-2 my-1 md:my-0 px-6 py-2 font-semibold text-lg rounded-full text-white bg-cyan-600 hover:bg-cyan-700 duration-500 inline-block">
      {children}
      </button>
    </div>
  )
}

export default Button
