// UNDEFINED
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  // Parâmetros
  firstName: string,
  lastName?: string,
): {
  // Typeannottaion
  firstName: string;
  lastName?: string;
} {
  return {
    // Corpo da função
    firstName,
    lastName,
  };
}

// NULL
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwo === null) {
  console.log('COnta inválida');
} else {
  console.log(squareOfTwo);
}
