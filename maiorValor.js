const livros = require('./listaLivros');//importando a lista de livros

let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}

console.log(maisCaro)