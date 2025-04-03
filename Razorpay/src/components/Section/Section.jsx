import React from 'react'
import india from '../../assets/white.png'
import hero from '../../assets/hero.png'
function Section() {
  return (
    <section className='relative bg-[var(--deepBlue)] overflow-x-hidden'>
      <div className='w-8/12 max-w-[1080px] pt-[49px]  mx-auto flex flex-row justify-between items-center'>
         <div className=' text-white space-y-7'>
          <h1 className='font-bold text-[40px] leading-[1.2]'>Power your finance, grow your business</h1>
          <div className='bg-[var(--greenLight)] h-1 w-6'></div>
          <p className='text-[18px] leading-7 opacity-60'>Accept payment from customers,Automate payout <br />to vendors and employees. Never runout <br /> from working capital</p>
          <button className=' bg-[var(--lightBlue300)] rounded-md font-bold py-[12px] px-[14px] hover:bg-[var(--lightBlue500)] transition-all duration-200 '>Sign Up Now</button>
         </div>
         
          <img src={india} alt="" className='w-[52%] max-w-[680px]'/>
         
      </div>
      <div className='w-[103%]  left-0 right-0'>
        <img src={hero} alt="" className='w-fit object-fill scale-x-100'/>
      </div>
      </section>
  )
}

export default Section