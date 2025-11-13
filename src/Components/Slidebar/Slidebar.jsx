import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GiMailbox, GiMayanPyramid, GiPhone } from 'react-icons/gi'

const Slidebar = () => {
  return (
    <div>
        <div className="backdrop-brightness-105 text-white w-72 h-full flex flex-col justify-center items-center px-4 py-8 rounded-2xl shadow-xl">
            <div className='flex flex-col justify-center items-center gap-6'>
                <img src="/src/assets/images/siam.png" alt=""  className='w-40 rounded-3xl'/>

                <div>
                    <h2 className='text-base font-medium tracking-wide'>Rupok Hossain Siam</h2>
                    <p className='bg-[#2b2b2c] mt-4 mx-4 rounded-lg text-xs font-light inline-block px-4 py-2'>Frontend Developer</p>
                </div>
            </div>

            <div className='flex flex-col overflow-hidden gap-6 w-full '>
                <div className='bg-gray-600 h-0.5 w-full my-8'></div>

                <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all  text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center'>
                        <GiMailbox/>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Gmail</p>
                        <a href="" className='text-sm font-light overflow-hidden'>rh.siam999@gmail.com</a>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all  text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center'>
                        <GiPhone/>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Phone</p>
                        <a href="" className='text-sm font-light'>01636755280</a>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all  text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center'>
                        <FaGithub/>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Github</p>
                        <a href="https://github.com/Rupokhossain" className='text-sm font-light'>github.com/Rupokhossain</a>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all  text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center'>
                        <GiMayanPyramid/>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Location</p>
                        <address className='text-sm font-light'>Merul Badda, <br></br> Dhaka-1212</address>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slidebar