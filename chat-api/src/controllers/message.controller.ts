import { Request, Response } from 'express';
import { GET, POST, route } from 'awilix-express';
import { BaseController } from '../common/controllers/base.controller';
import { MessageService } from '../services/message.service';
import { messageDTO } from '../../DTOs/messageDTO';

@route(`/api/v${process.env.API_VERSION}/messages`)
export class SystemUserController extends BaseController {
	constructor(private readonly messageService: MessageService) {
		super();
	}

	@route('/add')
	@POST()
	private async add(req: Request, res: Response) {
		try {
			const newMessage = await this.messageService.add(req.body as messageDTO);
			res.send({ createdMessage: newMessage });
		} catch (e) {
			this.handleException(e, res);
		}
	}

	@route('/allFromUser/:userId')
	@GET()
	private async findAllByUserId(req: Request, res: Response) {
		try {
			const userId = parseInt(req.params.userId);
			const messages = await this.messageService.findAllByUserId(userId);
			res.send(messages);
		} catch (e) {
			this.handleException(e, res);
		}
	}
	
	@route('/user/:userId')
	@GET()
	private async findByUserId(req: Request, res: Response) {
		try {
			const userId = parseInt(req.params.userId);
			const messages = await this.messageService.findByUserId(userId);
			res.send(messages);
		} catch (e) {
			this.handleException(e, res);
		}
	}

	@route('/room/:roomId')
	@GET()
	private async findByRoomId(req: Request, res: Response) {
		try {
			const roomId = parseInt(req.params.roomId);
			const messages = await this.messageService.findByRoomId(roomId);
			res.send(messages);
		} catch (e) {
			this.handleException(e, res);
		}
	}
}
