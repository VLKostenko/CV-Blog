'use server';

import Image from "next/image";
import Link from "next/link";
import { revalidateTag } from 'next/cache';
import {getCachedItems} from "@/src/app/hooks/api/getCachedItems";

export default async function Header() {
	const data = await getCachedItems('4Vstc2j2rHQLhgQXQRCF92');
	const links = data?.links || [];
	const logo = data?.logo || '';
	
	revalidateTag('header');
	
	return (
		<header className="grid grid-cols-2 py-10 items-center justify-beetwen w-full container mx-auto border-b border-accent-2">
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
					<button className={'text-[15px] border rounded-md py-2 px-4 transition-all ease-in-out hover:bg-rose-500 duration-550 border-rose-500'}>
						Resume
					</button>
				</li>
			</ol>
		</header>
	);
}
