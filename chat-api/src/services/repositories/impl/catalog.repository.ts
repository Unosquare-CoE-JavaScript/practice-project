import { CatalogRepository } from '../interfaces/catalog.repository';
import { statusDTO } from '../../../dtos/statusDTO';
import { typeDTO } from '../../../dtos/typeDTO';
import UserStatus from '../../../../models/userStatus.model';
import MessageStatus from '../../../../models/messageStatus.model';
import ConversationStatus from '../../../../models/conversationStatus.model';
import ConversationType from '../../../../models/conversationType.model';

export class CatalogSequelizeRepository implements CatalogRepository {
	public async addUserStatus(newStatus: statusDTO): Promise<UserStatus | null> {
		return await UserStatus.create(newStatus)
	}
	
	public async addMessageStatus(newStatus: statusDTO): Promise<MessageStatus | null> {
		return await MessageStatus.create(newStatus)
	}
	
	public async addConversationStatus(newStatus: statusDTO): Promise<ConversationStatus | null> {
		return await ConversationStatus.create(newStatus)
	}
	
	public async addConversationType(newType: typeDTO): Promise<ConversationType | null> {
		return await ConversationType.create(newType)
	}
}
