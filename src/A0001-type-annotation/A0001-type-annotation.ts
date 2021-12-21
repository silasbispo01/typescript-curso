/* eslint-disable */
/* Type is Always lowercase */

let nome: string = 'Silas';
let idade: number = 18;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;


// Arrays

let numbersArray: Array<number> = [1, 2, 3, 4];
let numbersArray2: number[] = [1, 2, 3, 4];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Silas',
  idade: 18,
}

// Funções

function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

const result = soma(2, 2);

console.log(pessoa.nome);
