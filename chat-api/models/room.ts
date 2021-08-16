import { Optional } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';
import { RoomAttributes } from '../src/services/repositories/domain/room';

interface RoomCreationAttributes extends Optional<RoomAttributes, 'roomId'> {}

@Table
export class Room extends Model<RoomAttributes, RoomCreationAttributes> {

	@Column
	name!: string;

}