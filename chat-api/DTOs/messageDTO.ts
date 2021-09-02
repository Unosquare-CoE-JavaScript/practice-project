import { MessageRecipient } from "../src/common/enums/message.recipient";

export interface messageDTO {
	messageId: number;
	senderId: number;
	recipient: MessageRecipient;
	recipientId: number;
	text: string;
	color: string;
	createdAt: Date;
	updatedAt: Date;
}