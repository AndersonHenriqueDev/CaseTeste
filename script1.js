function fibonacci(n) {
  // Inicializa a sequência com os dois primeiros números
  let fib = [0, 1];
  
  // Calcula os próximos valores da sequência até chegar no número informado pelo usuário ou ultrapassá-lo
  while (fib[fib.length - 1] < n) {
    let next_fib = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(next_fib);
  }
  
  // Verifica se o número informado pertence à sequência
  if (fib.includes(n)) {
    console.log(`O número ${n} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${n} não pertence à sequência de Fibonacci.`);
  }
}

// Exemplo de uso: verifica se o número 21 pertence à sequência de Fibonacci
fibonacci(23);
