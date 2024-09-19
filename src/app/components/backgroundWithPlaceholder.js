'use client'

import Image from 'next/image';
import { useState } from "react";

function BackgroundWithPlaceholder({ background, alt, classImg, layout, width, height, tail, accentColor, children }) {
	const [isLoading, setLoading] = useState(true)
	
	return (
    <div className={`${tail} ${isLoading ? 'bg-[#ccc]' : ''} `} style={{ boxShadow: `${accentColor ? accentColor : ''}` }}>
      <Image
        className={
        	`duration-700 ease-in-out group-hover:opacity-75 ${classImg ? classImg : 'image'} ${isLoading ? 'scale-100 blur-2xl grayscale': 'scale-100 blur-0 grayscale-0'}`
        }
        alt={alt}
        src={background}
        layout={layout}
        width={width}
        height={height}
        objectFit="cover"
        objectPosition='center'
        quality={100}
        priority
        onLoadingComplete={() => setLoading(false)}
      />
      {children}
    </div>
	)
}

export default BackgroundWithPlaceholder;
