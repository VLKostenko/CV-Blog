'use client'

import Image from 'next/image';
import { useState } from "react";

function BackgroundWithPlaceholder({ background, alt, classImg, width, height, children }) {
	const [isLoading, setLoading] = useState(true)
	
	return (
    <div className={`${isLoading ? 'bg-[#ccc]' : ''} `}>
      <Image
        className={
        	`duration-700 ease-in-out group-hover:opacity-75 ${classImg} ${isLoading ? 'scale-100 blur-2xl grayscale': 'scale-100 blur-0 grayscale-0'}`
        }
        alt={alt}
        src={background}
        width={width}
        height={height}
        quality={100}
        priority
        onLoad={() => setLoading(false)}
      />
      {children}
    </div>
	)
}

export default BackgroundWithPlaceholder;
