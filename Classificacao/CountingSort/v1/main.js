vet = [5, 4, 3, 2, 1];
count = [0, 0, 0, 0, 0];
saida = new Array();
for(var i = 0; i < vet.length - 1; i++){
  for(var j = i + 1; j < vet.length; j++){
    if(vet[i] > vet[j]){
      count[i]++;
    }else{
      count[j]++;
    }
  }
}

for(var i = 0; i < vet.length; i++){
  saida[count[i]] = vet[i];
}
console.log(saida);
