(() => { 
    const criarTarefa = (event)=>{
    event.preventDefault();
    const input =document.querySelector("[data-form-input]");
    const valor = input.value;
    const lista = document.querySelector("[data-list]");    
    
    const tarefa = document.createElement('li')
    const conteudo = `<p>${valor}</p>`;
    tarefa.innerHTML = conteudo;
    tarefa.classList.add('task');
    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);
    input.value = "";
}
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click',criarTarefa);

const BotaoConclui = ()=>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    
    botaoConclui.addEventListener('click',concluirTarefa);

    return botaoConclui;

}

const concluirTarefa = (event) =>{
    
    const botaoConclui = event.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done');
   

}
})();