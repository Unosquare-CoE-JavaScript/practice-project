import { Message } from "../../../../models/message";

export interface MessageRepository {
	findByID(messageID: number): Promise<Message | null>;
}
