import image from '../Images/Group 1.png'
import stars from '../Images/star png.png';
import ucla from '../Images/partners__1_-removebg-preview.png'
import bsit from '../Images/partners_2-removebg-preview.png'
import camb from '../Images/partners_3-removebg-preview.png'
import wes from '../Images/WES.png';
import unes from '../Images/images-removebg-preview (1).png'
import brand1 from '../Images/brand1.png';
import brand2 from '../Images/brand2.png';
import brand3 from '../Images/brand3.png';
import brand4 from '../Images/brand4.png';
import brand5 from '../Images/brand5.png';
import brand6 from '../Images/brand6.png';
import brand7 from '../Images/brand7.png';
import brand8 from '../Images/brand8.png';
import orange1 from '../Images/Orange 1.webp';
import orange2 from '../Images/Orange 2.webp';
import rez1 from '../Images/Riziki_Cinama-min.webp';
import rez2 from '../Images/rez2.webp';
import rez3 from '../Images/rez3.webp';
import comp1 from '../Images/images 1.png';
import comp2 from '../Images/images 2.png';
import comp3 from '../Images/images 3.png';
import comp4 from '../Images/images 4.png';
import comp5 from '../Images/images 5.png';
import comp6 from '../Images/images 6.png';
import comp7 from '../Images/images 7.jpeg';
import comp8 from '../Images/images 8.png';
import video from '../Images/video.mp4';
import last1 from '../Images/last img1.webp';
import last2 from '../Images/last img2.webp';
import img1 from  '../Images/one-img1.webp';

import {   lazy, Suspense, useContext, useRef, useState } from 'react';
import { MyContext } from '../context/Context';
import { Tabs } from '../Tabs/Tabs';
import Footer from '../Footer/Footer';


const Form = lazy(()=> import("../Form/Form"))



