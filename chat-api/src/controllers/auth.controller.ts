import { GET, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { AuthService } from '../services/auth.service';
import { Request, Response } from 'express';
import getGoogleAuth from '../helpers/getGoogleAuth';
import getGithubAuth from '../helpers/getGithubAuth';

@route(`/api/v${process.env.API_VERSION}/auth`)
export class SystemUserController extends BaseController {
	constructor(private readonly authService: AuthService) {
		super();
	}

	@route('/google/')
	@GET()
	private async googleAuth(req: Request, res: Response) {
		return res.redirect(getGoogleAuth());
	}

	@route('/google/logged')
	@GET()
	private async googleAuthLogged(req: Request, res: Response) {
		try {
			const code = req.query.code as string;
			const token = await this.authService.googleSigned(code);

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

	@route('/github/')
	@GET()
	private async githubAuth(req: Request, res: Response) {
		return res.redirect(getGithubAuth());
	}

	@route('/github/logged')
	@GET()
	private async githubAuthLogged(req: Request, res: Response) {
		try {
			const code = req.query.code as string;
			const token = await this.authService.githubSigned(code);

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
