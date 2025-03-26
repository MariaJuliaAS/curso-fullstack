// CONDICIONAIS

var valor = 30; 

if(valor === 30){ //SE PASSAR APENAS == VAI VERIFICAR SE É = 30 INDEPENDENTE DO TIPO, SE PASSAR === VAI COMPARAR O VALOR E O TIPO DA VARIAVEL (ELES TEM QUE SER IGUAIS)
    console.log("SIM, O VALOR É IGUAL A 30!")
}else{
    console.log("NÚMERO DIFERENTE DE 30")
}

var nome = "Júlia";

if(nome === "Júlia"){
    console.log("Bem vindia Júlia")
}else{
    console.log("Quem é você??")
}

var userOnline = false;

if(userOnline === true){
    console.log('USUÁRIO ESTÁ ONLINE');
}else{
    console.log("USUÁRIO ESTÁ OFFLINE!")
}

// Operador ternário

var numero = 90;

numero === 10 ? console.log("O número é igual a 10") : console.log("O número diferente de 10") // ? = if | : = else
