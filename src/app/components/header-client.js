'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

export  default function HeaderClient({logo, links}) {
	const [isSticky, setIsSticky] = useState(false);
	
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsSticky(true)
			} else {
				setIsSticky(false)
			}
		}
		
		window.addEventListener('scroll', handleScroll)
		
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []);
	
	
	return (
		<header className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out bg-white ${isSticky ? 'shadow-md py-2' : 'py-4'}`}>
			<div className={'container mx-auto relative flex flex-row justify-between w-full items-center'}>
				<Link href={'/'} className={'w-[100px] h-[100px] relative'}>
					{logo &&
						<Image
							src={'https:' + logo.fields.file.url}
							quality={100}
							layout='fill'
							sizes='100vw'
							alt="Profile Image"
						/>
					}
				</Link>
				<ol className={'flex justify-end gap-4'}>
					{links.map((link, index) => (
						<li key={index} className={'flex items-center'}>
							<a className={'flex gap-1 items-end text-[16px]'} href={link.fields.url}>
								<span className={'text-[16px] text-rose-500'}>0{index + 1}.</span>
								{link.fields.title}
							</a>
						</li>
					))}
					<li>
						<button className={'text-[15px] border rounded-md py-2 px-4 transition-all ease-in-out hover:text-white hover:bg-rose-500 duration-550 border-rose-500'}>
							Resume
						</button>
					</li>
				</ol>
			</div>
		</header>
	)
}
