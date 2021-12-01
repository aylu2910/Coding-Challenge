//-	2. Loop de impares con palabra

const loopDeImpares = (numero,palabra) => {
    for (let i = 0; i <= 100; i++) {
      if ((i + numero) % 2 === 1) {
        console.log(palabra)
      }else {
          console.log(i)
      }
    }
  };

loopDeImpares(2,"mi palabra");