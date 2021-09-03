import Conversation from '../../../../models/conversation.model';
import { conversationDTO } from "../../../dtos/conversationDTO";
import { ConversationRepository } from '../interfaces/conversation.repository';

export class ConversationSequelizeRepository implements ConversationRepository {
	public async add(conversation: conversationDTO): Promise<Conversation | null> {
		return await Conversation.create(conversation);
	}
}
