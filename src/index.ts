/*
Multiplicación
•Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos de Enteros del mismo tamaño
•Los dos primeros arreglos contienen los números que se quieren multiplicar
•El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos
•Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos

aproveche las ventajas de métodos para resolver el ejercicio
v1: [1, 2, 3] v2: [4, 5, 6] v3: [2, 1, 2] v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36]
*/

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
