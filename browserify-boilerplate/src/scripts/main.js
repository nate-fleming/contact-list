import listContacts from "./contactList"
import formFactory from "./formMaker"
import saveContact from "./saveContact"

const addBtn = document.querySelector("#make-form")
const formDiv = document.querySelector("#add-contact")




//add contact
addBtn.addEventListener("click", (e) => {
    formFactory()
})

formDiv.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.id === "save-contact") {
        saveContact()
    }
    listContacts()
})



listContacts()