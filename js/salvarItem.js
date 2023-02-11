import { listaDeItens } from "./listaDeItens.js"

const itensInput = document.getElementById('receber-item')

export default function salvarItem() {
	const comprasItem = itensInput.value
	const checarItemDuplicado = listaDeItens.some(item => item.valor.toUpperCase() === comprasItem.toUpperCase())
	if (checarItemDuplicado) {
		alert('Item já existe')
	}
	else {
		listaDeItens.push(
			{
				valor: comprasItem,
				checar: false
			}
		)
	}
	console.log(listaDeItens)

	itensInput.value = ''
}