vet = [26, 19, 34, 19, 23, 16, 31, 26, 31, 22, 21, 29];

function getMax(vet){
  var m = vet[0];
  for(var i = 0; i < vet.length; i++){
    if(vet[i] > m){
      m = vet[i];
    }
  }
  return m;
}

function getMin(vet){
  var m = vet[0];
  for(var i = 0; i < vet.length; i++){
    if(vet[i] < m){
      m = vet[i];
    }
  }
  return m;
}

var maior = getMax(vet);
var menor = getMin(vet);

//console.log("Maior: " + maior + "\nMenor: " + menor);
cont = new Array();
for(var i = menor; i <= maior; i++){
  cont[i] = 0;
}

for(var i = 0; i < vet.length; i++){
  cont[vet[i]]++;
}

//console.log(cont);

for(var i = menor + 1; i <= maior; i++){
  cont[i] += cont[i - 1];
}
//console.log(cont);
saida = [];
for(var j = 0; j < vet.length; j++){
  var i = cont[vet[j]];
  //console.log("i recebe " + cont[vet[j]]);
  saida[i - 1] = vet[j];
  //console.log("saida na posição " + (i - 1) + " recebe " + vet[j]);
  cont[vet[j]]--;
}
console.log(saida);
