import React from 'react'
import SideBar from './molecul/SideBar'
import RightSideBar from './molecul/RightSideBar'

const Template = ({children}) => {
  return (
    <div className='relative'>
      <SideBar/>
      <div className=" min-h-screen absolute top-0 w-[1290px] mx-6 left-32">
        {children}
      </div>
      <RightSideBar/>
    </div>
  )
}

export default Template