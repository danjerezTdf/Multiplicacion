let vectorUno: number[] = [1, 2, 3];
let vectorDos: number[] = [4, 5, 6];
let vectorTres: number[] = [2, 1, 2];
let vectorCuatro: number[] = [1, 2, 1];
let auxUno: number[] = [];
let auxDos: number[] = [];
let resultado: number[] = [];

//
function multiplicarArreglo(
  arregloUno: number[],
  arregloDos: number[]
): number[] {
  let prodArre: number[] = [];
  for (let i: number = 0; i < arregloUno.length; i++) {
    prodArre[i] = arregloUno[i] * arregloDos[i];
  }
  return prodArre;
}
//

auxUno = multiplicarArreglo(vectorUno, vectorDos);
auxDos = multiplicarArreglo(vectorTres, vectorCuatro);
resultado = multiplicarArreglo(auxUno, auxDos);

console.log(resultado);
