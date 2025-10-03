const todosArray = JSON.parse(localStorage.getItem("todos")) || [];

renderItems();
function addTodo() {
    const inputTextElement = document.querySelector('.js-input-text');

    const item = inputTextElement.value;

    if (todosArray.length < 8){
        todosArray.push(item);
        localStorage.setItem("todos", JSON.stringify(todosArray))
    } else {
        alert("Too much todos! take a break or do older task :-)")
    }

    renderItems();
    inputTextElement.value = ""
}

function renderItems() {
    const itemsContainerElement = document.querySelector('.js-items-container');
    let html = '';

    todosArray?.forEach((item, index) => {
        html  += `<div class="item"><p>${todosArray[index]}</p><button class="js-delete-button delete-button">x</button></div>`;
    })

    itemsContainerElement.innerHTML = html;

    document.querySelectorAll(".js-delete-button")
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", ()=>{
                todosArray.splice(index, 1);
                localStorage.removeItem("todos")
                localStorage.setItem("todos", JSON.stringify(todosArray))
                renderItems();
            })
        })

}
function handleEnter(event){
    event.key === "Enter" && addTodo();
}

