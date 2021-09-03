import UserUser from '../../models/userUser.model';
import { contactDTO } from '../dtos/contactDTO';
import { BaseController } from '../common/controllers/base.controller';
import { ApplicationException } from '../common/exceptions/application.exception';
import { ContactRepository } from './repositories/interfaces/contact.repository';

export class ContactService extends BaseController {
	constructor(private readonly contactRepository: ContactRepository) {
		super();
	}

	public async add(body: contactDTO): Promise<UserUser> {
		const { idUser, idContact } =
			body;
		const newMessage = {
			idUser, idContact
		};
		const createdContact = await this.contactRepository.add(
			newMessage as contactDTO
		);
		if (!createdContact)
			throw new ApplicationException('Error while creating contact');
		return createdContact;
	}
}
