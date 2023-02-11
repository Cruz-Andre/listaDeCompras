import { listaDeItens } from "./listaDeItens.js"
import mostrarItem from "./mostrarItem.js"

const deletarItens = () => {
  const deletarItem = document.querySelectorAll('.deletar')
  deletarItem.forEach(deletarCadaItem => {
    deletarCadaItem.addEventListener('click', (evento) => {
      const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
      listaDeItens.splice(valorDoElemento, 1)
      mostrarItem()
    })
  })
}

export default deletarItens
