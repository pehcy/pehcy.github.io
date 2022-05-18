import React from 'react';

const About = () : JSX.Element => (
  <div className="grow border-l h-full pl-20">
    <div className="flex flex-row py-8">
      <h2 className="basis-1/4 font-bold text-2xl my-auto px-8">Now</h2>
      <div className="basis-3/4 flex flex-col max-w-2xl">
        <h2 className="text-2xl font-semibold mb-1">Infovista</h2>
        <div className="mb-4">Massy, France (Fulltime, Remote)</div>
        <div className="text-gray-500">I'm now working as a software engineer 
          in Infovista, I recently deployed several projects 
          including IPerf3, OTT Files Sharing Libraries on Azure DevOps.
          Integrate the existing testing tools to Ubuntu, Redhat Linux.
        </div>
      </div>
    </div>
    <div className="flex flex-row py-8">
      <h2 className="basis-1/4 font-bold text-2xl my-auto px-8">2021 Jan - Oct</h2>
      <div className="basis-3/4 flex flex-col max-w-2xl">
        <h2 className="text-2xl font-semibold mb-1">Appxplore (iCandy)</h2>
        <div className="mb-4">Kuala Lumpur, Malaysia (Fulltime)</div>
        <div className="text-gray-500">Appxplore is a 
          mobile game studio in Kuala Lumpur.  I have been worked as 
          a full stack NodeJS engineer to help to extend the 
          ClawStars game support.
        </div>
      </div>
    </div>
  </div>
);

export default About;