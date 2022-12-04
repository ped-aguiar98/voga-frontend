import React from 'react'

const MobileNav = ({children, showMenu, active}) => {
  return (
    <div class={active ? 'flex-col flex items-end pt-1 md:hidden' : 'hidden'}>
      <ul className="">
        {children}
      </ul>
    </div>
  )
}

export default MobileNav
