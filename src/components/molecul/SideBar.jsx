import React from 'react'
import logo from '../../assets/sidebar/logo.png'
import home from '../../assets/sidebar/home.png'
import msg from '../../assets/sidebar/msg.png'
import profile from '../../assets/sidebar/profile.png'
import setting from '../../assets/sidebar/setting.png'
import checklist from '../../assets/sidebar/checklist.png'

const SideBar = () => {
  return (
    <div className='bg-[#FCFBFF] min-h-screen px-10 rounded-r-3xl flex flex-col items-center'>
        <div className='mt-6'>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex flex-col items-center gap-14 mt-28'>
            <img src={home} alt="home" />
            <img src={checklist} alt="checklist" />
            <img src={msg} alt="msg" />
            <img src={profile} alt="profile" />
            <img src={setting} alt="setting" />
        </div>
    </div>
  )
}

export default SideBar