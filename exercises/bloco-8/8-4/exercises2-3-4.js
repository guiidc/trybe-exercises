// Para os exercícios 2, 3 e 4 considere o seguinte array:

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
    let namesArray = books.map((v) => v.author.name);
    return `${namesArray.join(', ')}.`
}

assert.strictEqual(reduceNames(), expectedResult);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult2 = 43;

function averageAge() {
  // escreva seu código aqui
  let sumAge = books.reduce((c, v)  => {
      c = c + (v.releaseYear - v.author.birthYear);
      return c;
  }, 0)
  return sumAge / books.length;

  
}

assert.strictEqual(averageAge(), expectedResult2);


// 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
    // escreva seu código aqui
    let longestName = books.reduce((pv, cv) => {
        if (cv.name.length > pv.name.length) {
            pv = cv;
        }
        return pv;
    })
    return longestName.name;
  }
  
  assert.strictEqual(longestNamedBook(), 'As Crônicas de Gelo e Fogo');
