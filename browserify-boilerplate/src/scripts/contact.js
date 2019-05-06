const contactList = document.querySelector(".contacts")


const createContact = (name, number, address) => {
    const contact = `
        <h2>Name: ${name}</h2>
        <p>Number: ${number}</p>
        <p>Address: ${address}</p>
        `

    contactList.innerHTML += contact
}

export default createContact


