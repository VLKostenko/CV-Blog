import client from "@/src/app/contentful/client";

export async function fetchEntries(key) {
	const response = await client.getEntry(key, { include: 10 });
	
	if(!response.ok) {
		// This will activate the closest `error.js` Error Boundary
	}
	
	return response.fields;
	
}
