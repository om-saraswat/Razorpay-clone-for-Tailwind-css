import razorpayimg from '../../assets/white.png'
import india from '../../assets/download.webp'


export default function Navi(){
   return( <nav className='bg-[var(--deepBlue)]'>
        <div className='relative w-[1080px] h-[70px] mx-auto flex items-center justify-between'>
          <a href="#" className='cursor-pointer py-7 pr-7'>
          <img src={razorpayimg}
          width={100}
          height={10}
          />
          </a>
          <ul className='flex space-x-6'>
            <li className='text-white  py-6 hover:text-[var(--lightBlue)] cursor-pointer 
            transition-all duration-200 relative group'>
              <a href="#">
                Payment
              </a>
              <div className='absolute bottom-0 w-full h-1 bg-[var(--lightBlue)] hidden group-hover:block'></div>
            </li>
            <li className='text-white  py-6 hover:text-[var(--lightBlue)] cursor-pointer 
            transition-all duration-200 relative group'>
              <a href="#">
                Banking
              </a>
              <div className='absolute bottom-0 w-full h-1 bg-[var(--lightBlue)] hidden group-hover:block'></div>
            </li>
            <li className='text-white  py-6 hover:text-[var(--lightBlue)] cursor-pointer 
            transition-all duration-200 relative group'>
              <a href="#">
                Corporate Card
              </a>
              <div className='absolute bottom-0 w-full h-1 bg-[var(--lightBlue)] hidden group-hover:block'></div>
            </li>
            <li className='text-white  py-6 hover:text-[var(--lightBlue)] cursor-pointer 
            transition-all duration-200 relative group'>
              <a href="#">
                Payroll
              </a>
              <div className='absolute bottom-0 w-full h-1 bg-[var(--lightBlue)] hidden group-hover:block'></div>
            </li>
            <li className='text-white  py-6 hover:text-[var(--lightBlue)] cursor-pointer 
            transition-all duration-200 relative group'>
              <a href="#">
                Resources
              </a>
              <div className='absolute bottom-0 w-full h-1 bg-[var(--lightBlue)] hidden group-hover:block'></div>
            </li>
            <li className='text-white  py-6 hover:text-[var(--lightBlue)] cursor-pointer 
            transition-all duration-200 relative group'>
              <a href="#">
                Support
              </a>
              <div className='absolute bottom-0 w-full h-1 bg-[var(--lightBlue)] hidden group-hover:block'></div>
            </li>
            <li className='text-white  py-6 hover:text-[var(--lightBlue)] cursor-pointer 
            transition-all duration-200 relative group'>
              <a href="#">
                Pricing
              </a>
              <div className='absolute bottom-0 w-full h-1 bg-[var(--lightBlue)] hidden group-hover:block'></div>
            </li>
          </ul>
          <div className='flex space-x-2'>
            <img src={india}
            width= "28px"
            height="20px"
            />
            <button className='py-3 px-5 text-white border-[var(--lightBlue)] border rounded-sm text-sm font-bold'>
              Log in
            </button>
            <button className='py-3 px-5 bg-white text-[var(--lightBlue300)]  border rounded-sm text-sm font-bold
            hover:text-[var(--lightBlue500)]'>
              Sign Up &rarr;
            </button>
          </div>
        </div>
      </nav>
   )
}