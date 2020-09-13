/* eslint-disable */

// Tipos básicos (aqui ocorre infrência de tipos), ou seja, automaticamente seria inserido string
let nome: string = 'Vinicius' ;  // qualquer tipo de string
let idade: number = 30; // inteiro, hexadecimal, octal, etc...
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
//let big: bigint = 10n // bigint

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
// ou
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos (? representa valores opcionais)
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Jack'
}

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(2, 2); // Se liga na inferência em result
// ou
const soma2: (x: number, y: number) => number = (x, y) => x + y;
