import React from 'react'
import Button from '../atom/Button'
import avatar from '../../assets/profile/avatar.png'
import banner from '../../assets/profile/banner.png'

const CardProfile = () => {
  return (
    <div className='mx-[30px] bg-[#F5F2FF] rounded-2xl flex flex-col items-center shadow'>
            <div className='flex justify-center items-center gap-4'>
                <img src={avatar} alt="avatar" />
                <div>
                    <h1 className=' text-base font-bold text-center'>Wandy Wahidin</h1>
                    <p className='text-sm font-semibold'>Frontend Developer</p>
                </div>
            </div>
            <div className='mt-4 flex justify-center'>
                <img src={banner} alt="banner" />
            </div>
            <div className='w-[228px] mt-3 text-center'>
                <h1 className='font-bold '>Hi. I'm Wandy, nice to meet you. Please take a look around.</h1>
                <p className='text-xs text-justify'>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
            </div>
            <Button text={'Hire me'}/>
        </div>
  )
}

export default CardProfile