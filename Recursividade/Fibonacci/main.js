function fibonacci(x){
  if(x == 0 || x == 1){
    return 1;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
}

for(var i = 0; i <= 10; i++){
  console.log(fibonacci(i));
}
