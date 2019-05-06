const formDiv = document.querySelector("#add-contact")



const formFactory = () => {
    formDiv.innerHTML = `
        <h2>Make New Contact</h2>
        <label>Name</label><input id="name"></input>
        <label>Number</label><input id="number"></input>
        <label>Address</label><input id="address"></input>
        <button id="save-contact">Save New Contact</button>
    `
}

export default formFactory