// Tupla é um array de tamanho fixo e tipos especificos
const dadosCliente1: [number, string] = [1, 'Jack'];
const dadosCliente2: [number, string, string] = [1, 'Jack', 'Sparrow'];
const dadosCliente3: [number, string, string?] = [1, 'Jack'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Jack', 'Cap'];

// alterando
dadosCliente1[0] = 100;
dadosCliente1[1] = 'Frodo';

// Pode ser utilizado push e pop para alteração (prevenir com readonly)
dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly
const array1: readonly string[] = ['Vinicius', 'Gandini'];
const array2: ReadonlyArray<string> = ['Vinicius', 'Gandini'];

console.log(array1);
console.log(array2);
