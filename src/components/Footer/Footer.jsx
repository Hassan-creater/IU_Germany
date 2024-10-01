import rating from '../Images/star rating system.png';
import fiba from '../Images/FIBAA.png';
import equar from '../Images/eqar.png';
import Wes from '../Images/WES.png';
import wr from '../Images/logos 5 (1).png';
import che from '../Images/logos 5 (2).png';

export default function Footer(){

    return(
        <div className='w-full  min-h-screen  flex flex-col justify-center items-center gap-10 pt-4 '>
        <div className='w-[95%] min-h-[50vh]  pb-4 lg:mt-10'>
          <h1 className='font-bold text-2xl w-[95%] min-h-16  flex justify-center items-center mt-2 ml-2 sm:w-[55%] lg:text-4xl xl:w-[40%] bg-orange-500'>Accredited and Certified</h1>
          <div className='w-full min-h-[40vh]  mt-4 flex justify-center items-center flex-wrap gap-3 lg:min-h-[30vh]'>
            <div className='w-[30%] h-24  flex justify-center items-center md:h-32 lg:w-[15%]'>
              <img src={rating} className='md:w-[80%]' alt='stars logo'/>
            </div>
            <div className='w-[30%] h-24  flex justify-center items-center md:h-32  lg:w-[15%]'>
              <img src={Wes} className='md:w-[80%]' alt='wes logo'/>
            </div>
            <div className='w-[30%] h-24  flex justify-center items-center md:h-32 lg:w-[15%]'>
              <img src={equar} className='md:w-[80%]' alt='eqar logo'/>
            </div>
            <div className='w-[30%] h-24  flex justify-center items-center md:h-32 lg:w-[15%]'>
              <img src={fiba} className='md:w-[80%]' alt='fibaa logo'/>
            </div>
            <div className='w-[30%] h-24  flex justify-center items-center md:h-32 lg:w-[15%]'>
              <img src={che} className='md:w-[80%]' alt='che logo'/>
            </div>
            <div className='w-[30%] h-24   flex justify-center items-center md:h-32 lg:w-[15%]'>
              <img src={wr} className='md:w-[80%]' alt='wr logo'/>
            </div>
          </div>
        </div>
  
        <div className='w-full min-h-[50vh] bg-black flex flex-col justify-center items-center '>
        <div className='w-[95%] min-h-[50vh] flex flex-col justify-center items-center gap-3'>
          <div className='w-full min-h-[50vh]  p-3 flex flex-col gap-10  md:flex-row md:justify-center md:items-center lg:gap-24 xl:gap-40'>
            <ul className='leading-10  xl:leading-[4rem]'>
              <h1 className='text-[1.2rem] font-bold text-white'>Study programmes</h1>
              <li className='underline text-white'>Bachelor Programmes</li>
              <li className='underline text-white'>Master Programmes</li>
              <li className='underline text-white'>MBA Programmes</li>
            </ul>
            <ul className='leading-10 xl:leading-[4rem]'>
              <h1 className='text-[1.2rem] font-bold text-white'>My University</h1>
              <li className='underline text-white'>About Us</li>
              <li className='underline text-white'>Contact Us</li>
              <li className='underline text-white'>FAQ</li>
            </ul>
            <ul className='leading-10  xl:leading-[4rem]'>
              <h1 className='text-[1.2rem] font-bold text-white'>Studying at IU</h1>
              <li className='underline text-white'>How To Apply</li>
              <li className='underline text-white'>What Do I Need</li>
            </ul>
            <ul className='leading-10 xl:leading-[4rem] '>
              <h1 className='text-[1.2rem] font-bold text-white'>IU quality promise</h1>
              <li className='underline text-white'>Accreditations & Rankings</li>
              <li className='underline text-white'>What Our Students Say</li>
              <li className='underline text-white'>Our Partners</li>
            </ul>
           
          </div>
          <div className='w-full min-h-[20vh]  border-t-[2.5px] border-solid border-white pt-7 '>
          <ul className='leading-10 flex gap-3 w-full justify-center items-center lg:gap-20'>
              <li className='underline text-white'>Data Protection</li>
              <li className='underline text-white'>Imprint</li>
              <li className='underline text-white'>Cookie Setting</li>
            </ul>
            <p className='mt-7 text-slate-500 text-[0.8rem] font-bold mb-4'>Copyright C 2024 IU International University of Applied Sciences - All rights reserved. `Cloned by <span className='text-orange-400 underline'>Hassan Khalid`</span> </p>
          </div>
        </div>
        </div>
        
      </div>
    )
}