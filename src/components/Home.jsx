import React, { useEffect, useState } from 'react';
import { HiPhone } from 'react-icons/hi';

const Home = () => {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    const name = "Abhishek Biyani";
    let i = 0;
    const interval = setInterval(() => {
      setTypedName((prevName) => prevName + name[i]);
      i++;
      if (i === name.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <div name='home' className='w-full h-screen bg-[#0a1926]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-400 mx-1 text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          {typedName}
        </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] py-3'>
          SDE Intern at Zensar.
        </h2>
        <p className='text-[#8892b0] py-3 max-w-[800px]'>
        A driven and solutions-focused Computer Science student in my final year, I’m passionate about building scalable tech that solves real-world problems. With over 1,000 LeetCode problems solved and a 370+ day streak, I’ve developed strong expertise in data structures, algorithms, and systems thinking—earning a spot among the top 10K competitive programmers globally. I have a rating of 1350+ on Codeforces.
        </p>
        <div>
          <a href='tel:+919699114832'>
            <button className='py-3 my-2 mx-0 flex items-center button z-10 relative'>
              Call Me
              <HiPhone className='ml-3' />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
