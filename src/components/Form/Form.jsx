import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect } from "react";
export default function Form(){

   const Form =  useForm({
    defaultValues:{
        programme:"",
        english_skills:"",
        current_status:"",
        fee:"",
        country:"",
    }
   })
   const {register,handleSubmit,formState,reset} = Form;
   const {errors,isSubmitSuccessful} = formState;


   const submit = (data) => {

    console.log(data)
   
   }

   
   useEffect(()=>{
    if(isSubmitSuccessful)
    reset();
   },[isSubmitSuccessful])


    return(
        <div className='w-full min-h-[90vh] bg-[#F5F4F3] mt-10 pb-10 pl-2 pr-2  pt-4 md:pt-10 md:min-h-[50vh] xl:pl-4 xl:pr-4 xl:min-h-[100vh] xl:pb-20'>
    <h2 className='font-bold text-2xl mb-3 xl:text-3xl'>Get your free information material</h2>
    <p >In your free study brochure, you get more information about the study format (study online or in person), about our programmes and about studying with IU. Your digital brochure will be sent to you <span className='font-bold'>via emil shortly. Note:</span> All fields are required. </p>
        <form  noValidate onSubmit={handleSubmit(submit)} className='pt-4 pb-4   mt-4 ' id="form" name="form">
            <div className=' mb-2 md:flex md:justify-around'>
                <div className='mb-2 md:w-[48%]'>
                <label className='block mb-1 font-bold' htmlFor='programme'>Study Programme</label>
                <p className="font-bold text-red-600 text-[0.8rem]">{errors.programme?.message}</p>
                <select  className='w-[100%] h-14 pl-2  outline-none   border-[1px] border-solid border-black rounded-xl focus:border-t-[1.5px] focus:border-b-[1.5px]' name='programmes' id='programme' {...register("programme" ,{
                    required:{
                        value:true,
                        message:"Select Programme."
                    }
                })} >

                <option disabled  value='Study Programme'>Study Programme</option>
                <optgroup className='font-bold' label='Most Popular'>
                <option  value='B.A Business Administration'>B.A Business Administration</option>
                <option  value='B.Sc. Computer Science'>B.Sc. Computer Science</option>
                <option  value='MBA Master of Business Administration'>MBA Master of Business Administration</option>
                </optgroup> 


                <optgroup className='font-bold' label='BACHELOR'>
                <option  value='B.A Aviation Management'>B.A Aviation Management</option>
                <option  value='B.Eng. Industrial Engineering'>B.Eng. Industrial Engineering</option>
                <option  className='mb-4' value='B.Eng. Robotics'>B.Eng. Robotics</option>
                </optgroup> 

                <optgroup className='font-bold' label='MASTER'>
                <option  value='M.Sc. Cyber Security'>M.Sc. Cyber Security</option>
                <option  value='M.Sc. Software Engineering'>M.Sc. Software Engineering</option>
                <option  className='mb-4' value='M.Sc. Business & IT'>M.Sc. Business & IT</option>
                </optgroup> 

                <optgroup className='font-bold' label='MBA'>
                <option  value='MBA Finance'>MBA Finance</option>
                <option  value='MBA Accounting'>MBA Accounting</option>
                <option  className='mb-4' value='MBA Big Data'>MBA Big Data</option>
                </optgroup> 
                    
                </select>

                </div>



                <div className='md:w-[48%]'>
                <label className='block mb-1 font-bold' htmlFor='english_skills'>Please reate your English language skills.</label>
                <p className="text-red-600 text-[0.8rem] font-bold">{errors.english_skills?.message}</p>

                <select className='w-[100%] h-14 pl-2  outline-none   border-[1px] border-solid border-black rounded-xl focus:border-t-[1.5px] focus:border-b-[1.5px]'  id='english_skill' {...register("english_skills",{
                    required:{
                        value:true,
                        message:"Your English Skills."
                    }
                })}>

                
                <option  value='Beginner'>Beginner</option>
                <option  value='Intermediate'>Intermediate</option>
                <option  value='Advanced'>Advanced</option>
                <option  value='Proficient'>Proficient</option>
                </select>
                </div>
                
                
            </div>

            <div className=' md:flex md:justify-around'>
                <div className='mb-2 md:w-[48%]'>
                <label className='block mb-1 font-bold' htmlFor='status'>What describes your current status?</label>
                <p className="text-red-600 font-bold text-[0.8rem]">{errors.current_status?.message}</p>

                <select className='w-[100%] h-14 pl-2  outline-none   border-[1px] border-solid border-black rounded-xl focus:border-t-[1.5px] focus:border-b-[1.5px]' id='current_status' {...register('current_status',{
                    required:{
                        value:true,
                        message:"Required Field."
                    }
                })}>

                <option  value='Just Curious'>Just Curious</option>
                <option  value='Actively exploring Universities'>Actively exploring Universities</option>
                <option  value='Decided What to study ,but not Where'>Decided What to study ,but not Where</option>
                <option  value='Decided what and where to study'>Decided what and where to study</option>
                </select>
                </div>

                <div className='md:w-[48%]'>
                <label className='block mb-1 font-bold' htmlFor='fee'>How do you plan to pay for the tuition fees?</label>
                <p className="text-[0.8rem] font-bold text-red-600">{errors.fee?.message}</p>

                <select className='w-[100%] h-14 pl-2  outline-none   border-[1px] border-solid border-black rounded-xl focus:border-t-[1.5px] focus:border-b-[1.5px]' name='fee' id='fee' {...register("fee",{
                    required:{
                        value:true,
                        message:"Required Field."
                    }
                })}>

           
                <option  value='Salary'>Salary</option>
                <option  value='Personal Savings'>Personal Savings</option>
                <option  value='Employer Funding'>Employer Funding</option>
                <option  value='Student Loan'>Student Loan</option>
                </select>
                </div>
            </div>

            <div className=' mt-2 md:flex md:justify-around'>
                <div className='mb-2 md:w-[48%]'>
                <label className='block mb-1 font-bold' htmlFor='first_name'>First Name</label>
                <p className="text-[0.8rem] font-bold text-red-600">{errors.first_name?.message}</p>
                 <input className='w-[100%] h-14 rounded-xl border-solid border-[1px] border-black outline-none pl-2  focus:border-t-[1.5px] focus:border-b-[1.5px]' type='text' placeholder='First Name' id="first_name" autoComplete="true"  {...register("first_name",{
                    required:{
                        value:true,
                        message:"Your First Name."
                    },
                    pattern:{
                        value:/^[a-zA-Z]+$/,
                        message:"Invalid First Name."
                    }
                 })} />
                </div>

                <div className='mb-2 md:w-[48%]'>
                <label className='block mb-1 font-bold' htmlFor='last_name'>Last Name</label>
                <p className="text-[0.8rem] font-bold text-red-600">{errors.last_name?.message}</p>
                 <input className='w-[100%] h-14 rounded-xl border-solid border-[1px] border-black outline-none pl-2 focus:border-t-[1.5px] focus:border-b-[1.5px]' type='text' placeholder='Last Name' id="last_name" autoComplete="true"  {...register("last_name",{
                    required:{
                        value:true,
                        message:"Your Second Name."
                    },
                    pattern:{
                        value:/^[a-zA-Z]+$/,
                        message:"Invalid Second Name."
                    }
                 })} />
                </div>

               
            </div>



            <div className=' mt-2 md:flex md:justify-around'>
                <div className='mb-2 md:w-[32%]'>
                <label className='block mb-1 font-bold' htmlFor='mail'>E-mail</label>
                <p className="text-red-600 font-bold text-[0.8rem]">{errors.Mail?.message}</p>
                 <input className='w-[100%] h-14 rounded-xl border-solid border-[1px] border-black outline-none pl-2 focus:border-t-[1.5px] focus:border-b-[1.5px]' type='email' placeholder='max.mustermann@domain.com' id="Mail" autoComplete="true" {...register('Mail',{
                    required:{
                        value:true,
                        message:"Email is Required."
                    },
                    pattern:{
                        value:/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                        message:'Invalid email format',
                    },
                    validate:{
                        admin : (value)=>{
                            return(
                                value !== 'hassan@gmail.com' || 'Select another email.'
                            )
                        },

                        badDomain: (value)=>{
                            return(
                                     !value.endsWith('bdomain.com') || 'This domain is not Supported.'
                            )
                        },

                        available: async (value)=>{
                            const data = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
                            const reponse = await data.json();
                           return reponse.length == 0 || 'Email Already exists.'
                        }
                    }
                 })} />
                 
                 
                </div>
            

                <div className='mb-2 md:w-[32%]'>
                <label className='block mb-1 font-bold' htmlFor='phone'>Phone</label>
                <p className="text-red-600 text-[0.8rem] font-bold">{errors.phone?.message}</p>
                <div>
                <input className='w-[100%] h-14 rounded-xl border-solid border-[1px] border-black outline-none pl-2 focus:border-t-[1.5px] focus:border-b-[1.5px]' type='tel' id="phone" placeholder='+12 3456 7891012' autoComplete="true" {...register('phone',{
                    
                    required:{
                        value:true,
                        message:"Phone number is Required."
                    },
                    pattern:{
                        value:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                        message:'Invalid Pattern.'
                    }
                   
                 })} />
                
                </div>
                 
                </div>


                <div className='md:w-[32%]'>
                <label className='block mb-1 font-bold' htmlFor='country' >Country</label>
                <p className="text-red-600 font-bold text-[0.8rem]">{errors.country?.message}</p>
                <select className='w-[100%] h-14 pl-2  outline-none   border-[1px] border-solid border-black rounded-xl focus:border-t-[1.5px] focus:border-b-[1.5px]' name='country' id='country' {...register("country",{
                    required:{
                        value:true,
                        message:"Select a Country."
                    }
                    
                })}>
               

               
        
                <option  value='America'>America</option>
                <option  value='Bangladesh'>Bangladesh</option>
                <option  value='China'>China</option>
                <option  value='Pakistan'>Pakistan</option>
                <option  value='India'>India</option>
                </select>
                </div>
            </div>


            <div className=' mt-2 '>
                <p className='mb-2'>We value and repect your privacy. By continuing, you agree to IU <span className='font-bold underline'>data Protection</span> policy.
                </p>


                <div className=' flex gap-2 xl:mt-5' >
                    <div>
                    <input id='checkbox' className='w-14 h-14 md:w-8 md:h-8 xl:w-5 xl:h-5' type='checkbox' {...register("checkbox",{
                    required:{
                        value:true,
                        message:"Hit the Checkbox First"
                    }
                  })}/>
                 
                    </div>
                  <label className='mt-3 md:mt-1 xl:mt-0' htmlFor='checkbox'> <span className="text-red-600 text-[0.8rem] font-bold">{errors.checkbox?.message}</span> I agree to recieve personalised information about IU stdy programmes, events and discount offers by e-mail,SMS or WhatsApp.</label>

                </div>
            </div>
          
          <div className='w-[100%]  h-16 flex justify-center items-center mt-3 xl:mt-10 '>
          <input type='submit'   className='bg-blue-700 text-white font-bold  uppercase outline-none w-[95%] h-[80%] rounded-xl sm:w-[30%] xl:w-[20%] hover:bg-blue-500 cursor-pointer ' />
          </div>
          
        </form>

        
     </div>

    )
}