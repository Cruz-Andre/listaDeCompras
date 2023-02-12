import { atualizaLocalStorage, listaDeItens } from "./listaDeItens.js"
import deletarItens from "./deletarItens.js"
import inputCheck from "./inputsCheck.js"
import editarItens from "./editarItens.js"

const ulItens = document.getElementById('lista-de-itens')
const ulItensComprados = document.getElementById('itens-comprados')

const mostrarItem = (itemAEditar) => {
	
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
						${index === Number(itemAEditar) ? '<i class="fa-regular fa-floppy-disk is-clickable salvar"></i>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
						<i class="fa-solid fa-trash is-clickable deletar ml-2"></i>
					</div>
				</li>
			`
		}
	})

	inputCheck()

	deletarItens()
	
	editarItens()

	atualizaLocalStorage()
}

export default mostrarItem
