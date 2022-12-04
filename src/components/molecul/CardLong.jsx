import React from 'react'
import Button from '../atom/Button'

const CardLong = () => {
  return (
    <div className='mt-6 py-[30px] mx-[22px] bg-[#FCFBFF] rounded-2xl shadow px-[35px]  text-[#27104E]'>
        <h1 className='color-[#27104E] text-[40px] font-semibold'>Today Task</h1>
        <p className='text-[18px] font-thin mb-3'>Check your dialy tasks and schedules</p>
        <Button text={"Today's Schedule"} />
    </div>
  )
}

export default CardLong