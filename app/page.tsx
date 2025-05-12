'use client'

import { FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { SiEthereum, SiSolidity, SiNextdotjs, SiTypescript, SiWeb3Dotjs, SiChainlink } from 'react-icons/si';
import { useEffect, useState } from 'react';
import ParticleNetwork from './components/ParticleNetwork';
import CursorTrail from './components/CursorTrail';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-full overflow-x-clip">
      <Navbar />
      <main className="min-h-screen w-full">
        <CursorTrail />
        <ParticleNetwork />
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent dark:from-blue-400/10 -z-10" />
          
          {/* Floating tech stack icons */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 animate-float-slow">
              <SiEthereum className="w-12 h-12 text-blue-500/20 dark:text-blue-400/20" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float">
              <SiSolidity className="w-10 h-10 text-blue-500/20 dark:text-blue-400/20" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
              <SiNextdotjs className="w-12 h-12 text-blue-500/20 dark:text-blue-400/20" />
            </div>
            <div className="absolute bottom-1/3 right-1/3 animate-float">
              <SiTypescript className="w-10 h-10 text-blue-500/20 dark:text-blue-400/20" />
            </div>
            <div className="absolute top-1/2 left-1/4 animate-float">
              <SiWeb3Dotjs className="w-10 h-10 text-blue-500/20 dark:text-blue-400/20" />
            </div>
            <div className="absolute top-1/4 right-1/3 animate-float-slow">
              <SiChainlink className="w-10 h-10 text-blue-500/20 dark:text-blue-400/20" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 animate-float">
              <SiEthereum className="w-10 h-10 text-blue-500/20 dark:text-blue-400/20" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-block text-3d">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="block hover-3d">Hi, I'm Bwire</span>
                <span className="block mt-2">
                  <span className="text-blue-600 dark:text-blue-400 hover-3d animate-glow">Web3</span>
                  <span className="text-gray-600 dark:text-gray-300"> & </span>
                  <span className="text-blue-600 dark:text-blue-400 hover-3d animate-glow">Full Stack</span>
                  <span className="block text-sm sm:text-base md:text-lg font-normal mt-2 text-gray-600 dark:text-gray-300">
                    Software Engineer
                  </span>
                </span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Bridging the gap between Web2 and Web3 by designing and building decentralized applications (dApps) and modern web platforms. 
              I turn ideas into secure, scalable, and user-friendly solutions that work in the real world.
            </p>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {/* <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover-3d">
                Smart Contracts
              </span> */}
              <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover-3d">
                DApps
              </span>
              <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover-3d">
                Web3 Integration
              </span>
              <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover-3d">
                Full Stack
              </span>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/bwire-official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110 hover:rotate-3"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/bwire_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110 hover:rotate-3"
              >
                <SiX className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="group px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center">
                  View Projects
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center">
                  Contact Me
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}