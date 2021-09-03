import UserUser from "../../../../models/userUser.model";
import { contactDTO } from "../../../dtos/contactDTO";

export interface ContactRepository {
	add(newContact: contactDTO): Promise<UserUser | null>;
}
