'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export  default function HeaderClient({logo, links, resume}) {
	const [isSticky, setIsSticky] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	
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
	
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}
	
	return (
		<header className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out bg-white px-5 ${isSticky ? 'shadow-md py-4' : 'py-6'}`}>
			<div className={'container mx-auto relative flex flex-row justify-between w-full items-center'}>
				<Link href={'/'} className={'w-[100px] relative'}>
					{logo &&
						<Image
							src={'https:' + logo.fields.file.url}
							quality={100}
							width={logo.fields.file.details.image.width}
							height={logo.fields.file.details.image.height}
							alt="Profile Image"
						/>
					}
				</Link>
				<nav className={'hidden md:flex justify-end gap-4 list-none'}>
					{links.map((link, index) => (
						<li key={index} className={'flex items-center'}>
							<a className={'flex gap-1 items-end text-[16px]'} href={link.fields.url}>
								<span className={'text-[16px] text-rose-500'}>0{index + 1}.</span>
								{link.fields.title}
							</a>
						</li>
					))}
					<li>
						<a href={resume.fields.file.url}
						   target={'_blank'}
						   rel="noopener noreferrer"
						   className={'text-[16px] border rounded-md py-2 px-4 transition-all ease-in-out hover:text-white hover:bg-rose-500 duration-550 border-rose-500'}>
							Resume
						</a>
					</li>
				</nav>
				<button className={"md:hidden w-[30px] z-50"} onClick={toggleMobileMenu}>
					{isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
					<span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
				</button>
			</div>
			
			{/* Mobile Menu */}
			<div className={`md:hidden fixed  w-full h-screen bg-[#fff] top-[90px] left-0 z-30 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out `}>
				<nav>
					<ol className={'flex flex-col items-center gap-6 list-none pt-20'}>
						{links.map((link, index) => (
							<li key={index} className={'flex items-center'} onClick={toggleMobileMenu}>
								<a className={'flex gap-1 items-end text-[16px]'} href={link.fields.url}>
									<span className={'text-[16px] text-rose-500'}>0{index + 1}.</span>
									{link.fields.title}
								</a>
							</li>
						))}
						<li className={'mt-2'}>
							<a href={resume?.fields?.file.url}
							   target={'_blank'}
							   rel="noopener noreferrer"
							   className={'text-[16px] border rounded-md py-2 px-4 transition-all ease-in-out hover:text-white hover:bg-rose-500 duration-550 border-rose-500'}>
								Resume
							</a>
						</li>
					</ol>
				</nav>
			</div>
		</header>
	)
}
