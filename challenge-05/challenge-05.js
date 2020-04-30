/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 1, 2, 3, 4, 5 ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(arr[1]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArrIndex(arg, i) {
  return arg[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, '2', true, null, NaN]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArrIndex(arr2, 0));
console.log(returnArrIndex(arr2, 1));
console.log(returnArrIndex(arr2, 2));
console.log(returnArrIndex(arr2, 3));
console.log(returnArrIndex(arr2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
  var colecao = {
  "Harry Potter": { quantidadePaginas: 500, autor: 'J.K.Rowling', editora: 'Rocco' },
  "Senhor dos Anéis": { quantidadePaginas: 1000, autor: 'J.R.R.Tolkien', editora: 'Arqueiro' },
  "Roda do Tempo": { quantidadePaginas: 1500, autor: 'R.Jordan', editora: 'Abril' }
  }
    if (!!nome) {
      return colecao[nome]
    } 
      return colecao
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book("Harry Potter"));
console.log(book("Senhor dos Anéis"));
console.log(book("Roda do Tempo"));


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome = "Harry Potter"
console.log('O livro ' + nome + 'tem ' + book(nome).quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nome = "Senhor dos Anéis"
console.log('O autor do livro ' + nome + ' é ' + book(nome).autor + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nome = "Roda do Tempo"
console.log('O livro ' + nome + ' foi publicado pela editora ' + book(nome).editora + ".")



