import { Request, Response } from 'express';
import { POST, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { ConversationService } from '../services/conversation.service';
import { conversationDTO } from '../dtos/conversationDTO';

@route(`/api/v${process.env.API_VERSION}/conversation`)
export class SystemUserController extends BaseController {
	constructor(private readonly conversationService: ConversationService) {
		super();
	}

	@route('/add')
	@POST()
	private async add(req: Request, res: Response) {
		try {
			const newConversation = await this.conversationService.add(req.body as conversationDTO);
			res.send({ newConversation: newConversation });
		} catch (e) {
			this.handleException(e, res);
		}
	}
}
