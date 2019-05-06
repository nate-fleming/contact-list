import contactDatabase from "./contentCollection"
import createContact from "./contact"

const listContacts = () => {
    contactDatabase.getContacts().then(contacts => {
        contacts.forEach(contact => {
            createContact(contact.name, contact.number, contact.address)
        })
    })
}

export default listContacts

