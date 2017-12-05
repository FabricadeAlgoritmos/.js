var vet1 = [2, 4, 6, 8, 10];
var vet2 = new Array(1, 3, 5, 7, 9);

var i = 0, j = 0, k = 0;
var vet3 = [];
while(i < vet1.length && j < vet2.length){
  if(vet1[i] < vet2[j]){
    vet3[k] = vet1[i];
    i++;
  }else{
    vet3[k] = vet2[j];
    j++;
  }
  k++;
}

while(i < vet1.length){
  vet3[k] = vet1[i];
  i++;
  k++;
}

while(j < vet2.length){
  vet3[k] = vet2[j];
  j++;
  k++;
}

console.log(vet3);
