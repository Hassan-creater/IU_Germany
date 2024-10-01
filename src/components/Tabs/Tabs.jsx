import box1 from '../Images/box 1.jpeg';
import box2 from '../Images/box 2.jpeg';
import box3 from '../Images/box 3.jpg';
import box4 from '../Images/box 4.jpeg';
import box5 from '../Images/box 5.jpeg';
import box6 from '../Images/box 6.jpg';
import box7 from '../Images/box 7.jpg';
import box8 from '../Images/box 8.jpeg';
import box9 from '../Images/box 9.jpg';
import box10 from '../Images/box 10.jpeg';
import box11 from '../Images/box 11.jpg';
import box12 from '../Images/box 12.jpg';
import box13 from '../Images/box 13.jpeg';
import box14 from '../Images/box 14.jpg';
import box15 from '../Images/box 15.jpg';
import box16 from '../Images/box 16.jpeg';
import box17 from '../Images/box18.jpeg';
import box18 from '../Images/box19.jpg';
import box19 from '../Images/box20.jpeg';
import box20 from '../Images/box21.jpeg';
import box21 from '../Images/box22.jpeg';
import box22 from '../Images/box23.jpeg';
import box23 from '../Images/box24.jpeg';
import box24 from '../Images/box24.jpeg';

import { useState } from 'react';

