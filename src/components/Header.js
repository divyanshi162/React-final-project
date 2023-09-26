import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-[#5bc0de] flex justify-center items-center flex-col py-24  gap-4'>
        <p className='text-5xl text-white'>ReactJS CRUD Boilerplate</p>
        <span className='block text-xl text-white'>with mock backend</span>
    </div>
  )
}

export default Header