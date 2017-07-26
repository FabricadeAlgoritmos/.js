var oldList = new Array(1, 6, 15,19, 23, 27, 38, 88);
var lote = new Array(10, 24, 99, 114);

function showList(lista, titulo){
    console.log("\n" + titulo)
    console.log("[" + lista + "] " + lista.length + " elementos");
}

showList(oldList, "lista velha:");
showList(lote, "lote:");

console.log("\nInserindo lote de valores...");

var newList = Array();
var i = 0, j = 0, k = 0;

while(i < oldList.length && j < lote.length){
    if(oldList[i] < lote[j]){
        newList[k] = oldList[i];
        i++;
    }else{
        newList[k] = lote[j];
        j++;
    }
    k++;
}

while(i < oldList.length){
    newList[k] = oldList[i];
    i++;
    k++;
}

while(j < lote.length){
    newList[k] = lote[j];
    j++;  
    k++;
}

showList(newList, "Nova Lista:");

console.log("\nBuscando um valor...");
function Busca(lista, codigo){
    console.log("Pesquisando o valor ~:> " + codigo);
    inicio = 0;
    final = lista.length - 1;
    meio = Math.trunc((inicio + final) / 2);
    while(codigo != lista[meio] && inicio < final){
        if(codigo > lista[meio]){
            inicio = meio + 1;
        }else{
            final = meio - 1;
        }
        meio = Math.trunc((inicio + final) / 2);
    }
    
    if(codigo == lista[meio]){
        console.log(lista[meio] + " encontrando na posição " + meio);
    }else{
        console.log("Codigo não existe na lista!");
    }
}

Busca(newList, 88);
Busca(newList, -1);

console.log("\nRemovendo lote de valores...");
showList(newList, "Lista Atual:")
var newLote = Array(1, 15, 23, 24, 38, 114);
showList(newLote, "Novo lote:");
var attList = Array();

var i = 0, j = 0, k = 0;
while(j < newLote.length){
    if(newList[i] != newLote[j]){
        attList[k] = newList[i];
        k++;
    }else{
        console.log(newList[i] + " removido!");
        j++;
    }
    i++;
}

while(i < newList.length){
    attList[k] = newList[i];
    k++;
    i++;
}

showList(attList, "Lista Atualizada:");