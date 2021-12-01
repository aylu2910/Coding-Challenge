//-	1. Loop de pares
const loopDePares = (numero) => {
  for (let i = 0; i <= 100; i++) {
    if (!((i + numero) % 2)) {
      console.log(`El numero ${i} es par`);
    } else {
      console.log(i);
    }
  }
}

loopDePares(4);
