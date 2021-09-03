import { statusDTO } from '../../../dtos/statusDTO';
import { typeDTO } from '../../../dtos/typeDTO';
import UserStatus from '../../../../models/userStatus.model';
import MessageStatus from '../../../../models/messageStatus.model';
import ConversationStatus from '../../../../models/conversationStatus.model';
import ConversationType from '../../../../models/conversationType.model';

export interface CatalogRepository {
	addUserStatus(newStatus: statusDTO): Promise<UserStatus | null>;
	addMessageStatus(newStatus: statusDTO): Promise<MessageStatus | null>;
	addConversationStatus(newStatus: statusDTO): Promise<ConversationStatus | null>;
	addConversationType(newType: typeDTO): Promise<ConversationType | null>;
}
