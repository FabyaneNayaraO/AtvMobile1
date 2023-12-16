const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  // Remove espaços em branco e converte para minúsculas para evitar diferenças de maiúsculas e minúsculas
  const cleanedStr = str.toLowerCase().replace(/\s/g, '');
  
  // Inverte a string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Verifica se a string original é igual à string invertida
  return cleanedStr === reversedStr;
}

rl.question('Digite uma palavra: ', (word) => {
  if (isPalindrome(word)) {
    console.log(`${word} é um palíndromo.`);
  } else {
    console.log(`${word} não é um palíndromo.`);
  }

  rl.close();
});
