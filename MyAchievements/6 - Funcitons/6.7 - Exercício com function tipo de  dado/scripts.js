function dataType(data) {
    if (typeof (data) === "number"){
        console.log(`O Dado do tipo ${data} é um "Number".`)
    } else if (typeof (data) === "boolean"){
        console.log(`O Dado do tipo ${data} é um "Boolean".`)
    } else if (typeof (data) === "string"){
        console.log(`O Dado do tipo ${data} é uma "String".`)
    } else{
        console.log("O tipo de dado não foi identificado")
    }
}
x=18.17
y=true
z='Olá'
dataType(x);
dataType(y);
dataType(z);