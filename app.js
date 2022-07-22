const title = document.querySelector('#title');
const mainWrapper = document.querySelector('#main-wrapper');
const todoBtn = document.querySelector('#todo-btn');
const confirmBtn = document.querySelector('.confirm-btn');



mainWrapper.addEventListener('click', (e) => {
  if(e.target === todoBtn) {
    buildTextAndButton();
  } else if(e.target === confirmBtn) {
     addTodo();
  }
})





function buildTextAndButton() {
  title.style.display = 'none';
  const input = document.createElement('input');
  const confirmBtn = document.createElement('button');

  input.classList.add('input')
  mainWrapper.appendChild(input);

  todoBtn.style.display = 'none';
  confirmBtn.classList.add('confirm-btn');
  confirmBtn.textContent = 'Confirm';
  mainWrapper.appendChild(confirmBtn);

}



function addTodo(){
  const input = document.querySelector('.input');
  let todoItem = document.createElement('p');
  let todo = input.value;
  todoItem.textContent = todo;
  input.style.display = 'none';
}