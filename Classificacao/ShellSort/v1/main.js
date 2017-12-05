vet = new Array( 32, 18, 45, 29, 16, 41, 30, 27 , 14, 37, 29, 38, 20, 32, 17, 26);

inc = [8, 4, 2, 1];

var x = 0;

while(inc[x] > 1){
  var i = 0;
  var j = inc[x];
  while(j < vet.length){
    if(vet[i] > vet[j]){
      var aux = vet[i];
      vet[i] = vet[j];
      vet[j] = aux;
    }
    i++;
    j++;
  }// fim while
  x++;
}// fim while

function InsertionSort(v){
  for(i = 1; i < v.length; i++){
    var j = i;
    while(v[j] < v[j - 1] && j > 0){
      var aux = v[j];
      v[j] = v[j - 1];
      v[j - 1] = aux;
      j--;
    }
  }
}

InsertionSort(vet);

console.log(vet);
