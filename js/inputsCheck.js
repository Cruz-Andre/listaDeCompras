import { listaDeItens } from "./listaDeItens.js"
import mostrarItem from "./mostrarItem.js"


const inputsCheck = () => {
  const inputCheck = document.querySelectorAll('input[type="checkbox"]')
  inputCheck.forEach(input => {
    input.addEventListener('click', (evento) => {
      const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
      listaDeItens[valorDoElemento].checar = evento.target.checked
      //console.log(listaDeItens[valorDoElemento].checar);
      mostrarItem()
    })
  })
}

export default inputsCheck
