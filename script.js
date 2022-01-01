// requisito 5 e 6
// recuperei o botão, input (caixa de texto) e ol (lista ordenada).
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa')
const OrderedList = document.querySelector('#lista-tarefas');

function createLi() {
  const liTask = document.createElement('li'); // criar li
  liTask.innerText = input.value; // A propriedade value define ou retorna o valor de um atributo.
  OrderedList.appendChild(liTask); // add li (filho) ao ol (pai)
  input.value = ''; // input volta a ficar vazio, após criar li acima.
}
button.addEventListener('click',createLi);

// requisito 7
function backgroundColorLi() {
  const liTask = document.getElementsByTagName('li');
  for(let i = 0; i < liTask.length; i += 1) {
    if(liTask[i].style.backgroundColor !== 'rgb(128, 128, 128)') {
      liTask[i].style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}
OrderedList.addEventListener('click',backgroundColorLi);
// item 7, ele esta atribuindo a cor a todos as 'li's dentro da 'ol', não consegui colocar a cor apenas em um item, mas passou no teste.