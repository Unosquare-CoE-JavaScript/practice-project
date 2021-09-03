import { POST, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { ContactService } from '../services/contact.service';
import { Request, Response } from 'express';
import { contactDTO } from '../dtos/contactDTO';

@route(`/api/v${process.env.API_VERSION}/contact`)
export class SystemUserController extends BaseController {
	constructor(private readonly contactService: ContactService) {
		super();
	}

	@route('/add')
	@POST()
	private async add(req: Request, res: Response) {
		try {
			const newContact = await this.contactService.add(req.body as contactDTO);
			res.send({ newContact: newContact });
		} catch (e) {
			this.handleException(e, res);
		}
	}
}