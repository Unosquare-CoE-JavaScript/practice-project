import { route, POST } from 'awilix-express';
import { Request, Response } from 'express';
import { BaseController } from '../common/controllers/base.controller';
import { CatalogService } from '../services/catalog.service';
import { statusDTO } from '../dtos/statusDTO';
import { typeDTO } from '../dtos/typeDTO';

@route(`/api/v${process.env.API_VERSION}/catalog`)
export class SystemUserController extends BaseController {
	constructor(private readonly catalogService: CatalogService) {
		super();
	}
	
	@route('/user/add')
	@POST()
	private async addUserStatus(req: Request, res: Response) {
		try {
			const newUserStatus = await this.catalogService.addUserStatus(req.body as statusDTO);
			res.send({ newUserStatus: newUserStatus });
		} catch (e) {
			this.handleException(e, res);
		}
	}

	@route('/message/add')
	@POST()
	private async addMessageStatus(req: Request, res: Response) {
		try {
			const newMessageStatus = await this.catalogService.addMessageStatus(req.body as statusDTO);
			res.send({ newMessageStatus: newMessageStatus });
		} catch (e) {
			this.handleException(e, res);
		}
	}

	@route('/conversation/add')
	@POST()
	private async addConversationStatus(req: Request, res: Response) {
		try {
			const newConversationStatus = await this.catalogService.addConversationStatus(req.body as statusDTO);
			res.send({ newConversationStatus: newConversationStatus });
		} catch (e) {
			this.handleException(e, res);
		}
	}

	@route('/conversationType/add')
	@POST()
	private async addConversationType(req: Request, res: Response) {
		try {
			const newConversationType = await this.catalogService.addConversationType(req.body as typeDTO);
			res.send({ newConversationType: newConversationType });
		} catch (e) {
			this.handleException(e, res);
		}
	}
}
