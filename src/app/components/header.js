'use server';

import { revalidateTag } from 'next/cache';

import {getCachedItems} from "@/src/app/hooks/api/getCachedItems";
import HeaderClient from "@/src/app/components/header-client";

export default async function Header() {
	const data = await getCachedItems('4Vstc2j2rHQLhgQXQRCF92');
	const links = data?.links || [];
	const logo = data?.logo || '';
	const resume = data?.resume || '';
	
	revalidateTag('header');
	
	return (
		<HeaderClient links={links} logo={logo} resume={resume} />
	);
}
