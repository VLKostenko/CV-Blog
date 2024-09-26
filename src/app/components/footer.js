'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Mail} from 'lucide-react';

export default function Footer() {
	
	return (
		<footer className="container mx-auto border-t border-[#ccc] pt-10 pb-10">
			<div className={'flex flex-col md:flex-row gap-2 justify-between items-center px-5 xl:px-0'}>
				<ol className={'flex gap-2'}>
					<li>
						<Link href="https://www.facebook.com/profile.php?id=100008058068592" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-rose-500 transition-colors">
							<span className="sr-only">Facebook</span>
							<Facebook size={20} />
						</Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/in/volodymyr-kostenko/" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-rose-500 transition-colors">
							<span className="sr-only">Linkedin</span>
							<Linkedin size={20} />
						</Link>
					</li>
					<li className={'mt-[2px]'}>
						<a className={'leading-[10px] transition-all ease-in-out hover:text-rose-500'} href={'mailto:vladimirkostenko4@gmail.com'}>
							<Mail size={20} />
						</a>
					</li>
				</ol>
				
				<h4 className="text-[12px] tracking-tighter text-center">
					Designed & Built by Volodymyr Kostenko
				</h4>
			</div>
			
		</footer>
	)
}
