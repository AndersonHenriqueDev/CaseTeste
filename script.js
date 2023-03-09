function inverterString(str) {
    let resultado = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
  
    return resultado;
  }
  
  // Exemplo de uso:
  console.log(inverterString('exemplo de string')); // gnirts ed olpmexe
  

  // utilizei esse exemplo onde a função 'inverterString' recebe um string como argumento e retorna o string com os caracteres invertidos, o loop for percorre o string de trás para frente e a cada iteração adiciona o caractere atual na variável 'resultado'. Ao fim do loop, a variável 'resultado' contém o string com os caracteres invertidos.