import React from 'react'
import { NavLink } from 'react-router-dom'
import Headers from './Headers'

function Services() {
  return (
    <div>
      <Headers />
      <div className='mt-10 absolute left-96 top-56'>
        <div>
          <h1 className='font-xl'>This is services page</h1>
        </div>
        <div className='mt-10'>
          <ul>
            <li>
              <NavLink to='/'>
                <span className='uppercase text-base hover:text-xl bg-orange-600 hover:bg-orange-100 text-white hover:text-black font-bold py-1 px-5 rounded-full whitespace-nowrap ml-48 mr-48 mt-10 mb-20'>
                  Back to home
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
