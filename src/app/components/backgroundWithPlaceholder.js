'use client'

import Image from 'next/image';
import { useState } from "react";

function BackgroundWithPlaceholder({ background, alt, classImg, children }) {
	const [isLoading, setLoading] = useState(true)
	
	return (
    <div className={`${isLoading ? 'bg-[#ccc]' : ''}`}>
      <Image
        className={
        	`duration-700 ease-in-out group-hover:opacity-75 ${classImg} ${isLoading ? 'scale-100 blur-2xl': 'scale-100 blur-0 '}`
        }
        alt={alt}
        src={background}
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
	        objectFit: "cover",
        }}
        priority
        onLoad={() => setLoading(false)}
      />
      {children}
    </div>
	)
}

export default BackgroundWithPlaceholder;
