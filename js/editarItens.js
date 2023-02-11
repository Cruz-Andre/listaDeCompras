import { listaDeItens } from "./listaDeItens.js"
import mostrarItem from "./mostrarItem.js"

let itemAEditar
const editarItens = () => {
  const editandoItens = document.querySelectorAll('.editar')
  editandoItens.forEach(editarCadaItem => {
    editarCadaItem.addEventListener('click', (evento) => {
      itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value')
      mostrarItem(itemAEditar)
      let focarItem
      focarItem = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`)
      focarItem.focus()
      console.log(itemAEditar);
    })
  })

  const salvarItens = document.querySelectorAll('.salvar')
  salvarItens.forEach(salvarItem => {
    salvarItem.addEventListener('click', (evento) => {
      const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`)
      listaDeItens[itemAEditar].valor = itemEditado.value
      itemAEditar = -1
      mostrarItem()
    })
  })
}

export default editarItens