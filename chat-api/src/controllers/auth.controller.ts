import { GET, POST, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { UserService } from '../services/user.service';
import { Request, Response } from 'express';
import getGoogleAuthURL from '../helpers/getGoogleAuthURL';
import getGoogleTokens from '../helpers/getGoogleTokens';
import axios from 'axios';
import jwt, { Secret } from 'jsonwebtoken';

@route(`/api/v${process.env.API_VERSION}/auth`)
export class SystemUserController extends BaseController {
	constructor(private readonly userService: UserService) {
		super();
	}

	@route('/google/url')
	@GET()
	private async googleAuthURL(req: Request, res: Response) {
		return res.send(getGoogleAuthURL());
	}

	@route('/google')
	@GET()
	private async googleAuth(req: Request, res: Response) {
		const code = req.query.code as string;

		const { id_token, access_token } = await getGoogleTokens({
			code,
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			redirectUri: `${process.env.BASE_URL}api/v${process.env.API_VERSION}/auth/google/`,
		});

		const googleUser = await axios
			.get(
				`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
				{
					headers: {
						Authorization: `Bearer ${id_token}`,
					},
				}
			)
			.then((res) => res.data)
			.catch((error) => {
				console.error(`Failed to fetch user`);
				throw new Error(error.message);
			});

		const token = jwt.sign(googleUser, process.env.jwt_secret_key as Secret);

		res.cookie(process.env.COOKIE_NAME as string, token, {
			maxAge: 900000,
			httpOnly: true,
			secure: false,
		});

		res.redirect(process.env.UI_ROOT_URI as string);
	}

	@route('/me')
	@GET()
	private async auth(req: Request, res: Response) {
		console.log('get me');
		try {
			const decoded = jwt.verify(req.cookies[process.env.COOKIE_NAME as string], process.env.jwt_secret_key as Secret);
			console.log('decoded', decoded);
			return res.send(decoded);
		} catch (err) {
			console.log(err);
			res.send(null);
		}
	}
}
