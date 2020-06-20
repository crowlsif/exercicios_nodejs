// ## Importe a biblioteca ##



// ## Faça o código ##
let rs = require ("readline-sync")

let month = rs.question("Em qual mês você nasceu? \n")

let day = rs.questionInt("E qual o dia? \n")


if (day >= 21 && month == "março" || day <=20 && month == "abril"){
    console.log("Você é do signo de é Áries")
} else if (day >= 21 && month == "abril" || day <=20 && month == "maio"){
    console.log("Você é do signo de Touro")
} else if (day >= 21 && month == "maio" || day <=20 && month == "junho"){
        console.log("Você é do signo de Gêmeos")
} else if (day >= 21 && month == "junho" || day <=22 && month == "julho"){
    console.log("Você é do signo de Câncer")
} else if (day >= 23 && month == "julho" || day <=22 && month == "agosto"){
    console.log("Você é do signo de Leão")
} else if (day >= 23 && month == "agosto" || day <=22 && month == "setembro"){
    console.log("Você é do signo de Virgem")
} else if (day >= 23 && month == "setembro" || day <=22 && month == "outubro"){
    console.log("Você é do signo de Libra")
} else if (day >= 23 && month == "outubro" || day <=21 && month == "novembro"){
    console.log("Você é do signo de Escorpião")
} else if (day >= 22 && month == "novembro" || day <=21 && month == "dezembro"){
    console.log("Você é do signo de Sagitário")
} else if (day >= 22 && month == "dezembro" || day <=20 && month == "janeiro"){
    console.log("Você é do signo de Capricórnio")
} else if (day >= 21 && month == "janeiro" || day <=18 && month == "fevereiro"){
    console.log("Você é do signo de Aquário")
} else console.log("Você é do signo de Peixes")