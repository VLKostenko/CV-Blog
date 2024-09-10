import client from './client';

export default async function useContentful(key) {
	const response = await client.getEntry(key, { include: 10 });
	
	return response.fields;
}
