vetor = new Array(5, 4, 3, 2, 1);
for(var i = 0; i < vetor.length - 1; i++){
  menor = i;
  for(var j = i + 1; j < vetor.length; j++){
    if(vetor[menor] > vetor[j]){
      menor = j;
    }
  }
  var aux = vetor[i];
  vetor[i] = vetor[menor];
  vetor[menor] = aux;
}

console.log(vetor);
