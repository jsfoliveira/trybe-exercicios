//definir array
// let fruits = [3, 4, 10, 1, 12];
//defina a variavel que guardará a soma
// let soma = 0;
//some todos os valores
// for (let i = 0; i < fruits.length; i++) {
//   soma = soma + fruits[0];
// }
//criar a condicional
// if (soma > 15) {
//   console.log("Valor maior");
// } else if (soma <= 15) {
//   console.log("Valor menor que 16");
// }

// //EXERCICIO 01:Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
// *****
// *****
// *****
// *****
// *****
//RESOLUÇÃO
// let n = 5;
// let str = "*";
// for (i = 0; i < n; i++) {
//   console.log(str.repeat(n));
// }
//EXERCICIO 02: Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
// *
// **
// ***
// ****
// *****
//RESOLUÇÃO
// let n = 5;
// let m = n - 4;
// let str = "*";
// for (i = 0; i < n; i++) {
//   console.log(str.repeat(m));
//   m = m + 1;
// }
//EXERCICIO 03:Agora inverta o lado do triângulo
//     *
//    **
//   ***
//  ****
// *****
//RESOLUÇÃO
// let n = 5;
// let m = n - 4;
// let str1 = "*";
// let str2 = " ";
// for (i = 0; i < n; i++) {
//   console.log(str2.repeat(n - m) + str1.repeat(m));
//   m = m + 1;
// }
//EXERCICIO 04:  Depois, faça uma pirâmide com n asteriscos de base
