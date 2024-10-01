import { useContext,useRef,useState } from "react";



import logo from '../Images/IU logo.png';



export function Header(){



   
   
  
      const [modal,setmodal] = useState(false);
      const [show,setshow] = useState(false);
      const [list1,setlist1] = useState(false);
      const [list2,setlist2] = useState(false);
      const [list3,setlist3] = useState(false);
      const [list4,setlist4] = useState(false);
      const [list5,setlist5] = useState(false);
     
  
  
  
    
     
      
      const ref = useRef();
      
      
      
     
     
    
  
      return(
  
  
      
   
      
   
  <>
  
   <nav className="overflow-hidden  max-w-full w-[1290px] mt-0 mb-0 ml-auto mr-auto   flex  " >
  
   <div id="hero" ref={ref} onClick={()=>setmodal(!modal)}  className={` w-full h-[100vh] left-0 top-0  fixed flex justify-center pt-24 z-50 ${modal? 'flex':'hidden'} `} style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
    <div className="w-[100%] relative h-[8%] md:h-[5rem] xl::h-[10%] flex justify-center items-center md:w-[80%] lg:w-[60%] xl:w-[50%]">
      <input  type="text" placeholder="What do you want to study?" className="w-[90%] h-[80%] outline-none border-2 border-solid   pl-12 rounded-xl" autoFocus/>
      <i className="fa-solid absolute left-5 sm:left-8 xl:left-8 fa-magnifying-glass w-[15%] h-[80%] rounded-tr-lg rounded-br-lg flex justify-center items-center text-slate-400 text-2xl sm:w-[8%]"></i>
    </div>
   </div>
  
   <div className="   flex flex-col gap-5   absolute top-[70px]">
      <div className="w-full   flex flex-col gap-5">
             
             <div   className={` ${list1 ? "flex":"hidden"}  cont w-full min-h[90vh]  bg-white cursor-pointer flex  gap-5 p-10 `}  onMouseEnter={()=>setlist1(true)} onMouseLeave={()=>setlist1(false)}>
             <div  className=" p-3 whitespace-nowrap">
                <ul className="leading-10">
                  <li className="font-bold "><h2>Data & IT</h2></li>
                  <li>AI  in Business</li>
                  <li>Applied Artificial intellignece</li>
                  <li>Business & IT</li>
                  <li>Cloud Computing</li>
                  <li>Computer Science</li>
                  <li>Computer Science</li>
                  <li>Cyber Security</li>
                  <li>Data Science</li>
                  <li>Engineering</li>
                  <li>Industrial Engineering & Management</li>
                  <li>Robotics</li>
                  <li>Software Development</li>
                </ul>
              </div>
            
  
            
              <div className=" p-4 leading-10 whitespace-nowrap" >
                <ul>
                  <li className="font-bold "><h2>Business & Management</h2></li>
                  <li>Aviation Mnagement</li>
                  <li>Business Administration</li>
                  <li>Digital Business</li>
                  <li>Entrepreneurship</li>
                  <li>Hospitality Management</li>
                  <li>International Management</li>
                  <li>Management</li>
                </ul>
              </div>
            
  
            
              <div className=" whitespace-nowrap p-4 leading-10 " >
                <ul>
                  <li className="font-bold"><h2>Specialised Beachelors in AI in Business</h2></li>
                  <li>AI in Business - Digital Markering & SEO</li>
                  <li>AI in Business - Finance</li>
                  <li>AI in Business - HR</li>
                  <li>AI in Business - HealthCare & Pharmaceuticls</li>
                  <li>AI in Business - Marketing & E-Commerce</li>
                  <li>AI in Business - Production</li>
                  <li>AI in Business - Sales & E-Commerce</li>
                  <li>AI in Business - Transport & Logistics</li>
                </ul>
              </div>
           
  
            
              <div className="  p-4 " >
                <ul>
                  <li className="font-bold leading-10"><h2>Health & Social Care</h2></li>
                  <li>International HealthCare Management</li>
                </ul>
              </div>
             </div>
              
             
             {/* 2nd */}
  
  
             <div  className= {` ${list2 ? "flex":"hidden"}   cont w-full min-h[90vh] bg-white  cursor-pointer gap-6 p-10`}  onMouseEnter={()=>setlist2(true)} onMouseLeave={()=>setlist2(false)}>
             <div  className=" p-3 whitespace-nowrap">
             <ul className="leading-10">
                  <li className="font-bold"><h2>Data & IT</h2></li>
                  <li>Applied Artificial Intelligence</li>
                  <li>Artificial Intelligence</li>
                  <li>Business & IT</li>
                  <li>Computer Science</li>
                  <li>Cyber Security</li>
                  <li>Data Management</li>
                  <li>Data Science</li>
                  <li>DevOps And Cloud Computing</li>
                  <li>DevIP and Cloud Computing</li>
                  <li>Management</li>
                  <li>Engineering Management</li>
                  <li>Information Technology Management</li>
                  <li>Machine Learning</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
            
  
            
              <div className=" p-4 leading-10 " >
              <ul>
                  <li className="font-bold"><h2>Specialised masters in AI</h2></li>
                  <li>Applid Artificial Intelligence</li>
                  <li>Applied Artificial intelligence and NLP</li>
                  <li>
                    Applied Artificial Intelligence for Supply Chain Mangement
                  </li>
                  <li>Applied Artificial Intelligence in Automotive</li>
                  <li>Applied Artificial intelligecne in FinTech</li>
                  <li>Applied Artificial Intelligence in HealthCare</li>
                  <li>
                    Applied Artificial Intelligence In Marketing and E-Commerce
                  </li>
                  <li>Applied Artificial Intelligence in Production</li>
                </ul>
              </div>
            
  
            
              <div className=" whitespace-nowrap p-4 leading-10 " >
              <ul>
                  <li className="font-bold"><h2>Business & Management</h2></li>
                  <li>Business Intelligence</li>
                  <li>Digital Innovation & Intrapreneruship</li>
                  <li>Digital Product Managment</li>
                  <li>Finance,Accounting & Taxation</li>
                  <li>Human Resource Management</li>
                  <li>Innovation & Etrepreneuship</li>
                  <li>International Management</li>
                  <li>Management + Majors</li>
                  <li>Procut Management</li>
                  <li>Project Management</li>
                </ul>
              </div>
           
  
            
              <div className="  p-4 " >
              <ul className="leading-10">
                  <li className="font-bold"><h2>Marketing & Communication</h2></li>
                  <li>Digital Marketing</li>
                  <li>GRowth Hacking</li>
                  <li>Growth hacking for Entrepreneurs</li>
                  <li>Marketing Management</li>
                </ul>
              </div>
             </div>
            
  
            {/* 3RD */}
            <div className={` ${list3 ? "flex":"hidden"}   cont w-[100vw]  min-h[90vh] bg-white cursor-pointer   gap-6 p-10`}  onMouseEnter={()=>setlist3(true)} onMouseLeave={()=>setlist3(false)}>
             <div  className=" p-3 whitespace-nowrap">
             <ul className="leading-10">
                  <li className="font-bold"><h2>General MBAs</h2></li>
                  <li>Master of Business Administration</li>
                  <li>One-year MBA</li>
                </ul>
              </div>
            
  
            
              <div className=" p-4 leading-10 " >
              <ul>
                  <li className="font-bold"><h2>Specialised MBAs</h2></li>
                  <li>Artificial Intelligence</li>
                  <li>Big Data Management</li>
                  <li>E-Sports Management</li>
                  <li>Engineering Management</li>
                  <li>Finance & Accouting</li>
                  <li>HealthCare Management</li>
                  <li>Human Resource Management</li>
                  <li>IT Management</li>
                  <li>IT Management</li>
                  <li>Innovation & Entrepreneruship</li>
                  <li>International Marketing</li>
                  <li>Salesforce & Sales Management</li>
                  <li>Supply Chaing Management</li>
                </ul>
              </div>
            
              
             </div>
  
  
             {/* 4rth */}
             <div className={` ${list4 ? "flex":"hidden"} cont w-full min-h[90vh] bg-white cursor-pointer  gap-32 p-10`} onMouseEnter={()=>setlist4(true)} onMouseLeave={()=>setlist4(false)}>
             <div  className=" p-3 whitespace-nowrap"   >
             <ul className="leading-10">
                  <li className="font-bold"><h2>Why Study with Us</h2></li>
                  <li>About Us</li>
                  <li>Accreditations & Rankings</li>
                  <li>Academic Partnership</li>
                </ul>
                <ul className='leading-10'>
                  <li className="font-bold"><h2>Your Career Path</h2></li>
                  <li>Career Offices</li>
                </ul>
              </div>
            
  
            
              <div className=" p-4 leading-10 " >
              <ul>
                  <li className="font-bold"><h2>Become a Student</h2></li>
                  <li>Tuition Fees</li>
                  <li>High School Diploma</li>
                  <li>Master For Professionals</li>
                  <li>Forms & Documentation</li>
                </ul>
                <ul className="leading-10">
                  <li className="font-bold"><h2>Even More About IU</h2></li>
                  <li>Blog & News</li>
                  <li>FAQ</li>
                  <li>Upcoming Live Events</li>
                  <li>Research at IU</li>
                  <li>Chat With Our Students</li>
                </ul>
              </div>
            
  
            
              <div className=" whitespace-nowrap p-4 leading-10 " >
              <ul>
                  <li className="font-bold"><h2>Your Online Studies at IU</h2></li>
                  <li>Online Degrees</li>
                  <li>myCampus</li>
                  <li>IU Learn App</li>
                  <li>Learn With AI</li>
                  <li>Online Exams</li>
                </ul>
              </div>
           
  
            
              <div className="  p-4 " >
              <ul className="leading-10">
                  <li className="font-bold"><h2>The IU Communiy</h2></li>
                  <li>Professors & Lectures</li>
                  <li>Student Testimonials</li>
                  <li>Alumni</li>
                  <li>STrategic Partnership</li>
                  <li>Bring a Friend</li>
                </ul>
              </div>
             </div>
            
            {/* 5th */}
            
            <div className={` ${list5 ? "flex":"hidden"} cont w-screen min-h[90vh] bg-white cursor-pointer gap-14 p-10`} onMouseEnter={()=>setlist5(true)} onMouseLeave={()=>setlist5(false)}>
             <div  className=" p-3 whitespace-nowrap"  >
             <ul className="leading-10">
                  <li className="font-bold"><h2>Learning on Campus - Programmes</h2></li>
                  <li>Orientation Week</li>
                  <li>IU Pathway Programme</li>
                </ul>
              </div>
            
  
            
              <div className="-400 p-4 leading-10 " >
              <ul>
                  <li className="font-bold"><h2>Campus Location</h2></li>
                  <li>Campus Berlin</li>
                  <li>Campus Bad Honnef</li>
                </ul>
              </div>
            
  
            
              <div className=" whitespace-nowrap p-4 leading-10 " >
              <ul>
                  <li className="font-bold"><h2>Why Germany? Study at the Home of IU</h2></li>
                  <li>Life as a campus Student</li>
                </ul>
              </div>
           
  
            
              <div className="  p-4 " >
              <ul>
                  <li className="font-bold"><h2>On Campus FAQ</h2></li>
                </ul>
              </div>
             </div>
            
            
  
      </div>
    </div>
  
  <div className="  overflow-hidden   w-screen h-20 flex justify-between items-center pr-7  border-b-2 border-slate-300     xl:w-screen xl:h-20 xl:pt-2  xl:flex xl:justify-center  xl:items-center  xl:gap-10 ">
  <div className="z-20 w-40 h-full    xl:w-48 xl:h-3/4  xl:flex xl:justify-center items-center" style={{backgroundColor:"#FFFFFF"}}>
   <img src={logo} alt="A IU logo"  />
  </div>
  
  <ul className="xl:flex hidden xl:gap-6 xl:cursor-pointer  ">
  
   <li className={`  font-bold relative flex gap-1 h-7  before:content-[''] before:w-20 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block  li1   xl:h-10 xl:flex xl:justify-center xl:items-center ` } onMouseEnter={()=>setlist1(true)} onMouseLeave={()=>setlist1(false)}>BACHELOR
   <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
   </li>
  
   <li className="font-bold flex gap-1 relative before:content-[''] before:w-16 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block li2  xl:h-10 xl:flex xl:justify-center xl:items-center" onMouseEnter={()=>setlist2(true)} onMouseLeave={()=>setlist2(false)} > MASTER
   <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
   </li>
  
   <li className="font-bold flex gap-1 relative before:content-[''] before:w-10 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block li xl:h-10 xl:flex xl:justify-center xl:items-center"
   onMouseEnter={()=>setlist3(true)} onMouseLeave={()=>setlist3(false)}>MBA
   <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
   </li>
  
   <li className="font-bold flex gap-1 relative before:content-[''] before:w-14 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block li xl:h-10 xl:flex xl:justify-center xl:items-center "  onMouseEnter={()=>setlist4(true)} onMouseLeave={()=>setlist4(false)}>ABOUT
   <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
   </li>
  
   <li className="font-bold">|</li>
   <li className="font-bold flex whitespace-nowrap gap-1  relative before:content-[''] before:w-24 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block  li xl:h-10 xl:flex xl:justify-center xl:items-center"  onMouseEnter={()=>setlist5(true)} onMouseLeave={()=>setlist5(false)}>ON CAMPUS
   <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
   </li>
  
  </ul>
  
  
  
  <ul className={`absolute ${show?"top-[80px]":"top-[-1500px]"} duration-300 z-10 w-screen h-screen bg-white flex flex-col p-4 gap-4 xl:gap-6 xl:cursor-pointer xl:hidden`}>
  
  <li className="font-bold relative flex gap-1 h-7  before:content-[''] before:w-20 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block ">BACHELOR
  <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
  </li>
  
  <li className="font-bold flex gap-1 relative before:content-[''] before:w-16 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block "> MASTER
  <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
  </li>
  
  <li className="font-bold flex gap-1 relative before:content-[''] before:w-10 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block ">MBA
  <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
  </li>
  
  <li className="font-bold flex gap-1 relative before:content-[''] before:w-14 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block border-solid border-b-2 border-black pb-4">ABOUT
  <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
  </li>
  
  
  <li className="font-bold flex whitespace-nowrap gap-1  relative before:content-[''] before:w-24 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:rounded-xl before:hidden  hover:before:block ">ON CAMPUS
  <svg width='15' height='15' className="mt-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
  </li>
  </ul>
  
  
  
  <div className="flex gap-4 xl:gap-0 ">
  <svg onClick={()=>setmodal(true)} className="z-40 mt-1  xl:cursor-pointer xl:mt-1 hover:fill-slate-600 duration-300 transition-all" width='23' height='23' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
  /></svg>
  
  <div className="flex  b w-12   xl:hidden">
  
  
  <svg onClick={()=> setshow(true)} width='30' height='30' className={` z-50 xl:hidden sm:mr-10 ${show ? "hidden":"block"} absolute`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
  
  <svg onClick={()=>setshow(false)} width='30' height='30' className={`z-50 absolute  ${show ? "block":"hidden"} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
  </div>
  
  
  </div>
  
  
  
  
  
  <div className="absolute w-screen bg-white    top-[80px]  flex gap-3 justify-center p-2 items-center   xl:w-auto xl:flex xl:static xl:gap-4 xl:mr-4">
  <button className="bg-transparent pt-2 pb-2 pr-2 pl-2 sm:pr-16 sm:pl-16  xl:pt-3 xl:pb-3 xl:pr-5 xl:pl-5 rounded-md text-xs font-bold border-solid border-blue-700 border-2 whitespace-nowrap hover:border-blue-600 duration-200 transition-all">REQUEST FREE INFORMATION</button>
 

  <button  className="text-white pr-6 pl-6 pt-[0.62rem] pb-[0.62rem] sm:pr-20 sm:pl-20 xl:pt-3 xl:pb-3 xl:pr-5 xl:pl-5 rounded-md text-xs font-bold  border-solid bg-blue-700 whitespace-nowrap hover:bg-blue-600 transition-all duration-300">APPLY NOW</button>


 
 
  </div>
      
  </div>
  
  </nav>
  </>
  
         
      )
  }