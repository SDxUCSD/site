'use client';

import { useState } from 'react';
import { Space_Mono } from 'next/font/google';
import type { Project } from '@/constants';

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ProjectSlideshowProps {
  project: Project;
}

export default function ProjectSlideshow({ project }: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = project.image_urls || [];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="relative w-full h-[100vh] max-h-[100vh] overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${project.name} - Image ${index + 1}`}
            className="block w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      
      {imageUrls.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </>
      )}

      <div className={`absolute bottom-0 ${spaceMono.className} left-0 right-0 p-4 bg-gradient-to-t from-zinc-900/100 to-zinc-900/0 pt-10`}>
        <div className="flex flex-row gap-2">
          <a href={project.project_link} className="underline text-white text-2xl font-bold">{project.name}</a>
        </div>
        <p className="text-white text-sm">{project.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <img 
            src={project.founder_photo_url} 
            alt={project.founder_name}
            className="w-6 h-6 rounded-full"
          />
          <a href={project.founder_link} className="text-white text-sm hover:underline">
            {project.founder_name}
          </a>
        </div>
        {imageUrls.length > 1 && (
          <div className="flex gap-1 mt-2">
            {imageUrls.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
