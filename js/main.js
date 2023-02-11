import { listaDeItens } from "./listaDeItens.js"
import mostrarItem from "./mostrarItem.js"
import salvarItem from "./salvarItem.js"

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')

form.addEventListener('submit', function (evento) {
	evento.preventDefault()
	salvarItem()
	mostrarItem()
	itensInput.focus()
})
