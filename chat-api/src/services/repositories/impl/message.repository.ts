import { Message } from '../../../../models/message';
import { messageDTO } from '../../../../DTOs/messageDTO';
import { MessageRepository } from '../interfaces/message.repository';

export class MessageSequelizeRepository implements MessageRepository {
	public async add(message: messageDTO): Promise<Message | null> {
		return await Message.create(message);
	}

	public async findByUserId(userId: number): Promise<Message[] | null> {
		return await Message.findAll({
			where: {
				recipientId: userId,
				recipient: 'User',
			},
		});
	}

	public async findByRoomId(roomId: number): Promise<Message[] | null> {
		return await Message.findAll({
			where: {
				recipientId: roomId,
				recipient: 'Room',
			},
		});
	}
}
