const todosArray = ["vysát auto", "nakoupit", "vyčistit akvárko", "UVAŘIT"];

renderItems();
function addTodo() {
    const inputTextElement = document.querySelector('.js-input-text');

    const item = inputTextElement.value;

    todosArray.push(item);
    renderItems();
}

function renderItems() {
    const itemsContainerElement = document.querySelector('.js-items-container');
    let html = '';

    for(let i = 0; i<= todosArray.length-1; i++){
       html  += `<p class="item">${todosArray[i]}</p>`;
    }
    itemsContainerElement.innerHTML = html;
}
