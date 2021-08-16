import { Message } from "../../../../models/message";
import { MessageRepository } from "../interfaces/message.repository";

export class MessageSequelizeRepository implements MessageRepository {
	public async findByID(messageID: number): Promise<Message | null> {
		return await Message.findByPk(messageID);
	}
}
