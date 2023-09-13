import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const CardPage = () => {
  const router = useRouter();

  // Define an object that maps card data to YouTube video IDs
  const videoData = [
    {
      title: 'Fetch Data from API using Axios',
      description: '"Fetch data from an API using Axios and Fetch"',
      videoId: 'https://www.youtube.com/embed/NVRqgdW7Yio?si=lCilmyubaBxCQoJM'}, 
    {
      title: 'ChatGPT API',
      description: '"React is a free and open-source front-end JavaScript library for building user interfaces"',
      videoId: 'https://www.youtube.com/embed/-OMXchdLZ3s?si=CNAdH2MdckPM34CL',
    },
    {
      title: 'Hooks Concept',
      description: 'Hooks are functions that let you “hook into” React state and lifecycle features from function.',
      videoId: 'https://www.youtube.com/embed/w8OmYlk3T6w?si=0OUlGMTu5sOm4myF', 
    },
    {
      title: 'React TypeScript',
      description: '"In a React project, TypeScript allows you to write HTML code directly react typescript. "',
      videoId: 'https://www.youtube.com/embed/g7khgmDhDfg?si=d-ZHJTO7ZX0hip5r', 
    },
  ];

  const handleClick = (videoId) => {
    // Redirect to the 'DataVideo' page with the selected video ID
    router.push(`/DataVideo?videoId=${videoId}`);
  };

  return (
    <div className="flex justify-center mt-15 m-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoData.map((data, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg">
            <Image className='rounded-2xl' src={`/images/react${index + 1}.jpg`} alt="study" height={600} width={600} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.title}</div>
              <p className="text-gray-700 text-base">{data.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center text-center items-center ">
              
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                onClick={() => handleClick(data.videoId)}
              >
                Click Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPage;
