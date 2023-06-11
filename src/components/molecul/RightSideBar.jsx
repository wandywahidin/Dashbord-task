import React from 'react'
import Calendar from './Calendar'
import CardProfile from './CardProfile'

const RightSideBar = () => {
  return (
    <div className='min-h-screen bg-[#FCFBFF] rounded-l-2xl flex flex-col justify-evenly py-2 gap-4 items-center'>
        <CardProfile/>
        <Calendar/>
    </div>
  )
}

export default RightSideBar