import queryString from 'query-string';

const getGoogleAuthURL: () => string = function () {
	const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
	const options = {
		redirect_uri: `${process.env.BASE_URL}api/v${process.env.API_VERSION}/auth/google/`,
		client_id: process.env.GOOGLE_CLIENT_ID,
		access_type: 'offline',
		response_type: 'code',
		prompt: 'consent',
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		].join(' ')
	}

	return `${rootUrl}?${queryString.stringify(options)}`
}

export default getGoogleAuthURL