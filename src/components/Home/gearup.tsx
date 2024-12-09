import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Gearup = () => {
  const gearupdata1 = [{
    img:"/gearup-1.png",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price:"₹ 3 895",
    desc:"Men's Short-Sleeve Running Top"
  },
  {
    img:"/gearup-2.png",
    name: "Nike Dri-FIT Challenger",
    price:"₹ 2 495",
    desc:"Men's 18cm (approx.) 2-in-1 Versatile Shorts"
  }]
  const gearupdata2 =[
  {
    img:"/gearup-3.png",
    name: "Nike Dri-FIT ADV Run Division",
    price:"₹ 5 295",
    desc:"Women's Long-Sleeve Running Top"
  },
  {
    img:"/gearup-4.png",
    name: "Nike Fast",
    price:"₹ 3 795",
    desc:"Women's Mid-Rise 7/8 Running Leggings with Pockets"
  },]
  return (
    <section className='my-10 md:my-20'>
      <div>
        <h4 className='text-2xl font-medium'>Gear Up</h4>
      </div>
      


<div className='hidden lg:grid lg:grid-cols-2 gap-y-6 gap-x-10'>
      <div className='flex items-center  gap-y-6 justify-end'>
<div className='flex items-center gap-x-4'><h5>Shop Men&apos;s</h5> <span className='bg-gray-400 rounded-full p-2'><IoIosArrowBack  size={25}/></span> <span  className='bg-gray-400 rounded-full p-2'><IoIosArrowForward size={25}/></span></div>
      </div>
      <div className='flex items-center justify-end'>
<div className='flex items-center gap-x-4'><h5>Shop Men&apos;s</h5> <span className='bg-gray-400 rounded-full p-2'><IoIosArrowBack  size={25}/></span> <span  className='bg-gray-400 rounded-full p-2'><IoIosArrowForward size={25}/></span></div>
      </div>
      </div>



<div className='grid grid-cols-1  gap-y-6 md:grid-cols-2 gap-x-6 '>
  <div className='grid grid-cols-1  gap-y-6 sm:grid-cols-2'>
      {gearupdata1.map((data,index)=>(
    <div key={index} className='w-[250px] xl:w-[300px] space-y-5'>
<div className='relative h-[300px]'>
  <Image src={data.img} alt='gear-up-1' fill objectFit='contain'></Image>
</div>
<div className='flex flex-col'>
<div className='flex items-center justify-between text-sm md:text-base  font-medium'><h4>{data.name}</h4> <span>{data.price}</span></div>
<p className='text-gray-500'>{data.desc}</p>
</div>
    </div>))}
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      {gearupdata2.map((data,index)=>(
    <div key={index} className='w-[250px] xl:w-[300px] space-y-5'>
<div className='relative h-[300px]'>
  <Image src={data.img} alt='gear-up-1' fill objectFit='contain'></Image>
</div>
<div className='flex flex-col'>
<div className='flex items-center text-sm md:text-base justify-between font-medium'><h4>{data.name}</h4> <span>{data.price}</span></div>
<p className='text-gray-500'>{data.desc}</p>
</div>
    </div>))}
    </div>
    </div>
    </section>
  )
}

export default Gearup