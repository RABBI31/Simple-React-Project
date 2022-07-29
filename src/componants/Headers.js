import { NavLink } from 'react-router-dom'

function Headers() {
  return (
    <div>
      <section className='mb-10'>
        <nav className='uppercase flex absolute top-10 left-56 text-base'>
          <p className='border-2 border-black-900 p-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium  focus:outline-none  border border-gray-200  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:border-gray-600 dark:hover:text-white dark:hover:bg-orange-600'>
            logo
          </p>
          <div className='flex'>
            <ul className='flex absolute left-96 p-3 font-bold'>
              <li className='pl-7 '>
                <NavLink to='/' className='hover:pt-6 '>
                  <span className='text-orange-600 '>home</span>
                </NavLink>
              </li>
              <li className='pl-7'>
                <NavLink to='/about'>
                  <span className='text-black hover:text-orange-600'>
                    about
                  </span>
                </NavLink>
              </li>
              <li className='pl-7'>
                <NavLink to='/services'>
                  <span className='text-black hover:text-orange-600'>
                    services
                  </span>
                </NavLink>
              </li>
              <li className='pl-7'>
                <NavLink to='/blog'>
                  <span className='text-black hover:text-orange-600'>blog</span>
                </NavLink>
              </li>
              <li className='pl-7'>
                <NavLink to='/contact'>
                  <span className='text-black hover:text-orange-600'>
                    contact
                  </span>
                </NavLink>
              </li>
              <button className=' uppercase flex text-base hover:text-xl bg-orange-600 hover:bg-orange-100 text-white hover:text-black font-bold py-1 px-6 rounded-full whitespace-nowrap ml-7'>
                <span className='text-white hover:text-black '>
                  {' '}
                  get a quote
                </span>
              </button>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Headers
