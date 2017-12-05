var vetor = [5, 4, 3, 2, 1];

var max = 4;
var troca = 1;

while(troca != 0){
    troca = 0;
    for(var i = 0; i <= max - 1; i++){
        if(vetor[i] > vetor[i + 1]){
            var aux = vetor[i];
            vetor[i] = vetor[i + 1];
            vetor[i + 1] = aux;
            troca = 1;
        }
    }
    max--;
}

console.log(vetor);
