import React from 'react'
import Calendar from './Calendar'
import CardProfile from './CardProfile'

const RightSideBar = () => {
  return (
    <div className='w-[295px] min-h-screen absolute top-0 right-0 bg-[#FCFBFF] rounded-l-2xl flex flex-col justify-center py-4 gap-4 items-center'>
        <CardProfile/>
        <Calendar/>
    </div>
  )
}

export default RightSideBar