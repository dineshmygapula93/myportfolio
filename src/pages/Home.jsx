import React from 'react'
import logo from '../assets/avatar.avif'
import { Github, Linkedin, Mail } from 'lucide-react';
export default function Home() {

  
  return (
    <div className="flex items-center justify-center px-4 pt-16">
          <div className="text-center">
      <img src={logo} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-8 object-cover" />
      <h1 className="text-4xl font-bold mb-4">I'm MYGAPULA SRI NAGA SAI DINESH</h1>
      <p className="text-xl text-gray-600 mb-8">Full Java Stack Developer</p>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://github.com/dineshmygapula93" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer"> <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/dinesh-mygapula/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="mygapuladinesh@gmail.com" className="hover:text-blue-600">
          <Mail size={24} />
        </a>
      </div>
      <a href="/Dinesh_Resume.pdf" download><button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer" >
        Download CV
      </button></a>
    </div>
  </div>
  )
}
