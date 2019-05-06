import contactDatabase from "./contentCollection"


const saveContact = () => {
    let name = document.querySelector("#name").value
    let number = document.querySelector("#number").value
    let address = document.querySelector("#address").value

    const newContact = {
        name: name,
        number: number,
        address: address
    }

    contactDatabase.saveNewContact(newContact)
}

export default saveContact