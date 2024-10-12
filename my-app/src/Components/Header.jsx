import React from 'react'

const Header = () => {
  return (
    <div className='py-12 header overflow-hidden'>
        <div className="container lg:px-12">
            <div className="header_content p-6 lg:p-12 text-center rounded-[0.5rem]">
                <div className="m-8 lg:m-12">
                    <h1 className='font-bold lg:text-5xl text-3xl mb-2'>A warm welcome!</h1>
                    <p className='fs-4  mb-4'>Bootstrap utility classes are used to create this jumbotron since the old 
                        component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <button className='text-xl px-4 py-2 rounded-[8px] bg-[#0d6efd] text-white font-normal'>Call to action</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header