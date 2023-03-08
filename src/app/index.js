// INSERÇÃO DE HORA E DATA NA DOM

const formatarTempo = tempo => tempo < 10 ? `0${tempo}` : tempo

const gerarRelogio = _ => {
  const data = new Date()
  const [ hora, minuto, segundo ] = [data.getHours(), data.getMinutes(), data.getSeconds()]
  return `${formatarTempo(hora)}:${formatarTempo(minuto)}:${formatarTempo(segundo)}`
}

const atualizarRelogio = _ => {
  const hora = document.querySelector('.hora')

  setInterval(() => {
    hora.innerText = gerarRelogio()
  }, 1000)
}


const gerarData = _ => {
  const data = new Date().toString().split(' ')
  const dia = data[0]
  const mes = data[1]
  const dataAtual = data[2]

  return `${dia}, ${dataAtual} ${mes}`
}


const atualizarData = _ => {
  const data = document.querySelector('.data')
  data.innerText = gerarData()
}

// INSERÇÃO DE TAREFAS NA DOM

const formulario = document.querySelector('form')

function criarTarefa(descricao) {
  const tarefaEl = document.createElement('div')
  const textoEl = document.createElement('p')
  const iconeEl = document.createElement('i')

  tarefaEl.classList.add('tarefa')
  iconeEl.classList.add('ph-trash-simple')

  textoEl.textContent = descricao

  iconeEl.addEventListener('click', function() {
    this.parentElement.remove()
  })

  tarefaEl.appendChild(textoEl)
  tarefaEl.appendChild(iconeEl)

  return tarefaEl
}

function adicionar(tarefa) {
  const tarefasEl = document.querySelector('.tarefas')
  tarefasEl.appendChild(tarefa)
}

formulario.addEventListener('submit', function(event) {
  event.preventDefault()
  const entradaDeTexto = document.querySelector('input')

  if (entradaDeTexto.value.trim() !== "") {
    adicionar(criarTarefa(entradaDeTexto.value))
  }

  entradaDeTexto.value = ""
  entradaDeTexto.focus()
})

const iniciar = () => {
  atualizarRelogio()
  atualizarData()
}

iniciar()
