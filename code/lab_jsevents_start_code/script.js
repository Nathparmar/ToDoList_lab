const btn = document.querySelector('#enter');
const textInput = document.querySelector('#new-todo');
const textOutput = document.querySelector('#text-output');
const list = document.querySelector('#list');

textInput.addEventListener("input", (event) => {
    textOutput.innerText = event.target.value;
    console.log(textOutput);
});

btn.addEventListener("click", () => {

    const newListItem = document.createElement("li");
    newListItem.innerText = textOutput.innerText;
    list.appendChild(newListItem);
    console.log("button Clicked");
})