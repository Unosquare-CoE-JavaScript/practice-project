import { Room } from '../../../../models/room';

export interface RoomRepository {
	findByID(roomID: number): Promise<Room | null>;
}
