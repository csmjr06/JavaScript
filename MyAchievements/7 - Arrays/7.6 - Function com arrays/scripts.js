function elementos(lista) {
    if (lista.length < 5){
        return ("Poucos elementos.")
    } else {
        return ("Muitos elementos.")
    }
}

lista1 = ["Arroz", "Feijão", "Farinha", "Queijo", "Ovos", "Papel Higiênico", "Bera"]
lista2 = ["carne", "sal", "carvão"];

console.log(elementos(lista1));
console.log(elementos(lista2));