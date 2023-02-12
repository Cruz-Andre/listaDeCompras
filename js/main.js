//import { listaDeItens } from "./listaDeItens.js" com o setTimeout em listaDeItens
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
