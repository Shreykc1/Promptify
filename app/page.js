import Feed from '@components/Feed'
import React from 'react'


const Home = () => {
  return (
    <section className='w-full h-[80vh] z-20 flex-center flex-col text-[#FDFDFD] font-neue'>
        <div className='flex-center flex-col gap-4'>
            <h1 className='head_text'>Promptify</h1>
            <p className='text-md text-center'>Discovering and sharing prompts made easy with promptify.</p>
        </div>

        <Feed />
    </section>
  )
}

export default Home
