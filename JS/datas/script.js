var data = new Date(); //mostra a data de hoje
console.log("A data de hoje é: " + data);

//data.getHours(); | pega so a hora
//data.getMinutes();| pega so os minutos
//data.getSeconds(); | pega so os segundos

var datanova = new Date("March, 10, 2019");//para criar uma data
console.log("A data criada foi: " + datanova);

//Date.parse(datanova); | transformou a datanova em milisegundos

//new Date(1552186800000); | transforma os milisegundos para data

//datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear(); | formatando a data (no month tem +1 pq sempre começa a contar do 0, no caso janeiro seria o mes 0)

//datanova.setDate(datanova.getDate()+5); | adiciona dias no getDate

//datanova.setHours(datanova.getHours() + 10); | adiciona horas no getHours



//Para mostrar em dias da semana:

//var dias = ['Doming', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']; | Cria uma array com os dias

//dias[datanova.getDay()]; | Depois pega a variavel da array e digita dentre o getDay que vai pegar a posição da array de acordo com o dia