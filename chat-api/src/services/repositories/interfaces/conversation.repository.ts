import { conversationDTO } from "../../../dtos/conversationDTO";
import Conversation from "../../../../models/conversation.model";

export interface ConversationRepository {
	add(newConversation: conversationDTO): Promise<Conversation | null>;
}
