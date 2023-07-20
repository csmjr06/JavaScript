function tamanhoTexto(texto) {
    if(texto.length > 10) {
        return("Texto muito longo");
      } else {
        return("Texto dentro do limite");
      }
}
  
console.log(tamanhoTexto("Teste"));
console.log(tamanhoTexto("Textomuitolongoooooooooo!"));