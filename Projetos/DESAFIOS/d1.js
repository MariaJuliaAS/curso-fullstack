function verificador(valor){
    if(valor > 0){
        console.log(`Valor positivo: ${valor}`);
    }else if(valor < 0){
        console.log(`Valor negativo: ${valor}`);
    }else{
        console.log('Valor igual a 0!');
    }
}

verificador(0);