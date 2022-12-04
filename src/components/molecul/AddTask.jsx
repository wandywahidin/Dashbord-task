import React from 'react'
import cardlong from '../../assets/cardlong.png'

const AddTask = () => {
  return (
    <div className=' py-4 mx-[22px] bg-[#FCFBFF] rounded-2xl shadow px-[35px] col-span-2 grid grid-cols-4 gap-2  text-[#27104E]'>
        <h1 className='col-span-4 font-semibold text-[20px]'>Overview November 2022</h1>
        <div className=' bg-[#FCFBFF] rounded-2xl shadow p-3 text-center mt-2 border border-[#9854CB]'>
            <h1 className='text-4xl font-bold'>8</h1>
            <h1>Total Project</h1>
        </div>
        <div className=' bg-[#FCFBFF] rounded-2xl shadow p-3 text-center mt-2 border border-[#9854CB]'>
            <h1 className='text-4xl font-bold'>5</h1>
            <h1>Project On Progres</h1>
        </div>
        <div className=' bg-[#FCFBFF] rounded-2xl shadow p-3 text-center mt-2 border border-[#9854CB]'>
            <h1 className='text-4xl font-bold'>2</h1>
            <h1>Pending Project</h1>
        </div>
        <div className=' bg-[#FCFBFF] rounded-2xl shadow p-3 text-center mt-2 border border-[#9854CB]'>
            <h1 className='text-4xl font-bold'>1</h1>
            <h1>Reject Project</h1>
        </div>
    </div>
  )
}

export default AddTask