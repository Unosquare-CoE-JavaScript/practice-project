import queryString from 'query-string';
import axios from 'axios';

export default async function getGithubTokens(code: string): Promise<{
	access_token: string;
}> {
	const body = {
		client_id: process.env.GITHUB_CLIENT_ID,
		client_secret: process.env.GITHUB_CLIENT_SECRET,
		code,
	};

	const opts = { headers: { accept: 'application/json' } };
	return (
		axios
			.post('https://github.com/login/oauth/access_token', body, opts)
			.then((res) => {
				return res.data.access_token;
			})
			.catch((error) => {
				throw new Error(error.message);
			})
	);
}
