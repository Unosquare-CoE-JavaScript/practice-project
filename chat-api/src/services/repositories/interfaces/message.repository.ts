import { messageDTO } from "../../../dtos/messageDTO";
import Message from "../../../../models/message.model";

export interface MessageRepository {
	add(newMessage: messageDTO): Promise<Message | null>;
	findAllByUserId(userId: number): Promise<Message[] | null>;
	findByUserId(userId: number): Promise<Message[] | null>;
	findByRoomId(roomId: number): Promise<Message[] | null>;
}
