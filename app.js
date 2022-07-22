const title = document.querySelector('#title');
const mainWrapper = document.querySelector('#main-wrapper');
const todoBtn = document.querySelector('#todo-btn');
const confirmBtn = document.querySelector('#confirm-btn');


// initial button style on load
confirmBtn.style.display = 'none';

// event listeners
window.addEventListener('dblclick', (e) => {
  let item = document.querySelector('.item');
  if(e.target === item){
    item.parentElement.remove(item);
  }
})


mainWrapper.addEventListener('click', (e) => {
  if(e.target === todoBtn) {
    buildTextAndButton();
  }
})

confirmBtn.addEventListener('click', (e) => {
  addTodo();
})





// helper functions
function buildTextAndButton() {
  title.style.display = 'none';
  confirmBtn.style.display = '';
  const input = document.createElement('input');
  input.classList.add('input')
  mainWrapper.appendChild(input);
  todoBtn.style.display = 'none';
  // build list space for todos
  let list = document.createElement('ul');
  list.classList.add('list');
  confirmBtn.insertAdjacentElement('afterend', list);
}



function addTodo(){
  const input = document.querySelector('.input');
  const ul = document.querySelector('.list');
  let todo = input.value;
  let item = document.createElement('li')
  ul.appendChild(item);
  item.classList.add('item');
  item.textContent = todo;
  input.value = '';
}



