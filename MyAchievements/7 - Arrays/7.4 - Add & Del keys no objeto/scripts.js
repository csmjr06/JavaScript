let onibus = {
    rodas: 8,
    limite_de_passageiros: 40,
    portas: 2
};

onibus.janelas = 20;
delete onibus.rodas;

console.log("Rodas = " + onibus.rodas);
console.log("janelas = " + onibus.janelas);