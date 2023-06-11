import React from 'react'
import SideBar from './molecul/SideBar'
import RightSideBar from './molecul/RightSideBar'

const Template = ({children}) => {
  return (
    <div className='relative flex justify-between'>
      <SideBar/>
      <div>
        {children}
      </div>
      <RightSideBar/>
    </div>
  )
}

export default Template