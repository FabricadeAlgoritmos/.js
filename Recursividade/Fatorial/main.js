function fatorial(x){
  if(x == 0 || x == 1){
    return 1;
  }
  return x * fatorial(x - 1);
}

for(var i = 0; i <= 5; i++){
  console.log(i + "! = " + fatorial(i));
}