export function Tabs(){



    const [tab1,setTab1] = useState(true);
    const [tab2,setTab2] = useState(false);
    const [tab3,setTab3] = useState(false);
   
    
  
    const Bachelor = () =>{
      setTab1(true);
      setTab2(false);
      setTab3(false);
    }
    const mba = () =>{
      setTab1(false);
      setTab2(true);
      setTab3(false);
    }
    const master = () =>{
      setTab1(false);
      setTab2(false);
      setTab3(true);
    }

    return(
        <div className='w-full min-h-screen' style={{backgroundColor:"#F5F4F3"}}>


        <div className='w-full h-16 bg-black text-white flex gap-4 justify-center items-center '>
          <div className="w-12 h-12 bg-white rounded-full hidden  lg:flex lg:justify-center lg:items-center ">
            <p className=' w-[85%] h-[85%] rounded-full bg-black flex justify-center items-center text-xl font-bold'>EN</p>
          </div>
        <p className='lg:text-xl'>  All our Study Programs are in English</p>
        </div>
    
        <div className='w-full min-h-[33vh] -200 '>
          <div className='p-4 '>
          <h1 className='text-2xl font-bold mt-4 xl:text-4xl'>The right Study Programme for you</h1>
          </div>
           
            <div className='w-full h-20  flex justify-center items-center  md:justify-start md:pl-16'>
              <ul className='flex gap-12 sm:gap-24 cursor-pointer'>
                <li className=' hover:text-blue-600 lg:text-xl xl:text-[1rem]' onClick={()=>Bachelor()}>BACHELORS</li>
                <li className='font-bold hover:text-blue-600 lg:text-xl xl:text-[1rem] xl:font-normal' onClick={()=>mba()}>MBA</li>
                <li className='font-bold hover:text-blue-600 lg:text-xl xl:text-[1rem] xl:font-normal' onClick={()=>master()}>MASTER</li>
              </ul>
            </div>
                 
              <div className='xl:flex xl:flex-col xl:items-center min-h-96 xl:justify-center xl:pl-3 xl:pr-3 '>
              <div className={`w-full min-h-96 ${tab1 ? "flex":"hidden"}   border-t-2 border-solid border-black  flex-wrap justify-center items-center gap-4 pt-10 pb-10  xl:p-4 cursor-pointer `} >
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box1})`}}>
              <h2 className='mb-12 w-[99%] p-3 bg-white text-2xl font-bold hover:bg-pink-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.2rem] xl:p-1'>Business Administration</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box2})`}}>
              <h2 className='w-[80%] p-3 bg-white mb-16 text-2xl font-bold hover:bg-green-500 sm:text-xl md:text-2xl xl:text-[1.2rem] xl:p-1'>Computer Science</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box3})`}}>
              <h2 className='w-[76%] p-3 mb-4 bg-white text-2xl font-bold hover:bg-purple-600 sm:text-xl md:text-2xl xl:text-[1.4rem] xl:p-1'>Management</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box4})`}}>
              <h2 className='text-2xl p-3 w-[95%] bg-white font-bold mb-8 hover:bg-blue-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                AI in Business-Finance
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box5})`}}>
              <h2 className='text-2xl font-bold p-3 w-[90%] bg-white hover:bg-green-500 mb-4 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                Applied Psychology
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box6})`}}>
              <h2 className='text-2xl font-bold p-3 w-[90%] bg-white mb-12 hover:bg-red-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                   Industrial-Psychology
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box7})`}}>
              <h2 className='text-2xl font-bold p-3 w-[95%] bg-white mb-8 whitespace-nowrap hover:bg-pink-500 sm:text-xl md:text-2xl xl:text-[1.2rem] xl:p-1'>
                AI in Business-Transport
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box8})`}}>
              <h2 className='text-2xl  font-bold p-3 w-[95%] bg-white mb-8 hover:bg-green-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                Aviation Management
              </h2>
             </div>
            </div>
    
            <div className={`1w-full ${tab2 ? 'flex':'hidden'} min-h-96  border-t-2 border-solid border-black flex-wrap justify-center items-center gap-4 pt-10 pb-10  xl:p-4 cursor-pointer `} >
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box9})`}}>
              <h2 className='mb-12 w-[99%] p-3 bg-white text-2xl font-bold hover:bg-pink-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.2rem] xl:p-1'>Master in Business</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box10})`}}>
              <h2 className='w-[80%] p-3 bg-white mb-16 text-2xl font-bold hover:bg-green-500 sm:text-xl md:text-2xl xl:text-[1.2rem] xl:p-1'>Data Management</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box11})`}}>
              <h2 className='w-[90%] p-3 mb-4 bg-white text-2xl font-bold hover:bg-purple-600 sm:text-xl md:text-2xl xl:text-[1.4rem] xl:p-1'>Finance & Accounting</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box12})`}}>
              <h2 className='text-2xl p-3 w-[95%] bg-white font-bold mb-8 hover:bg-blue-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                Engineering Management
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box13})`}}>
              <h2 className='text-2xl font-bold p-3 w-[90%] bg-white hover:bg-green-500 mb-4 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                International Marketing
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box14})`}}>
              <h2 className='text-2xl font-bold p-3 w-[90%] bg-white mb-12 hover:bg-red-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                   IT Management
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box15})`}}>
              <h2 className='text-2xl font-bold p-3 w-[95%] bg-white mb-8 whitespace-nowrap hover:bg-pink-500 sm:text-xl md:text-2xl xl:text-[1.2rem] xl:p-1'>
                Artificial Intelligence
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box16})`}}>
              <h2 className='text-2xl  font-bold p-3 w-[95%] bg-white mb-8 hover:bg-green-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                E-sport Management
              </h2>
             </div>
            </div>
    
    
    
            <div className={`w-full min-h-96 ${tab3?"flex":"hidden"}   border-t-2 border-solid border-black  flex-wrap justify-center items-center gap-4 pt-10 pb-10  xl:p-4 cursor-pointer `} >
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box17})`}}>
              <h2 className='mb-12 w-[99%] p-3 bg-white text-2xl font-bold hover:bg-pink-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.2rem] xl:p-1'>Software Engineering</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box18})`}}>
              <h2 className='w-[80%] p-3 bg-white mb-16 text-2xl font-bold hover:bg-green-500 sm:text-xl md:text-2xl xl:text-[1.2rem] xl:p-1'>Growth Hacking</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box19})`}}>
              <h2 className='w-[76%] p-3 mb-4 bg-white text-2xl font-bold hover:bg-purple-600 sm:text-xl md:text-2xl xl:text-[1.4rem] xl:p-1'>Cyber Security</h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box20})`}}>
              <h2 className='text-2xl p-3 w-[95%] bg-white font-bold mb-8 hover:bg-blue-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                Digital Marketing
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box21})`}}>
              <h2 className='text-2xl font-bold p-3 w-[90%] bg-white hover:bg-green-500 mb-4 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                Marketing Management 
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box22})`}}>
              <h2 className='text-2xl font-bold p-3 w-[90%] bg-white mb-12 hover:bg-red-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                  Applied Artificial
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box23})`}}>
              <h2 className='text-2xl font-bold p-3 w-[95%] bg-white mb-8 whitespace-nowrap hover:bg-pink-500 sm:text-xl md:text-2xl xl:text-[1.2rem] xl:p-1'>
                DevOps and Cloud
              </h2>
             </div>
             <div className='w-[95%] h-60 bg-blue-500 bg-no-repeat bg-center bg-cover flex justify-start items-end sm:w-[45%] rounded-xl xl:w-[23%]' style={{backgroundImage:`url(${box24})`}}>
              <h2 className='text-2xl  font-bold p-3 w-[95%] bg-white mb-8 hover:bg-green-500 sm:text-xl md:text-2xl xl:whitespace-nowrap xl:text-[1.3rem] xl:p-1'>
                Business & IT
              </h2>
             </div>
            </div>
              </div>
           
            
            <div className='w-full h-40  flex flex-col justify-center items-center gap-3 p-4'>
              <button type=' button' className='outline-none bg-blue-700 p-4 rounded-lg text-white hover:bg-blue-400 sm:font-bold'>ALL BACHELORS PROGRAMS</button>
              <p className='text-center font-bold lg:text-[0.9rem]'>With IU, you can study for your high school qualification AND Bachelor’s degree at the same time. <span className='decorated-solid underline hover:text-slate-500 cursor-pointer xl:text-[1.2rem]'>Read more</span></p>
            </div>
            
        </div>
    
        </div>
    )
}