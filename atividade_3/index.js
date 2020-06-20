// ## Importe a biblioteca ##



// ## Faça o código ##

let rs = require ("readline-sync")

let lados = rs.questionFloat("Qual o tamaho dos lados do quadrado? \n")

let area = lados*lados

console.log("A área de seu quadrado é: " + area)