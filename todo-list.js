const todosArray = ["vysát auto", "nakoupit", "vyčistit akvárko", "UVAŘIT"];

renderItems();
function addTodo() {
    const inputTextElement = document.querySelector('.js-input-text');

    const item = inputTextElement.value;

    todosArray.push(item);
    renderItems();
    inputTextElement.value = ""
}

function renderItems() {
    const itemsContainerElement = document.querySelector('.js-items-container');
    let html = '';

    todosArray.forEach((item, index) => {
        html  += `<div class="item"><p>${todosArray[index]}</p><button class="js-delete-button delete-button">x</button></div>`;
    })

    itemsContainerElement.innerHTML = html;

    document.querySelectorAll(".js-delete-button")
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", ()=>{
                todosArray.splice(index, 1);
                renderItems();
            })
        })

}
function handleEnter(event){
    event.key === "Enter" && addTodo();
}

