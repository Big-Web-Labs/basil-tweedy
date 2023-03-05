import React from 'react'
import aboutBasil from '../assets/about_basil.png'

const AboutBanner = () => {
  return (
    <div className="section max-w-[1200px]">
        <h1 className="text-center text-[2.5rem] sm:text-[6rem]">BASIL TWEEDY</h1>
        <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
            <div>
                <h2 className="text-[1.75rem] sm:text-[3.125rem]">You Know.</h2>
                <p className="sm:text-[1.25rem] mt-1">New York | Los Angeles</p>
                <ul className="list-disc px-8 mt-8 text-[0.875rem]">
                    <li>Award 1</li>
                    <li>Award 2</li>
                    <li>Excellence in essay writing</li>
                </ul>
            </div>
            <img src={aboutBasil} className="w-1/2 max-w-fit"/>
        </div>
    </div>
  )
}

export default AboutBanner