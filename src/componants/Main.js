import React from 'react'
import MyImage from './images/1.png'
import Headers from './Headers'

function Main() {
  return (
    <div className='md:w-128 w-auto md:h-128 h-auto'>
      <Headers />
      <section
        className='relative top-20'
        id='controls-carousel'
        data-carousel='static'
      >
        <div
          className=' bg-center bg-cover bg-no-repeat h-auto mb-10'
          style={{ backgroundImage: `url(${MyImage})` }}
        >
          <h1 className='uppercase text-white text-full ml-48 text-left font-bold leading-snug mt-10 mb-10'>
            consectetur
            <br /> adipiscing elit. Sed <br />
            eu pharetra.
          </h1>
          <p className='uppercase text-white text-justify ml-48 mb-10'>
            consectetur adipiscing elit. Sed eu pharetra ante. Nullam ,<br />{' '}
            tempus eget ex sit amet congue.
          </p>
          <button className=' uppercase flex text-base hover:text-xl bg-orange-600 hover:bg-orange-100 text-white hover:text-black font-bold py-1 px-6 rounded-full whitespace-nowrap ml-48 mb-20'>
            <span className=''> Contact Us</span>
          </button>
          <div className=''>see more</div>
        </div>
      </section>
      <section className='mt-32  '>
        <h2 className='text-hl-full font-bold uppercase'>ABout us</h2>
        <p className='text-center text-lg divide-y divide-blue-200 divide-solid ml-56 mr-56 mt-7 '>
          consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget
          ex sit amet congue.
        </p>
        <hr className='mt-7 left-96 right-96 divide-lime-400 border-t-4 border-t-orange-600 absolute ml-72 mr-28 ' />
        <div className=' divide-y-2 divide-orange-600 mt-10'></div>
        <p className='text-sm ml-56 mr-56 mt-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          pharetra ante. Nullam tempus eget ex sit amet congue. Nullam a laoreet
          leo. Duis ultricies pulvinar lacus, dictum aliquam tellus consequat
          eget. Cras convallis accumsan lacus in ultricies. Aliquam accumsan ut
          tellus id vulputate. Curabitur suscipit lacus justo, vel auctor leo
          accumsan ut. Nunc pretium tincidunt justo sit amet iaculis. Vestibulum
          id interdum nisi, non semper ligula. Maecenas eu nibh non dui viverra
          gravida id quis velit.
        </p>
        <button
          type='button'
          className='py-2.5 px-5 mr-2 mb-2 mt-7 text-sm font-medium  focus:outline-none  rounded-xl border border-gray-200  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:border-gray-600 dark:hover:text-white dark:hover:bg-orange-600'
        >
          Read More
        </button>
      </section>
    </div>
  )
}

export default Main
