Soma +
Subtração -
Multiplicação * 4 * 5 = 2
Divisão / 10 / 5 = 2
Resto (Modulo) % 10 % 3 = 1
potência ** 2 ** 3 = 2 * 2 *

// Se n % 

//        > Maior que
//        < Menor que
//        >= Maior que ou igual
//        <= menor que ou igual
//        != diferente
//        == igual (valor)
//        === estritamente igual
//        !== estritamente diferente

console.log(10 == "10") // true
console.log("-------------")
console.log(10 === "10") // false

let botao = null;

console.log(typeof botao); //verica o tipo da variavel

console.log(18 >= 18);


let perfil = "Administrador";
if (perfil === "Administrador"){
    console.log("Oba e adiministrador");
}else{
    console.log("Vish e usuário comum")
}

// && AND
// Condição A      Condição B      A && B
// true            true            true
// true            false           false
// false           true            false
// false           false           false
// // || OR
// Condição A      Condição B      A && B
// true            true            true
// true            false           true
// false           true            true
// false           false           false

// NOT -inversão de valor
let ativo = true;
console.log(!ativo);
console.log(!false);
// muito usado para alternar estados: 
// visível/invisível, ativo/inativo
