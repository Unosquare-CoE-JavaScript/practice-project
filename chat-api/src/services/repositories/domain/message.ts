export interface MessageAttributes {
	messageId: number;
	roomId: number;
	userId: number;
	toUserId: number;
	text: string;
	color: string;
	createdAt: Date;
	updatedAt: Date;
}
