import UserUser from "../../../../models/userUser.model";
import { contactDTO } from "../../../dtos/contactDTO";
import { ContactRepository } from "../interfaces/contact.repository";

export class ContactSequelizeRepository implements ContactRepository {
	public async add(contact: contactDTO): Promise<UserUser | null> {
		return await UserUser.create(contact);
	}
}