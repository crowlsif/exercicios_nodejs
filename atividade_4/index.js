// ## Importe a biblioteca ##



// ## Faça o código ##


//////////////////////////////////////////////////////////////////////////////////////

let rs = require ("readline-sync")

let mes = rs.questionInt("Em qual mês você nasceu? (Dê 1 a 12) \n")

let dia = rs.questionInt("E qual o dia? \n")

switch (mes) {
    case 1:
         dia >= 21 ? console.log("Aquário") : console.log("Capricórnio");
        break;

    case 2:
        dia >= 19 ? console.log("Peixes") : console.log("Aquário");
        break;
    
    case 3:
         dia >= 21 ? console.log("Áries") : console.log("Peixes");
        break;

    case 4:
        dia >= 21 ? console.log("Touro") : console.log("Áries");
        break;

    case 5:
         dia >= 21 ? console.log("Gêmeos") : console.log("Touro");
        break;

    case 6:
        dia >= 21 ? console.log("Câncer") : console.log("Gêmeos");
        break;

    case 7:
         dia >= 23 ? console.log("Leão") : console.log("Câncer");
        break;

    case 8:
        dia >= 23 ? console.log("Virgem") : console.log("Leão");
        break;
    
    case 9:
         dia >= 23 ? console.log("Libra") : console.log("Virgem");
        break;

    case 10:
        dia >= 23 ? console.log("Escorpião") : console.log("Libra");
        break;

    case 11:
         dia >= 22 ? console.log("Sagitário") : console.log("Escorpião");
        break;

    case 12:
        dia >= 22 ? console.log("Capricórnio") : console.log("Sagitário");
        break;

    default:
        console.log("Inválido")
        break;
}


//////////////////////////////////////////////////////////////////////////////////////




