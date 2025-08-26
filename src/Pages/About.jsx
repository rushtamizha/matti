import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-100'>
    <div className='py-4 px-6 mx-auto max-w-2xl bg-white '>
        <h1 className='text-2xl text-center border-b-2 border-dashed p-2 font-semibold text-red-500 '>About Big Mumbai App</h1>
        <p className='mt-3 text-gray-500'>At Big Mumbai App, we are passionate about bringing the vibrant spirit of Mumbai to the world of gaming. Founded in the heart of this bustling metropolis, we aim to create immersive experiences that capture the energy, diversity, and creativity of our city.</p>
        <h3 className='text-xl my-2 font-medium'>Our Mission</h3>
        <p className='mt-3 text-gray-500'>Our mission is to unite gamers, artists, and storytellers through engaging and innovative gameplay. We believe that games are not just a pastime; they are a powerful medium for connection and expression. By showcasing local talent and drawing inspiration from Mumbai’s rich culture, we aim to craft games that resonate with players both locally and globally</p>
        <h3 className='text-xl my-2 font-medium'>What We Offer</h3>
        <ul className='list-disc list-inside'>
            <li className='mt-3 text-gray-500'><b className='text-orange-400'>
                Diverse Game Portfolio:</b> From thrilling action games to thought-provoking narratives, our lineup caters to all types of gamers. We are committed to quality and creativity, ensuring that each title reflects our dedication to excellence.</li>
            <li className='mt-3 text-gray-500'><b className='text-orange-400'>Community Engagement:</b> We believe in the power of community. Through events, tournaments, and collaborative projects, we foster a supportive environment where players can connect, compete, and collaborate.</li>
            <li className='mt-3 text-gray-500'> <b className='text-orange-400'>Local Talent Spotlight:</b> We are proud to highlight the incredible talent that Mumbai has to offer. Our team comprises skilled developers, artists, and writers who are passionate about storytelling and game design.</li>
        </ul>
        <h3 className='text-xl my-2 font-medium'>Join Us on Our Journey</h3>
        <p className='mt-3 text-gray-500'>As Big Mumbai App we continue to grow and innovate, we invite you to be a part of our journey. Whether you’re a gamer, developer, or simply someone who loves the art of play, there’s a place for you in our community.</p>
        <p className='mt-3 text-gray-500'>Follow us on social media and stay updated on our latest releases, events, and initiatives. Together, let’s celebrate the dynamic world of gaming right from the heart of Mumbai!</p>
        <p className='mt-3 text-gray-500'>Welcome to the Big Mumbai Games family—where every game tells a story!</p>
    </div>
    </div>
  )
}

export default About