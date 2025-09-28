const todosArray = [{item: "vysát auto", date: "12-23-2024"}];

renderItems();
function addTodo() {
    const inputTextElement = document.querySelector('.js-input-text');
    const inputDateElement = document.querySelector('.js-input-date');

    const item = inputTextElement.value;
    const date = inputDateElement.value;

    const itemObject = {
        item,
        date
    }
    todosArray.push(itemObject);
    renderItems();
    console.log(todosArray)

}

function renderItems() {
    const itemsContainerElement = document.querySelector('.js-items-container');
    let html = '';

    for(let i = 0; i<= todosArray.length-1; i++){
       html  += `<p>${todosArray[i].item}</p>`;
    }
    itemsContainerElement.innerHTML = html;
}
