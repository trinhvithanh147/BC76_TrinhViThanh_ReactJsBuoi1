import React from 'react'
const Nav = () => {
    return (
        <div className='nav bg-[rgb(33,37,41)] py-2'>
            <div className="container lg:px-12">
                <div className="flex justify-between nav_content items-center">
                    <div className="nav_left">
                        <a href="#" className='text-[1.25rem] text-white no-underline py-[0.3125rem]'>Start Bootstrap</a>
                    </div>
                    <div className="nav_right">
                        <ul className="list-none text-white  flex flex-row">
                            <li ><a href="#" className='nav_link active'>Home</a></li>
                            <li><a href="#" className='nav_link'>About</a></li>
                            <li><a href="#" className='nav_link'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav