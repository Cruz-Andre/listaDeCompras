let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')

form.addEventListener('submit', function (evento) {
	evento.preventDefault()
	salvarItem()
})

function salvarItem() {
	const comprasItem = itensInput.value
	const checarItemDuplicado = listaDeItens.some(item => item.valor.toUpperCase() === comprasItem.toUpperCase())
	if (checarItemDuplicado) {
		alert('Item já existe')
	}
	else {
		listaDeItens.push(
			{
				valor: comprasItem
			}
		)
	}
	console.log(listaDeItens)
}