import { messageDTO } from '../dtos/messageDTO';
import Message from '../../models/message.model';
import { BaseController } from '../common/controllers/base.controller';
import { ApplicationException } from '../common/exceptions/application.exception';
import { MessageRepository } from './repositories/interfaces/message.repository';

export class MessageService extends BaseController {
	constructor(private readonly messageRepository: MessageRepository) {
		super();
	}

	public async add(body: messageDTO): Promise<Message> {
		const { idSender, idConversation, message, idMessageStatus } = body;
		const newMessage = {
			idSender,
			idConversation,
			message,
			idMessageStatus
		};
		const createdMessage = await this.messageRepository.add(
			newMessage as messageDTO
		);
		if (!createdMessage)
			throw new ApplicationException('Error while creating message');
		return createdMessage;
	}

	public async findAllByUserId(userID: number): Promise<Message[]> {
		const messages = await this.messageRepository.findAllByUserId(userID);
		if (!messages)
			throw new ApplicationException('No messages found for this user');
		return messages;
	}

	public async findByUserId(userID: number): Promise<Message[]> {
		const messages = await this.messageRepository.findByUserId(userID);
		if (!messages)
			throw new ApplicationException('No messages found for this user');
		return messages;
	}
}
