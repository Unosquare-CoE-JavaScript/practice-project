import { userDTO } from '../../DTOs/userDTO';
import { BaseController } from '../common/controllers/base.controller';
import { ApplicationException } from '../common/exceptions/application.exception';
import { UserRepository } from './repositories/interfaces/user.repository';
import getGoogleTokens from '../helpers/getGoogleTokens';
import axios from 'axios';
import jwt, { Secret } from 'jsonwebtoken';

export class AuthService extends BaseController {
	constructor(private readonly userRepository: UserRepository) {
		super();
	}

	public async signInOrSignUp(code: string): Promise<string> {
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

		const { given_name, family_name, email } = googleUser;
		const user = await this.userRepository.findByEmail(email);

		if (!user) {
			const splitted_given_name = given_name.split(' ');
			const firstName = splitted_given_name.shift();
			const middleName = splitted_given_name.join(' ');

			const splitted_family_name = family_name.split(' ');
			const firstLastName = splitted_family_name.shift();
			const secondLastName = splitted_family_name.join(' ');

			const newUser = {
				firstName,
				middleName,
				firstLastName,
				secondLastName,
				email
			} as userDTO;
			const createdUser = await this.userRepository.add(newUser);
			if (!createdUser) throw new ApplicationException('Error while creating user');
		}

		const token = jwt.sign(googleUser, process.env.jwt_secret_key as Secret);
		return token;
	}
}
