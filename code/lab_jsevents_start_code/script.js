const btn = document.querySelector('#enter');
const textInput = document.querySelector('#new-todo');
const textOutput = document.querySelector('#text-output');
const list = document.querySelector('#list');
const todoForm = document.querySelector('#todo-form');
const dateBtn = document.querySelector('#date');
const time = document.querySelector('#time');

const removeForm = document.querySelector('#remove-form');

let deleteButton;

textInput.addEventListener("input", (event) => {
    textOutput.innerText = event.target.value;
    console.log(textOutput);
});

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = textOutput.innerText;
    list.appendChild(newListItem);

    // Add a delete button paired to the new item
    const deleteButton = document.createElement("button");
    const deleteIdNumber = list.getElementsByTagName("li").length;
    deleteButton.setAttribute("id", deleteIdNumber);
    deleteButton.classList.add("delete-button")

    deleteButton.innerText = "Delete";
    list.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        list.removeChild(deleteButton);
        list.removeChild(newListItem);
    });

});

dateBtn.addEventListener("click", () => {
    time.innerText = Date();
    document.body.appendChild(time);
})