function Home(){


  

   let ref2 = useRef(null);
  

   
  

  const {showModal} = useContext(MyContext);
   
 

let [count,setcount] = useState(0);



  
 
  
  const right = () => {
      if(ref2.current.offsetWidth >= 200){
       setcount(count + 300 )
        if(count == 1200){
         setcount(0);
        }
      }
     
      if(ref2.current.offsetWidth >= 639  ){
        setcount(count + 570);
        if(count == 2280){
          setcount(0);
        }
      }

      if(ref2.current.offsetWidth >= 767){
        setcount(count + 720);
        if(count == 2880){
          setcount(0);
        }
      }

      if(ref2.current.offsetWidth >= 1023){
        setcount(count + 530);
        if(count == 2120){
          setcount(0);

        }
      }

      if(ref2.current.offsetWidth >= 1279){
        setcount(count + 350);
        if(count == 700){
          setcount(0);

        }
      }


      

      
     
      
  }
  
   
   
  const left = () => {
    if(ref2.current.offsetWidth >= 200){
      setcount(count - 300 )
       if(count == 0){
        setcount(0);
       }
     }
    
     if(ref2.current.offsetWidth >= 639  ){
       setcount(count - 570);
       if(count == 0){
         setcount(0);
       }
     }

     if(ref2.current.offsetWidth >= 767){
       setcount(count - 720);
       if(count == 0){
         setcount(0);
       }
     }

     if(ref2.current.offsetWidth >= 1023){
       setcount(count - 530);
       if(count == 0){
         setcount(0);

       }
     }

     if(ref2.current.offsetWidth >= 1279){
       setcount(count - 350);
       if(count == 0){
         setcount(0);

       }
     }

}
 
// CALL MODEL//
let [call,setCall] = useState(false)
let ref = useRef();

const Close = (e) =>{
  if(ref.current == e.target){
    setCall(false);
  }
}




  

  return(
    < >

    


    <div ref={ref2} className='max-w-100%  major xl:w-[1290px] mt-0 mb-0 ml-auto mr-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] '>

      {/* CALL MODAL */}
      <div className=' w-16 h-16 lg:w-20 right-6 bottom-3 lg:h-20   lg:right-8 lg:bottom-5 fixed flex justify-center items-center rounded-full z-30'>
          <div className='w-4 h-4 absolute top-1 right-1 lg:top-3 lg:right-2 rounded-full bg-red-600 animate-ping'></div>
        <div className='w-16 h-16  rounded-full bg-white border-solid border-2 border-blue-700 flex justify-center   items-center cursor-pointer hover:text-slate-600'>

        <i onClick={()=>setCall(true)} className={`fa-solid fa-phone ${call ? "hidden":""}  text-3xl`}></i>

        <i onClick={()=>setCall(false)} className={`fa-solid  ${call ? "absolute":"hidden"} text-4xl  fa-xmark`}></i>
        </div>
        </div>

        
      <div ref={ref} onClick={(e)=>Close(e)} className={`w-full h-full z-20  ${call ? "fixed":"hidden"} top-0 left-0` }style={{backgroundColor:"rgba(0,0,0,0.4)"}}>

       
        <div className='min-w-24 bottom-20 right-2 p-4 min-h-64 absolute lg:bottom-24 lg:right-8 flex flex-col gap-1  justify-center items-end cursor-pointer'>
          <div className='min-w-48 h-14 flex justify-center items-center gap-3 p-3 font-bold bg-white rounded-[2rem] hover:translate-x-[-20px] duration-300 hover:text-slate-500'>
            <p >WRITE AN EMAIL</p>
            <i className="fa-regular text-2xl fa-envelope"></i>

          </div>
          <div className='min-w-48 h-14 flex justify-center items-center gap-3 p-3 font-bold bg-white rounded-[2rem] hover:translate-x-[-20px] duration-300 hover:text-slate-500'>
            <p >+49 30 311 987 20</p>
            <i className="fa-solid text-2xl fa-phone-flip"></i>
          </div>
          <div className='min-w-48 flex justify-center items-center p-3 gap-3 font-bold h-14 bg-white rounded-[2rem] hover:translate-x-[-20px] duration-300 hover:text-slate-500'>
            <p >WHATSAPP CHAT</p>
            <i className="text-2xl fa-brands fa-whatsapp"></i>
          </div>
          <div className='min-w-52 h-14 flex justify-center items-center gap-3 p-3 bg-white font-bold rounded-[2rem] hover:translate-x-[-20px] duration-300 hover:text-slate-500'>
            <p >CHAT WITH OUR  STUDENTS</p>
            <i className="fa-solid fa-graduation-cap text-2xl"></i>
          </div>
        </div>
      </div>

      {/* PAGE 1 */}

     <div className='w-full min-h-[100vh]  mt-[50px]  xl:flex xl:flex-row-reverse xl:mt-[0px]' style={{backgroundColor:"#FFF8EF"}}>
      <div className='w-full min-h-[50vh] object-cover flex justify-center items-center md:min-h-[70vh] xl:w-[50%] xl:min-h-[100vh]'> 
        <img src={image}  className=' object-cover lg:object-top w-full
         h-[50vh]  md:h-[70vh] xl:h-[100vh]' alt='Group of Students' />
      </div>
      <div className='w-full min-h-[50vh]  p-4 flex flex-col gap-2 xl:w-[50%] xl:min-h-[50vh] xl:justify-center xl:items-start xl:gap-4'>
        <h3 className='bg-black text-white  p-1 w-[7rem] text-center font-bold text-[1rem] md:p-3 md:w-[20%] md:text-xl xl:text-2xl xl:w-[25%] xl:p-1'>Welcome to</h3>
        <h1 className='w-[99%] p-2 bg-orange-400 font-bold text-2xl whitespace-nowrap sm:text-4xl sm:w-[90%] md:w-[70%] xl:text-5xl xl:w-[100%]'>International Univeristy of </h1>
        <h1 className='w-[70%] p-2
         text-2xl font-bold bg-orange-400 whitespace-nowrap sm:text-4xl sm:w-[60%] md:w-[50%] xl:text-5xl xl:w-[70%]'>Applied Sciences</h1>
        <h1 className='w-[40%] p-2
          font-bold text-2xl bg-orange-400 sm:w-[30%] sm:text-4xl md:w-[25%] xl:text-5xl xl:w-[40%]'>Germany</h1>
          <p>Join over 100,000 satisfied students at Germany’s largest university. Get your flexible and accredited degree on your terms - no matter your circumstances!</p>

        <div   onClick={()=>showModal(true)} className='w-full  min-h-14 flex justify-center items-center sm:min-h-16'>
        <input className='w-[85%]  h-12 outline-none border-2 border-solid border-blue-700 pl-4 rounded-tl-lg rounded-bl-lg sm:h-14 sm:text-xl xl:w-[90%] xl:h-14' type='text' placeholder='What do you want to Study?'/>
        <i className="fa-solid fa-magnifying-glass w-[15%] text-2xl bg-blue-700 hover:bg-blue-500 h-12 flex justify-center items-center text-white rounded-tr-lg rounded-br-lg sm:h-14 sm:w-[10%]  "></i>
        </div>
        <div className='w-full min-h-20  flex gap-2 justify-center items-center'>
          <div className='w-[35%] h-12 bg-white flex justify-center items-center sm:h-10 sm:w-[25%] xl:w-[35%] '>
            <img src={stars} alt='stars'/>
          </div>
          <div className='w-[2px] h-10  bg-black'></div>
          <div className='w-[60%] h-16  pl-2 flex flex-col justify-center items-start sm:h-20'>
           <p className='font-bold text-[0.7rem] sm:text-[1rem]'>96% of our students recommend studying with us</p>
           <p className='underline text-[0.9rem] sm:text-[1rem]'>Learn more</p>
          </div>
        </div>
       
        
      </div>
     </div>


    {/* PAGE 2 */}

    <div className='w-full min-h-screen  flex flex-col justify-center items-center gap-3'>
      <div className='w-full min-h-[50vh]  flex pt-10 pb-10  justify-center items-center ' style={{backgroundColor:"#FFDCB0"}}>
        <div className='w-[95%] min-h-[50vh] md:min-h-[47vh] lg:min-h-[44vh] xl:flex rounded-lg shadow-lg shadow-slate-400 ' style={{backgroundColor:"#FFF8EF"}}>
          <div className='w-full min-h-[30vh] flex flex-col justify-center items-start p-4 gap-6 xl:w-[80%] '> 
            <h2 className='font-bold text-2xl md:text-3xl'>When does school start at IU? Whenever you are ready!</h2>
          <p>Apply by <span className='font-bold'>September 12th,</span> pick <span>your own starting date</span> and secure your study spot</p>
          <p>Level up in 2024: start your carer-transforming degree online. Submit your application and <span className='font-bold'>start your new education journey,</span> on your own terms</p>
          </div>
          <div className='w-full min-h-[10vh]  flex justify-center items-center p-4 xl:w-[20%]  xl:border-l-2 border-slate-200'>
            <button className='outline-none p-4 rounded-lg bg-blue-700 font-bold text-white hover:bg-blue-400' type='button'>APPLY NOW</button>
          </div>
         
        </div>
      </div>


      <div className='w-full min-h-[50vh]  flex flex-col justify-center items-center gap-4 pt-4 pb-8 lg:flex-row ' >
        <div className='w-[95%] min-h-[15vh]  flex flex-col justify-center items-center gap-2 p-3 text-center lg:w-[32%]' >
        <i className="fa-solid fa-graduation-cap text-4xl"></i>
        
        <h2 className='font-bold text-xl lg:text-2xl'>100% flexible</h2>
        <p>You decide where and when you want to study</p>
        </div>

        <div className='w-[95%] min-h-[15vh]  flex flex-col justify-center items-center text-center gap-2 p-3 lg:w-[32%] lg:p-1'>
        <i className="fa-solid fa-award text-4xl "></i>
        <h2 className='font-bold text-xl lg:text-2xl '>State-Approved & accredited top-level education</h2>
        <p >First-class study programmes with a recommendation rate of 96 %</p>
        </div>


        <div className='w-[95%] min-h-[15vh]  flex flex-col justify-center items-center text-center gap-2 p-3 lg:w-[32%]'>
        <i className="fa-solid fa-brain text-4xl"></i>
        <h2 className='font-bold text-xl lg:text-2xl'>AI-enhanced learning</h2>
        <p>Learn faster with both academic and AI tutors</p>
        </div>
      </div>
    </div>
    
    

    {/* PAGE 3 */}
  
    <Tabs/>
    

    {/* PAGE 4 */}
    <div className='w-full min-h-[100vh]   md:min-h-[50vh]   xl:min-h-[100vh] '>
    <div className='w-full min-h-72  pt-12 pb-12 pl-4 pr-4 flex justify-center items-center' style={{backgroundColor:'#FFFFFF'}}>
      <div className='w-[100%] h-[22rem] rounded-lg  sm:h-[14rem] md:flex xl:w-[96%] xl:h-[12rem] xl:mt-10 ' style={{backgroundColor:"#FFDCB0"}}>
        <div className='w-[20%] h-full  hidden  md:flex justify-center items-center lg:w-[10%]  '>
        <i className="fa-solid fa-clock text-5xl lg:text-4xl"></i>
        </div>
        <div className='w-full h-full text-center flex flex-col justify-center items-center p-2 md:p-1 md:w-[90%] md:text-start '  >
          <h1 className='text-xl font-bold mb-5 sm:text-2xl md:text-[1.7rem] md:whitespace-nowrap md:w-full md:text-start lg:text-3xl xl:text-2xl xl:mb-2'>Finish your coursed 27% faster with syntea</h1>
          <p className='mb-5 sm:w-full sm:p-2 lg:text-xl xl:text-[1rem] xl:mb-2'>In a recent study conducted by IU, students using our AI-Powered tutor completed their first course 2<span className='font-bold'>7& faster</span> than other students. </p>
          <p className='underline md:w-full md:text-start md:pl-1'>Meet Syntea</p>
        </div>
      </div>
    </div>
   

   <div className='w-full min-h-[14rem] text-center pt-6 pl-2 pr-2'>
    <h1 className='text-2xl font-bold mb-8 sm:text-4xl md:text-5xl xl:mb-16 xl:text-4xl'>Institutions we partner with</h1>
    <div className='w-full  justify-center flex flex-col items-center pb-8 gap-4 sm:gap-10 lg:flex-row lg:pl-1 lg:pr-1   '>
    <div className='w-[98%] h-80  rounded-lg  md:flex md:h-72 lg:w-[30%] lg:h-96 lg:block' style={{backgroundColor:"#F5F4F3"}}>
      <div className='w-full h-[40%]  flex justify-center items-center sm:pt-4 md:w-[60%] md:h-full lg:w-full lg:h-[40%]'>
        <img className='xl:w-[80%]' src={ucla} alt='ucla logo' />
  
      </div>
      <div className='w-full h-[60%] flex justify-center items-center text-center p-2 md:w-[40%] md:h-full md:text-start md:text-[1.1rem] lg:w-full lg:h-[60%]  lg:p-4'>
        <p>Our collaboration with <span className='font-bold' >UCLA Extension</span>  under the IU Study Abroad Alliance allows you to study in Los Angeles, California and earn your IU degree plus an additional certificate from UCLA. </p>
      </div>
    </div>
    <div className='w-[98%] h-80  rounded-lg md:flex md:h-72 lg:w-[30%] lg:h-96 lg:block' style={{backgroundColor:"#F5F4F3"}}>
      <div className='w-full h-[40%] flex justify-center items-center sm:pt-8  md:w-[60%] md:h-full lg:w-full lg:h-[40%]  lg:pl-4 lg:pr-4'>
        <img className='xl:w-[80%] xl:h-[95%]' src={bsit} alt='bcit logo'/>
      </div>
      <div className='w-full h-[60%]  text-center flex justify-center items-center p-2 md:w-[40%] md:h-full md:text-start md:text-[1.1rem] lg:w-full lg:h-[60%]  lg:p-4'>
        <p>
        With IU’s Study Abroad Alliance, you can now start your degree online with us and complete your final two years on campus at <span className='font-bold'>British Columbia Institute of Technology</span>  (BCIT) in Canada. 
        </p>
      </div>
    </div>
    <div className='w-[98%] h-80  rounded-lg md:flex md:h-72 lg:w-[30%] lg:h-96 lg:block xl:h-[24rem]' style={{backgroundColor:"#F5F4F3"}}>
      <div className='w-full h-[40%] flex justify-center items-center sm:pt-8 md:w-[60%] md:h-full lg:w-full lg:h-[40%]'>
        <img className='xl:w-[90%] xl:h-[95%]' src={camb} alt='cambridge logo'/>
      </div>
      <div className='w-full h-[60%]  text-center flex justify-center items-center p-2 md:w-[40%] md:h-full md:text-start md:text-[1.1rem] lg:w-full lg:h-[60%]  lg:p-4'>
        <p>Thanks to the <span className='font-bold'>Cambridge Assessment International Education certification</span> , IU offers you a chance to earn a high school diploma and a bachelor’s degree at the same time, with no additional costs.</p>
      </div>
    </div>
    </div>
   </div>
    </div>



    {/* PAGE 5 */}
    <div className='w-full min-h-[100vh]  pt-4   md:min-h-[80vh] lg:min-h-[60vh] xl:min-h-[85vh] '>

      <h1 className='text-center font-bold text-2xl mb-14 mt-5 sm:text-4xl md:text-4xl xl:mb-7'>Our Global Recognition</h1>
      <div className='w-full min-h-[87vh] flex flex-col justify-center items-center gap-5 p-2 md:min-h-[65vh]  lg:min-h-[30vh]   lg:flex-row  xl:gap-12 '>
        <div className='w-[98%] h-[48vh] rounded-xl md:h-[30vh] md:flex lg:w-[70vh] lg:block lg:h-[50vh] xl:w-[45%] xl:h-[65vh]' style={{backgroundColor:"#F5F4F3"}} >
          <div className='w-full h-[40%] flex justify-center items-center sm:h-[60%] md:w-[50%]
          md:h-full lg:w-full lg:h-[40%] xl:h-[50%]'>
            <img src={wes} className='w-[80%] h-[50%] sm:h-[80%] md:h-[50%] lg:h-[60%] xl:h-[80%]'/>
          </div>
          <div className='w-full h-[60%]  p-2 flex justify-center items-center sm:h-[40%] md:w-[50%]
          md:h-full md:pr-4 lg:w-full lg:h-[60%] lg:pl-5 xl:items-end xl:h-[50%] xl:pb-6'>
            <p>IU is recognised by <span className='font-bold'>WES Canada and U.S.,</span>  which means your degree can be converted to points in the local system for purposes of immigration, work, or studies.</p>
          </div>
        </div>
        <div className='w-[98%] h-[48vh]  rounded-xl md:h-[30vh] md:flex lg:w-[70vh] lg:block lg:h-[50vh] xl:w-[45%] xl:h-[65vh]' style={{backgroundColor:"#F5F4F3"}}>
          <div  className='w-full h-[40%]  flex justify-center items-center sm:h-[60%] md:w-[50%]
          md:h-full lg:w-full lg:h-[40%] xl:h-[50%]'>
            <img className='sm:w-[60%] xl:w-[70%]' src={unes} alt='unesco logo'/>
          </div>
          <div  className='w-full h-[60%]  flex justify-center items-center p-2 sm:h-[40%] md:w-[50%] md:h-full md:p-4 lg:w-full lg:h-[60%] lg:pl-5 xl:h-[50%] xl:items-end xl:pb-7'>
            <p>As the first EU institution in <span className='font-bold'>UNESCO Global Education</span>  Coalition, IU is committed to ensuring accessible quality education to students in crisis worldwide through free online micro-credentials.</p>
          </div>
        </div>
      </div>
    </div>


     {/* PAGE 6 */}
    <div className='w-full min-h-screen  pt-10  lg:pt-24 lg:min-h-[40vh] xl:pt-16xl:min-h-[90vh]'>
      <h2 className='text-center font-bold mb-4 text-[1.7rem] sm:mb-9 sm:text-3xl lg:text-4xl lg:text-start lg:ml-14 '>Our Company partners</h2>
     <div className='w-full h-[90%] lg:flex'>

     <div className='w-full h-[50%]  flex flex-col gap-5  justify-center items-center lg:w-[50%] lg:h-full '>
     
        <div className='w-full h-20  flex justify-center items-center gap-2'>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={brand1} className='w-[90%] sm:w-[60%]' alt='salesforce logo' />
          </div>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={brand2} className='w-[80%] sm:w-[60%]' alt='opera logo' />
          </div>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={brand3} className='w-[80%] sm:w-[60%]' alt='dpd logo'/>
          </div>
        </div>


        <div className='w-full h-20  flex justify-center items-center gap-2 md:h-24'>
          <div className='w-[45%] h-[90%]  flex justify-center items-center'>
            <img src={brand4} className='w-[80%] sm:w-[50%]' alt='panasonic logo'/>
          </div>
          <div className='w-[45%] h-[90%]  flex justify-center items-center'>
            <img src={brand5} className='w-[80%] sm:w-[50%]'  alt='stacfuel logo'/>
          </div>
        </div>


        <div className='w-full h-20  flex justify-center items-center gap-2'>
         <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={brand6} className='w-[90%] sm:w-[60%]' alt='db logo'/>
          </div>
          <div className='w-[30%] h-[90%] flex justify-center items-center'>
            <img src={brand7} className='w-[80%] sm:w-[50%]' alt='caritas logo'/>
          </div>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={brand8} className='w-[80%] sm:w-[50%]' alt='t logo'/>
          </div>
        </div>
    
     </div>

     <div className='w-full h-[55%]  flex justify-center items-center p-4 flex-col sm:mt-6 sm:p-7 lg:w-[50%] lg:h-full'>
      <p>For over 20 years, IU has established partnerships with leading global companies. This offers you the chance to gain firsthand <span className='font-bold'> experience through internships and projects </span>and allow us to adapt our learning content to the ever-evolving needs of the labour market. You will benefit from an education designed to bridge the gap between theory and real-world practice, ensuring your readiness for your future career. </p>
     
     <button type='button' className='outline-none p-3 border-solid border-blue-700 border-2 mt-8 rounded-lg font-bold  xl:mt-14  xl:pl-8 xl:pr-8 hover:border-blue-400' > Discover All our Partners</button>
     </div>
     </div>
      
    </div>




    {/* PAGE 7 */}
    <div className='w-full min-h-screen  flex flex-col justify-center items-center gap-5 pb-4 pt-4 lg:flex-row lg:min-h-[45vh] xl:min-h-[90vh] '>
      <div className='w-[95%] min-h-[64vh] rounded-xl  lg:min-h-[90%] lg:w-[45%]' style={{backgroundColor:"#F5F4F3"}}>
       
        <div className='w-full h-[40%]  flex justify-center items-center relative p-4'>
          <img src={orange1} className='rounded-xl'alt='laptop illustration' />
          <div className='w-28 h-12 top-[85%] left-6 bg-orange-400 absolute flex justify-center items-center sm:top-[100%] md:top-[85%] sm:left-8 md:left-20 lg:top-[85%] lg:left-12 xl:top-[85%]'>
          <p className='font-bold text-2xl'>Online</p>
        </div>
        </div>
        <div className='w-full h-[60%]  flex flex-col justify-center items-center p-4  sm:items-start sm:pl-10'>
          <ul className='leading-8' >
            <li className='list-disc ml-3 '>Study Whenever you want 100% online</li>
            <li className='list-disc ml-3 '>Choose your own pace and take as long as you need</li>
            <li className='list-disc ml-3 '>Start at anytime from anywhere</li>
          </ul>

          <button type='button'  className='outline-none pl-6 pt-2 pb-2 font-bold pr-6 rounded-md mt-8 border-2 border-solid border-blue-700 hover:border-blue-400'>Discover more</button>
        </div>
      </div>
      <div className='w-[95%] min-h-[64vh]  rounded-xl   lg:min-h-[90%] lg:w-[45%] ' style={{backgroundColor:"#F5F4F3"}}>
      
        <div className='w-full h-[40%] relative  flex justify-center items-center p-4'>
          <img src={orange2} className='rounded-xl' alt='university illustration' />
          <div className='min-w-28 h-12 top-[85%] left-6 bg-orange-400 absolute flex justify-center items-center p-2 sm:top-[55%] sm:left-8 md:top-[85%] md:left-20 lg:top-[85%] lg:left-12 xl:top-[85%]'>
          <p className='font-bold text-2xl'>On Campus</p>
        </div>
        </div>
        <div className='w-full h-[60%]  flex flex-col justify-center items-center p-4  leading-8 sm:items-start sm:pl-10'>
          <ul >
            <li className='list-disc ml-3'>Learn in small groups and in close contact with your lecturers</li>
            <li className='list-disc ml-3'>Start 4x per year from one of our locations in Germany</li>
            <li className='list-disc ml-3'> Hybrid studies (online + on-site leading)
              possible
            </li>
          </ul>
          <button type='button'  className='outline-none pl-6 pt-1 pb-1 font-bold pr-6 rounded-md mt-3 border-2 border-solid border-blue-700 xl:mt-8 hover:border-blue-400'>Discover more</button>
        </div>
      </div>
    </div>

    {/* FORM  */}
    <Suspense fallback={<div>Loading.....</div>}>
    <Form/>
    </Suspense>
     

    {/* PAGE 8 */}
    <div className='w-full h-screen  pt-7 flex flex-col justify-center items-center gap-8 lg:h-[80vh] xl:h-[110vh]' style={{backgroundColor:"#FFDCB0"}}>
      <h1 className='text-center  text-3xl font-bold md:text-4xl  '>This is What our Students say</h1>

      <div className='w-[95%] h-[59%] flex overflow-hidden p-3   '>
        <div  className={` flex gap-7 justify-center items-center  xl:gap-16`} style={{transform:`translateX(-${count}px)`,transition:"all 0.6s ease-in-out"}}>
          <div className={`w-[280px] h-[99%] bg-white rounded-lg shadow-lg shadow-slate-500 sm:w-[550px] sm:p-7    md:w-[700px] lg:w-[500px] xl:w-[330px] xl:p-2`}>
            <div className='w-full h-[70%]  flex justify-center items-center text-center text-[1.1rem] text-slate-600 p-2'>
              <p>Being a student and not having a job can be frustrating . This is what led me to choose IU because I believe I will find good job placement after my studies. It brings people from different backgrounds together and shpaes them inot professionals.</p>
            </div>
            <div className='w-full h-[30%]  flex justify-evenly items-center md:justify-center md:gap-5'>
              <div className='w-24 h-24 rounded-full  border-2 border-solid' style={{borderColor:"#FFDCB0"}}>
                <img src={rez1} className='rounded-full w-[99%]' alt='girl'/>
              </div>
              <div className='w-40 h-full  flex flex-col justify-center items-center'>
                <p className='font-bold'>Riziki Cinama</p>
                <p className='font-bold'>B.Sc. Data Science</p>
                <p>Congo</p>
              </div>
            </div>
          </div>
          <div className='w-[280px] h-[99%] bg-white rounded-lg shadow-lg shadow-slate-500 sm:w-[550px] sm:p-7  md:w-[700px]  lg:w-[500px] xl:w-[330px] xl:p-2'>
            <div className='w-full h-[70%]  flex justify-center items-center text-center text-[1.1rem] text-slate-600 p-5'>
              <p>As a student best decision of my life is to study with IU. By studying in IU I have lot of oppertunities around the world.</p>
            </div>
            <div className='w-full h-[30%]  flex justify-evenly items-center p-4 md:justify-center md:gap-5'>
              <div className='w-24 h-24 rounded-full  border-2 border-solid flex justify-center items-center' style={{borderColor:"#FFDCB0"}}>
                <img src="https://images.summitmedia-digital.com/cosmo/images/2020/04/15/best-selfie-poses-14-andrea-brillantes-1586944317.jpg" className='rounded-full w-[95%] h-[95%]' alt='girl'/>
              </div>
              <div className='w-40 h-full  flex flex-col justify-center items-center'>
                <p className='font-bold'>Siara</p>
                <p className='font-bold'>Master in CS</p>
                <p>Sweden</p>
              </div>
            </div>
            
          </div>
          <div className='w-[280px] h-[99%] bg-white rounded-lg shadow-lg shadow-slate-500 sm:w-[550px] sm:p-7  md:w-[700px]  lg:w-[500px] xl:w-[330px] xl:p-2'>
            <div className='w-full h-[70%]  flex justify-center items-center text-center text-[1.1rem] text-slate-600 p-2'>
              <p>IU is the right choice for me because of the smooth and fast online application process, industry- relevant courses, affordable tuition fees and a very flexible payment method.</p>
            </div>
            <div className='w-full h-[30%]  flex justify-evenly items-center md:justify-center md:gap-5'>
              <div className='w-24 h-24 rounded-full  border-2 border-solid' style={{borderColor:"#FFDCB0"}}>
                <img src={rez3} className='rounded-full w-[99%]' alt='black man'/>
              </div>
              <div className='w-40 h-full  flex flex-col justify-center items-center'>
                <p className='font-bold'>Ebenezer Osei</p>
                <p className='font-bold'>MBA - IT</p>
                <p>China</p>
              </div>
            </div>
          </div>
          <div className='w-[280px] h-[99%] bg-white rounded-lg shadow-lg shadow-slate-500 sm:w-[550px] sm:p-7  md:w-[700px]  lg:w-[500px] xl:w-[330px] xl:p-2'>
            <div className='w-full h-[70%]  flex justify-center items-center text-center text-[1.1rem] text-slate-600 p-4'>
              <p>I can make time for my studies. Between working and social life, I decide when and where to study.</p>
            </div>
            <div className='w-full h-[30%]  flex justify-evenly items-center p-4 md:justify-center md:gap-5 '>
              <div className='w-24 h-24 rounded-full  border-2 border-solid flex justify-center items-center ' style={{borderColor:"#FFDCB0"}}>
                <img src={rez2} className='rounded-full w-[99%]' alt='girl'/>
              </div>
              <div className='w-40 h-full  flex flex-col justify-center items-center'>
                <p className='font-bold'>Reon</p>
                <p className='font-bold'>Bachelor IT</p>
                <p>South Africa</p>
              </div>
            </div>
          </div>

          <div className='w-[280px] h-[99%] bg-white rounded-lg shadow-lg shadow-slate-500 sm:w-[550px] sm:p-7  md:w-[700px]  lg:w-[500px] xl:w-[330px] xl:p-2'>
            <div className='w-full h-[70%]  flex justify-center items-center text-center text-[1.1rem] text-slate-600 p-4'>
              <p>Studying in IU was the best choice of my life and I explore lot of internships. So if you want to study in IU nothing better than this.</p>
            </div>
            <div className='w-full h-[30%]  flex justify-evenly items-center p-4 md:justify-center md:gap-5'>
              <div className='w-24 h-24 rounded-full  border-2 border-solid flex justify-center items-center  ' style={{borderColor:"#FFDCB0"}}>
                <img src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/40/4403196c-665f-57a9-bf89-72f9d2cd9b3d/63e7e16e680f5.image.jpg?resize=1200%2C1200" className='rounded-full w-[99%]' alt='man'/>
              </div>
              <div className='w-40 h-full  flex flex-col justify-center items-center'>
                <p className='font-bold'>Shang Chi</p>
                <p className='font-bold'>Bachlors in SE</p>
                <p>China</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className='w-full h-12 flex justify-center items-center gap-7 '>
        <div className='w-12 h-12 rounded-full  flex justify-center items-center bg-white hover:bg-slate-200
        border-2 border-solid cursor-pointer ' style={{borderColor:"#8A7C6C"}}>


          <i className="  fa-solid fa-arrow-left text-3xl" style={{color:"#60564A"}} onClick={()=>left()}></i>
          
          </div>
        <div className='w-12 h-12 rounded-full bg-white flex justify-center items-center duration-1000 border-2 hover:bg-slate-200 border-solid cursor-pointer' style={{borderColor:"#8A7C6C"}} onClick={()=>right()}>
        <i className=" fa-solid fa-arrow-right text-3xl" style={{color:"#60564A"}} >
    
        </i>
        </div>
      </div>
      <p className='text-center font-bold underline' style={{color:"#60564A"}}>READ SUCCES STORIES</p>
    </div>



    {/* PAGE 8 */}
     
    <div className='w-full min-h-screen  pt-10  lg:pt-24 lg:min-h-[40vh] xl:pt-16xl:min-h-[90vh]'>
      <h2 className='text-center font-bold mb-4 text-[1.7rem] sm:mb-9 sm:text-3xl lg:text-4xl lg:text-start lg:ml-14 '>Our Alumni Work At</h2>
     <div className='w-full h-[90%] lg:flex'>

     <div className='w-full h-[50%]  flex flex-col gap-5  justify-center items-center lg:w-[50%] lg:h-full '>
     
        <div className='w-full h-20  flex justify-center items-center gap-2'>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={comp1} className='w-[90%] sm:w-[60%]' alt='campgemini logo' />
          </div>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={comp2} className='w-[80%] sm:w-[60%]' alt='sofitel logo'/>
          </div>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={comp3} className='w-[80%] sm:w-[60%]' alt='bmw logo' />
          </div>
        </div>


        <div className='w-full h-20  flex justify-center items-center gap-2 md:h-24'>
          <div className='w-[45%] h-[90%]  flex justify-center items-center'>
            <img src={comp4} className='w-[80%] sm:w-[50%]' alt='lavazza logo'/>
          </div>
          <div className='w-[45%] h-[90%]  flex justify-center items-center'>
            <img src={comp5} className='w-[80%] sm:w-[50%]' alt='accnture logo'/>
          </div>
        </div>


        <div className='w-full h-20  flex justify-center items-center gap-2'>
         <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={comp6} className='w-[90%] sm:w-[60%]' alt='mhp logo' />
          </div>
          <div className='w-[30%] h-[90%] flex justify-center items-center'>
            <img src={comp7} className='w-[80%] sm:w-[50%]' alt='microsoft logo' />
          </div>
          <div className='w-[30%] h-[90%]  flex justify-center items-center'>
            <img src={comp8} className='w-[80%] sm:w-[50%]' alt='tuigroup logo' />
          </div>
        </div>
    
     </div>

     <div className='w-full h-[55%]  flex justify-center items-center p-4 flex-col sm:mt-6 sm:p-7 lg:w-[50%] lg:h-full'>
      <p className='mb-7 mt-8 font-bold text-xl'>94% of our graduates find a job within the first three months of graduating</p>
      <p>We are proud  of what ou network of alumni have achieved. As per fernstudiumcheck.de,Germany leading online studies review protal, <span className='font-bold'>94% of IU graduates find a job within 3 months</span> of graduating. The practical and industry-relavant nature of all of our degrees mean that our graduates stand out from the crowd and go straight into jobs at industry-leading companies.</p>
     
     <button type='button' className='outline-none p-3 border-solid border-blue-700 border-2 mt-8 rounded-lg font-bold  xl:mt-14  xl:pl-8 xl:pr-8 hover:border-blue-400' >EXPLORE MORE</button>
     </div>
     </div>
      
    </div>

    {/* PAGE 9 */}

    <div className='w-full h-[90vh] flex justify-center items-center  sm:h-[70vh]  md:h-[50vh] mb-4'>
    <div className='w-full h-[100%] flex justify-center items-center  md:h-[90%]' style={{backgroundColor:"#FFDCB0"}}>
        <div className='w-[90%] h-[70%]  rounded-xl p-3  sm:h-[75%] sm:p-6 md:w-[95%] md:h-[90%] md:p-3 lg:h-[80%] lg:pl-7 lg:flex xl:h-[65%] shadow-md shadow-slate-400' style={{backgroundColor:"#FFF8EF"}}>
         
         <div className='w-full h-[80%] flex flex-col justify-center items-center lg:w-[75%] lg:h-full  xl:items-start xl:pl-4 ' >
          <h1 className='text-[1.3rem] font-bold text-center mb-3 sm:text-2xl sm:text-start md:text-[1.7rem] md:mb-4 lg:text-3xl lg:mb-2'>When does school start at IU? Whenever  you’re ready!</h1>
          <p className='mb-3 text-[0.9rem] text-center sm:text-start  sm:text-[1.1rem] md:text-[1rem]  md:mb-3 lg:text-[1.2rem] lg:mb-3  xl:text-[0.9rem]'>Apply by <span className='font-bold'>September 12th</span>,pick <span className='font-bold'>your own starting date</span> and secure your study spot</p>
        
          <p className='text-center text-[1.1rem] sm:text-start sm:text-[1.1rem] md:text-[1.2rem]  lg:text-[1.1rem] xl:text-[0.9rem]'> Level up in 2024: stat your career-transforming degree online. Submit your application and <span className='font-bold'>start your new education journy,on your own terms.</span></p>
         </div>
         <div className='flex justify-center items-center w-full h-[20%] lg:w-[25%] lg:h-full  lg:border-l-[1px] lg:border-solid lg:border-slate-300 lg:ml-3 '>
          <button className='outline-none border-none p-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-400  lg:p-5 xl:p-3' type='button'>APPLY NOW</button>
         </div>

        </div>
      </div>

    </div>

    

    {/* PAGE 10 */}
    <div className='w-full min-h-screen  flex flex-col gap-14 justify-center items-center pb-2 lg:mt-9 lg:mb-10'>
      <div className='w-[95%] min-h-[30vh]  lg:flex '>
        <div className='w-full min-h-[10vh]   flex justify-center items-center p-2 lg:w-[50%]'>
          <video src={video} controls className='w-[95%] rounded-lg' ></video>
        </div>
        <div className='w-full min-h-[20vh] p-3  flex flex-col justify-center items-center gap-4 lg:w-[50%]'>
          <h1 className='text-2xl font-bold w-full text-start mb-4 '>Learn from the best</h1>
          <p>Your professors are here to help you succeed. Benefit from their business world experience, academic expertise and gloabal mind-set.</p>
          <p>At IU international University of Applied Sciences, we believe that the key for building high-quality study programmers is having a high-quality teaching staff. Thats why we place and emphasis on finding the best professors and lecturers, whom all have to meet our high standards by having an excellent academic reputation, subject-specific expertise, pracitcal experience and a strong international approach.</p>
          <button type='button' className='outline-none border-2 border-solid border-blue-700 p-3 font-bold rounded-lg hover:border-blue-400'>Find out More</button>
        </div>
      </div>

      <div className='w-[95%] min-h-[30vh]  lg:flex lg:flex-row-reverse'>
        <div className='w-full min-h-[10v] flex justify-center items-center p-3   lg:w-[50%]'>
          <img src={last1} className='w-[95%] rounded-lg' alt='man'/>
        </div>
        <div className='w-full min-h-[20vh] p-4 flex flex-col justify-center items-center gap-4 lg:w-[50%]'>
          <h1 className='font-bold text-2xl w-full text-start mb-4'>Meet our Advisory</h1>
          <p className='mb-4'>IU advisory board ,which offers expert advice to the university on research and education topics,consists of noted figures such as Jimmy Wales(Wikipedia),Raffaela Rein(Career Foundry), and Karina Montilla Edmonds (SAP),among others</p>
          <button type='button' className='outline-none border-2 border-blue-700 border-solid p-2 rounded-lg font-bold hover:border-blue-400'>LEARN MORE</button>
        </div>
      </div>

      <div className='w-[95%] min-h-[30vh]  lg:flex'>
        <div className='w-full min-h-[10v] flex justify-center items-center p-3  lg:w-[50%]'>
          <img src={last2} className='w-[95%] rounded-lg' alt='girl'/>
        </div>
        <div className='w-full min-h-[20vh] p-4 flex flex-col justify-center items-center gap-4 lg:w-[50%]'>
          <h1 className='font-bold text-2xl w-full text-start mb-4'>Free Webinars</h1>
          <p className='mb-4'>We regularly offer free webinars about studying at IU International University of Applied Sciences. These events give you the opportunity to get to know our University of Applied Sciences and our wide range of educational offerings. The webinars are hosted by our study advisors, who offer expert knowledge about studying at IU, as well as an opportunity to ask any questions you might have at the end of each webinar.</p>
         
        </div>
      </div>
      
    </div>


    {/* PAGE 11 */}
    <div className='w-full min-h-screen  flex flex-col justify-center items-center gap-5 pt-5 pb-5 md:flex-row xl:justify-start xl:pl-10'>
      <div className='w-[95%] min-h-[80vh]  flex flex-col justify-center items-center gap-2 border-[2.5px] border-solid border-orange-400 rounded-xl shadow-md shadow-slate-400 md:w-[45%] xl:w-[30%]'>
        <div className='w-full min-h-20  flex justify-center'>
          <p className='w-40 flex
           justify-center items-center font-bold text-xl  h-16 bg-orange-500'>Tue 27, August</p>
        </div>
        <div className='w-full min-h-[30vh]  flex justify-center items-center'>
          <img src={img1}  className='w-[90%] rounded-xl' alt='girl'/>
        </div>
        <div className='w-full min-h-[50vh]  flex flex-col justify-center items-center p-3 gap-7'>
          <h2 className='text-xl font-bold sm:w-full sm:text-start sm:text-2xl md:text-xl'>Get to Know IU on-campus  - 27.08.2024</h2>
          <p>Want to know more about hte advatages of learning in Germany? Sign up for our online webinar with our experieced study advisors now!</p>
          <h3 className='underline font-bold text-xl'>Register here</h3>
        </div>
      </div>


      <div className='w-[95%] min-h-[80vh]  flex flex-col justify-center items-center gap-2 border-[2.5px] border-solid border-orange-400 rounded-xl shadow-md shadow-slate-400 md:w-[45%] xl:w-[30%]'>
        <div className='w-full min-h-20  flex justify-center'>
          <p className='w-52 whitespace-nowrap flex
           justify-center items-center font-bold text-xl  h-16  bg-orange-400'>Wed 11, September</p>
        </div>
        <div className='w-full min-h-[30vh]  flex justify-center items-center'>
          <img src="https://previews.123rf.com/images/tsyhun/tsyhun2004/tsyhun200400587/145602633-beautiful-business-woman-in-smart-casual-wear-working-on-laptop-in-the-office.jpg"  className='w-[76%] rounded-xl' alt='girl'/>
        </div>
        <div className='w-full min-h-[50vh]  flex flex-col justify-center items-center p-3 gap-7'>
          <h2 className='text-xl font-bold sm:w-full sm:text-start sm:text-2xl md:text-xl'>Get to Know IU on-campus  - 11.09.2024</h2>
          <p>Discover more about our online learning environment by signing up for our free webinar. Our study advisors will ask you through various aspects of online learning</p>
          <h3 className='underline font-bold text-xl'>Register here</h3>
        </div>
      </div>
     
    </div>


    {/* PAGE 12 */}
     <Footer/>

    </div>
    
    </>
    
   
   
  )
}

export default Home; 