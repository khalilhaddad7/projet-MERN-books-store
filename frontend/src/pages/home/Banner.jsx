import React from 'react'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className=' flex md:flex-row-reverse py-16 items-center gap-[170px]'>
        <div className=' md:w-1/2'>
          <h1 className=' md:text-4xl text-2xl font-medium mb-7'>New Realeases this Week</h1>
          <p className=' mb-10'>It's time to update your reading list with some of the latest <br/>
           and greatest releases in the literary world. From heart-pumping thrillers to<br/>
            captivating memoirs, this week's new releases offer something for everyone</p>
            <button className='btn-primary'>Subscribe</button>
        </div> 
        <div className=' md:w-1/2 w-full flex items-center md:justify-end'> 
        <img src={BannerImg} alt=""/>

        </div>
    </div>
  )
}

export default Banner