var vetor = new Array();
fim = 0;
vetor[fim] = Math.round(1 + Math.random() * (100 - 1));
fim++;
while(fim < 6){
  aux = Math.round(1 + Math.random() * (100 - 1));
  i = fim;
  while(i > 0 && aux < vetor[i - 1]){
    vetor[i] = vetor[i - 1];
    i--;
  }
  vetor[i] = aux;
  fim++;
}

console.log(vetor);
