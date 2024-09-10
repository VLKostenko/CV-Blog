import { cache } from 'react';
import {fetchEntries} from "@/src/app/api/contentful/fetch-entries";

export const getCachedItems = cache(async (id) => {
	const data = await fetchEntries(id);
	
	return data;
})
