// requisito 5
// recuperei o botão, input (caixa de texto) e ol (lista ordenada).
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa')
const taskList = document.querySelector('#lista-tarefas');

function createLi(){
  const liTask = document.createElement('li'); // criar li
  liTask.innerText = input.value; // A propriedade value define ou retorna o valor de um atributo.
  taskList.appendChild(liTask); // add li (filho) ao ol (pai)
  input.value = '';
}
button.addEventListener('click',createLi);