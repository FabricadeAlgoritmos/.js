
function Usuario(id, no, st){
    this.id = id;
    this.nome = no;
    this.status = st;
}

lista = Array();
lista[0] = new Usuario(100, "Jane", true);
lista[1] = new Usuario(50, "Will", true);
lista[2] = new Usuario(110, "Milly", true);
lista[3] = new Usuario(70, "Bob", true);
lista[4] = new Usuario(1, "Lore", true);
var final = 4

function showUsers(lista) {
    console.log("\nArquivo de Usuarios");
    var i = 0
    while(lista[i] != undefined){
        console.log(lista[i]);
        i++;
    }
}

showUsers(lista);

function Indice(co, po){
    this.cod = co;
    this.pos = po;
}

index = Array();
index[0] = new Indice(1, 4);
index[1] = new Indice(50, 1);
index[2] = new Indice(70, 3);
index[3] = new Indice(100, 0);
index[4] = new Indice(110, 2);

function showIndex(lista){
    var i = 0;
    console.log("\nArquivo de Indices");
    while(lista[i] != undefined){
        console.log(lista[i]);
        i++;
    }
}

showIndex(index);

console.log("\nInserindo novo Usuario...")
final++;
lista[final] = new Usuario(2, "Egg", true);

aux = final - 1;
while(aux >= 0 && lista[final].id < index[aux].cod){
    index[aux + 1] = new Indice(index[aux].cod, index[aux].pos);
    aux--;
}
index[aux + 1].cod = lista[final].id;
index[aux + 1].pos = final;

console.log("\nNovo usuário adicionado as listas!!!");
showUsers(lista);
showIndex(index);

console.log("\nBuscando usuario...");
function Busca(lista, index, cod, final){
    codigo = cod;
    console.log("\nPesquisando usuario com id ~:> " + codigo);
    inicio = 0;
    fim = final;
    meio = Math.trunc((inicio + fim) / 2); // pega apenas a parte inteira da divisao
    while(codigo != index[meio].cod && inicio < fim){
        if(codigo > index[meio].cod){
            inicio = meio + 1;
        }else{
            fim = meio - 1;
        }
        meio = (inicio + fim) / 2;
    }

    i = index[meio].pos;

    if(codigo == lista[i].id && lista[i].status){
        console.log(lista[i].nome + " encontrado na posicao " + meio + " do indice e, " + i + " da lista.");
    }else{
        console.log("Codigo não existe na lista!");
    }
}

Busca(lista, index, 50, final);


console.log("\nRemovendo Usuario...")
function Remover(lista, index, cod, final){
    codigo = cod;
    console.log("Pesquisando usuario com id ~:> " + codigo);
    inicio = 0;
    fim = final;
    meio = Math.trunc((inicio + fim) / 2); // pega apenas a parte inteira da divisao
    while(codigo != index[meio].cod && inicio < fim){
        if(codigo > index[meio].cod){
            inicio = meio + 1;
        }else{
            fim = meio - 1;
        }
        meio = (inicio + fim) / 2;
    }

    i = index[meio].pos;

    if(codigo == lista[i].id && lista[i].status){
        lista[i].status = false;
        console.log(lista[i].nome + " removido logicamente!");
    }else{
        console.log("Codigo não existe na lista!");
    }
}

Remover(lista, index, 100, final);

console.log("\nImprimindo usuarios...");
for(i = 0; i <= final; i++){
    if(lista[i].status){
        console.log(lista[i]);
    }
}

console.log("\nAtualizando listas...");
var newList = Array();
k = 0;
for(i = 0; i <= final; i++){
    j = index[i].pos;
    if(lista[j].status){
       newList[k] = new Usuario(lista[j].id, lista[j].nome, true);
       index[k].cod = newList[k].id;
       index[k].pos = k;
        k++;
    }
}
index[k] = undefined;
final = k - 1;
console.log("Os arquivos foram atualizados!!!");
showUsers(newList);
showIndex(index);