import React from 'react'
import SearchInput from '../components/atom/SearchInput'
import CardLong from '../components/molecul/CardLong'
import Template from '../components/Template'
import cardlong from '../assets/cardlong.png'
import CardProgres from '../components/molecul/CardProgres'
import AddTask from '../components/molecul/AddTask'
import Contact from '../components/molecul/Contact'

const Home = () => {
  return (
    <Template>
        <SearchInput/>
        <div className='relative flex justify-between mt-6 mx-[22px] bg-[#FCFBFF] rounded-2xl shadow'>
            <CardLong/>
            <img src={cardlong} alt="banner" className='absolute right-0 -top-[100px]' />
        </div>
        <div className='grid grid-cols-3'>
            <CardProgres date={'Nov 2, 2022'} title={'Web Dashboard'} subTitle={'Designing'} progress={'90%'} dayLeft={'3'}/>
            <CardProgres date={'Nov 2, 2022'} title={'Mobile App'} subTitle={'Shopping'} progress={'30%'} dayLeft={'25'}/>
            <CardProgres date={'Nov 2, 2022'} title={'Animate Ilustration'} subTitle={'Designing'} progress={'75%'} dayLeft={'7'}/>
        </div>
        <div className='grid grid-cols-3'>
            <AddTask/>
            <Contact/>
        </div>
    </Template>
  )
}

export default Home