// ## Importe a biblioteca ##



// ## Faça o código ##
let rs = require("readline-sync")

let num = rs.question("Olá, favor informar o número do vôo. \n")

let fileira = rs.question("Em qual das fileiras você deseja se acomodar? (A, B, C, D ou F) \n")

console.log("======================================================================================================")

console.log("Passageiro, o número do seu vôo é " + num + " acomode-se na fileira " + fileira + ". Desejamos uma boa viagem.")

console.log("======================================================================================================")
