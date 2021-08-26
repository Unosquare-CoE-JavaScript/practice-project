import { MessageRecipient } from "../../../common/enums/message.recipient";

export interface MessageAttributes {
	messageId: number;
	senderId: number;
	recipient: MessageRecipient;
	recipientId: number;
	text: string;
	color: string;
	createdAt: Date;
	updatedAt: Date;
}