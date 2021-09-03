import { conversationDTO } from '../dtos/conversationDTO';
import Conversation from '../../models/conversation.model';
import { BaseController } from '../common/controllers/base.controller';
import { ApplicationException } from '../common/exceptions/application.exception';
import { ConversationRepository } from './repositories/interfaces/conversation.repository';

export class ConversationService extends BaseController {
	constructor(private readonly conversationRepository: ConversationRepository) {
		super();
	}

	public async add(body: conversationDTO): Promise<Conversation> {
		const { name, idCreator, idConversationStatus, idConversationType } =
			body;
		const newMessage = {
			name,
			idCreator,
			idConversationStatus,
			idConversationType,
		};
		const createdConversation = await this.conversationRepository.add(
			newMessage as conversationDTO
		);
		if (!createdConversation)
			throw new ApplicationException('Error while creating conversation');
		return createdConversation;
	}
}
