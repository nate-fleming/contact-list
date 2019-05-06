const contactDatabase = {
    getContacts() {
        return fetch("http://localhost:3000/contacts")
            .then(entries => entries.json())
    },
    saveNewContact(contact) {
        return fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
    }

}


export default contactDatabase