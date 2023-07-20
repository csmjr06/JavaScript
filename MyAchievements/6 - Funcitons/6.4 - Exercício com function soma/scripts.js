function soma(a,b){
    if (a === undefined || b === undefined) {
        return("Nada a somar.")
    } else {
        return(a + b)
    }
}
console.log(soma(0));
console.log(soma(50,30));