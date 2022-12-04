import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-[#9854CB] border border-[#FCFBFF] my-4 rounded-lg px-2 py-1 text-[#FCFBFF] hover:text-[#9854CB] hover:border-[#9854CB] hover:bg-[#FCFBFF]'>{text}</button>
  )
}

export default Button