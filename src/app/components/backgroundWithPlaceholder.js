'use client'

import Image from 'next/image';
import { useState } from "react";

function BackgroundWithPlaceholder({ background, tail, alt, classImg, children }) {
	const [isLoading, setLoading] = useState(true)
	
	return (
    <div className={`${isLoading ? 'bg-[#ccc]' : ''} ${tail}`}>
      <Image
        className={
        	`duration-700 ease-in-out group-hover:opacity-75 ${classImg} ${isLoading ? 'scale-100 blur-2xl': 'scale-100 blur-0 '}`
        }
        alt={alt}
        src={background}
        quality={100}
        fill
        priority
        sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw"}
        onLoad={() => setLoading(false)}
      />
      {children}
    </div>
	)
}

export default BackgroundWithPlaceholder;
