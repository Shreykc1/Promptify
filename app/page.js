import { TextHoverEffect } from '@/components/ui/text-hover'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen z-20 flex-center text-[#FDFDFD] font-neue'>
        <div className='flex-center flex-col gap-4'>
            {/* <h1 className='font-bold text-6xl'>Promptify</h1> */}
            <TextHoverEffect text="Promptify"/>
            <p className=''>Discovering and sharing prompts made easy with promptify.</p>
        </div>
    </div>
  )
}

export default Home
