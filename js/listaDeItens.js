import mostrarItem from "./mostrarItem.js"

export let listaDeItens = []

let listaDeItensRecuperadaLocalStorage = localStorage.getItem('listaDeItens')

export function atualizaLocalStorage() {
	localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))
}

if(listaDeItensRecuperadaLocalStorage) {
	listaDeItens = JSON.parse(listaDeItensRecuperadaLocalStorage)
	setTimeout(() => {mostrarItem()}, 500)
}
else {
	listaDeItens = []
}
