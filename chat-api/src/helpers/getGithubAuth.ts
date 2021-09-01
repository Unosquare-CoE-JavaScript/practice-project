const getGithubAuth: () => string = function () {
	return `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
}

export default getGithubAuth