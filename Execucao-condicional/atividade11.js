//Dado o dia da semana, imprimir as aulas que os estudantes do primeiro semestre terão no dia;

let diaDaSemana = 'terça feira'
diaDaSemana = diaDaSemana.toLowerCase().trim() 
// toLowerCase() para garantir que a comparação não seja sensível a maiúsculas/minúsculas.
// trim() para evitar problemas com entradas que contenham espaços adicionais.

switch (diaDaSemana) {
    case 'segunda feira':
    console.log('Aula de: Matématica e português')
    break;
    case 'terça feira':
    console.log('Aula de: Inglês e física')
    break;
    case 'quarta feira':
    console.log('Aula de: italiano e francês')
    break;
    case 'quinta feira':
    console.log('Aula de: História e geofrafia')
    break;
    case 'sexta feira':
    console.log('Aula de: Biologia e ciências')
    break;
    default:
        console.log('Dia inválido');
}

//ou usando if else

/*if (diaDaSemana == 'segunda feira') {
    console.log('Aula de: Matématica e português')
} else if (diaDaSemana == 'terça feira') {
    console.log('Aula de: Inglês e física')
} else if (diaDaSemana == 'quarta feira') {
    console.log('Aula de: italiano e francês')
} else if (diaDaSemana == 'quinta feira') {
    console.log('Aula de: História e geofrafia')
} else if (diaDaSemana == 'sexta feira') {
    console.log('Aula de: Biologia e ciências')
} else {
    console.log('Dia inválido')
}*/