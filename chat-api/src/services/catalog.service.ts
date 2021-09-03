import { statusDTO } from '../dtos/statusDTO';
import { typeDTO } from '../dtos/typeDTO';
import { BaseController } from '../common/controllers/base.controller';
import { ApplicationException } from '../common/exceptions/application.exception';
import { CatalogRepository } from './repositories/interfaces/catalog.repository';
import UserStatus from '../../models/userStatus.model';
import MessageStatus from '../../models/messageStatus.model';
import ConversationStatus from '../../models/conversationStatus.model';
import ConversationType from '../../models/conversationType.model';

export class CatalogService extends BaseController {
	constructor(private readonly catalogRepository: CatalogRepository) {
		super();
	}

	public async addUserStatus(body: statusDTO): Promise<UserStatus> {
		const { status, description } = body;
		const newStatus = {
			status,
			description,
		};
		const createdUserStatus = await this.catalogRepository.addUserStatus(
			newStatus as statusDTO
		);
		if (!createdUserStatus)
			throw new ApplicationException('Error while creating user status');
		return createdUserStatus;
	}

	public async addMessageStatus(body: statusDTO): Promise<MessageStatus> {
		const { status, description } = body;
		const newStatus = {
			status,
			description,
		};
		const createdMessageStatus = await this.catalogRepository.addMessageStatus(
			newStatus as statusDTO
		);
		if (!createdMessageStatus)
			throw new ApplicationException('Error while creating message status');
		return createdMessageStatus;
	}

	public async addConversationStatus(body: statusDTO): Promise<ConversationStatus> {
		const { status, description } = body;
		const newStatus = {
			status,
			description,
		};
		const createdConversationStatus = await this.catalogRepository.addConversationStatus(
			newStatus as statusDTO
		);
		if (!createdConversationStatus)
			throw new ApplicationException('Error while creating conversation status');
		return createdConversationStatus
	}

	public async addConversationType(body: typeDTO): Promise<ConversationType> {
		const { type, description } = body;
		const newStatus = {
			type,
			description,
		};
		const createdConversationStatus = await this.catalogRepository.addConversationType(
			newStatus as typeDTO
		);
		if (!createdConversationStatus)
			throw new ApplicationException('Error while creating conversation status');
		return createdConversationStatus
	}
}
