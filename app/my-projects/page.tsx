"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover overflow-y-scroll pt-16  bg-white bg-opacity-50 rounded-lg"'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page