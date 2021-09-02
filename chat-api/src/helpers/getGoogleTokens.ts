import queryString from 'query-string';
import axios from 'axios';

export default async function getGoogleTokens({
	code,
	clientId,
	clientSecret,
	redirectUri,
}: {
	code: string;
	clientId: string;
	clientSecret: string;
	redirectUri: string;
}): Promise<{
	access_token: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
	id_token: string;
}> {
	const url = 'https://oauth2.googleapis.com/token';
	const values = {
		code,
		client_id: clientId,
		client_secret: clientSecret,
		redirect_uri: redirectUri,
		grant_type: 'authorization_code',
	};
	
	return axios
		.post(url, queryString.stringify(values), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((res) => res.data)
		.catch((error) => {
			throw new Error(error.message);
		});
}
