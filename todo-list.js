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
        html  += `<p class="item">${todosArray[index]}</p>`;
    })

    itemsContainerElement.innerHTML = html;
}
function handleEnter(event){
    event.key === "Enter" && addTodo();
}
