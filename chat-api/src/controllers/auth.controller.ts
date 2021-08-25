import { GET, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { AuthService } from '../services/auth.service';
import { Request, Response } from 'express';
import getGoogleAuthURL from '../helpers/getGoogleAuthURL';

@route(`/api/v${process.env.API_VERSION}/auth`)
export class SystemUserController extends BaseController {
	constructor(private readonly authService: AuthService) {
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
		try {
			const code = req.query.code as string;
			const token = await this.authService.signInOrSignUp(code);

			res.cookie(process.env.COOKIE_NAME as string, token, {
				maxAge: 900000,
				httpOnly: true,
				secure: false,
			});

			res.redirect((process.env.UI_ROOT_URI + `me`) as string);
		} catch (e) {
			this.handleException(e, res);
		}
	}
}
