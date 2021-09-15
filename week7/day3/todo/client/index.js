// const sendTodo = (e) => {
//     //   e.preventDefault();
//     const todo = document.querySelector(".create-item").value;
//     console.log(todo);
//   };
//   const button = document.querySelector(".submit");
//   button.addEventListener("click", (e) => {
//     sendTodo(e);
//

const mainContainer = document.querySelector(".main-container")


const readData = async () => {
    const url = "http://localhost:3007/getItems";
    const userData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            },
        
    });
    const json = await userData.json();
    for(const item of json) {
        const todo_item = item.todo_item
        const itemName = document.createElement('p');
        const itemDetails = document.createElement('div')
        itemName.innerHTML = todo_item
        itemDetails.append(itemName);
        mainContainer.append(itemDetails);
        

    }
    console.log(json)

}
const readButton = document.querySelector(".read")
readButton.addEventListener("click", () => {
    readData()
})
const submitButton = document.querySelector(".submit")
const createItem = async () => {
    const url = "http://localhost:3007/createItem"
    const todo_item = document.querySelector(".input-user").value;
    
    const userData = {
        todo_item,
    };
    console.log(userData)

    const createToDo = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userData),
    })
}
  
submitButton.addEventListener("click", () => {
    createItem();
})


// async function getItems() {
//     const fetchItems = await fetch("http://localhost:3007/getItems", {
//         method: 'POST',
//         mode: 'no-cors',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }).then((response) => {
//         return response.json();
//     }).then((myJson) => {
//         console.log(myJson);
//     })
//     };
   
    

// const readButton = document.querySelector(".submit");
// readButton.addEventListener("click", () => getItems());