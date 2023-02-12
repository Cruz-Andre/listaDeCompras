let listaDeItens = []

let listaDeItensRecuperadaLocalStorage = localStorage.getItem('listaDeItens')

let itemAEditar

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const ulItens = document.getElementById('lista-de-itens')
const ulItensComprados = document.getElementById('itens-comprados')

function atualizaLocalStorage() {
	localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))
}

if(listaDeItensRecuperadaLocalStorage) {
	listaDeItens = JSON.parse(listaDeItensRecuperadaLocalStorage)
	mostrarItem()
}
else {
	listaDeItens = []
}

form.addEventListener('submit', function (evento) {
	evento.preventDefault()
	salvarItem()
	mostrarItem()
	itensInput.focus()
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
				valor: comprasItem,
				checar: false
			}
		)
	}
	console.log(listaDeItens)

	itensInput.value = ''
}

function mostrarItem() {
	ulItens.innerHTML = ''
	ulItensComprados.innerHTML = ''
	listaDeItens.forEach((item, index) => {
		if (item.checar) {
			ulItensComprados.innerHTML +=
			`
				<li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
					<div>
						<input type="checkbox" checked class="is-clickable" />  
						<span class="itens-comprados is-size-5">${item.valor}</span>
					</div>
					<div>
						<i class="fa-solid fa-trash is-clickable deletar"></i>
					</div>
				</li>
			`
		}
		else {
			ulItens.innerHTML +=
			`
				<li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
					<div>
						<input type="checkbox" class="is-clickable" />
						<input type="text" class="is-size-5" value="${item.valor}" ${index !== Number(itemAEditar) ? 'disabled' : ''}></input>
					</div>
					<div>
						${index === Number(itemAEditar) ? '<button onClick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
						<i class="fa-solid fa-trash is-clickable deletar"></i>
					</div>
				</li>
			`
		}
	})

	const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
	inputsCheck.forEach(input => {
		input.addEventListener('click', (evento) => {
			const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
			listaDeItens[valorDoElemento].checar = evento.target.checked
			console.log(listaDeItens[valorDoElemento].checar);
			mostrarItem()
		})
	})

	const deletarItens = document.querySelectorAll('.deletar')
	deletarItens.forEach(deletarItem => {
		deletarItem.addEventListener('click', (evento) => {
			valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
			listaDeItens.splice(valorDoElemento, 1)
			mostrarItem()
		})
	})

	const editarItens = document.querySelectorAll('.editar')
	editarItens.forEach(editarItem => {
		editarItem.addEventListener('click', (evento) => {
			itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value')	
			mostrarItem()
			focarItem = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`)
			focarItem.focus()
			console.log(itemAEditar);
		})
	})
	atualizaLocalStorage()
}

function salvarEdicao() {
	const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`)
	console.log(itemEditado.value)
	listaDeItens[itemAEditar].valor = itemEditado.value
	console.log(listaDeItens)
	itemAEditar = -1
	mostrarItem()
}