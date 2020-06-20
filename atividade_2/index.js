// ## Importe a biblioteca ##



// ## Faça o código ##

let rs = require("readline-sync")

let mask = rs.question("Ao sair de casa você sempre usa máscara?\n")

let hand = rs.question("Você está higienizando as mãos frequentemente\n")

    if (mask == "sim" && hand == "sim"){
        console.log("Parabéns, continue fazendo sua parte, e juntos sairemos dessa!")
    }
     else {
        console.log("Atenção, para sua segurança e de todos, você deve seguir os cuidados necessários!")
     }