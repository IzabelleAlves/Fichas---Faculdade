//13. Traduzir os pronomes (I, you, he, she, it, we e they) do Inglês para o Português;

let pronomes = ['I', 'you', 'he', 'she', 'it', 'we', 'they']

for (let i = 0; i < pronomes.length; i++) {
    switch (pronomes[i]) {
        case 'I':
            console.log('eu');
            break;
        case 'you':
            console.log('você');
            break;
        case 'he':
            console.log('ele');
            break;
        case 'she':
            console.log('ela');
            break;
        case 'it':
            console.log('ele/ela');
            break;
        case 'we':
            console.log('nós');
            break;
        case 'they':
            console.log('eles/elas');
            break;
        default:
            console.log('Pronome não reconhecido');
    }
}