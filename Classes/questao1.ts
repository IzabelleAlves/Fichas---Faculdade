class Filme {
  nome: string;
  ano: string;
  genero: string;

  constructor(nome: string, ano: string, genero: string){
    this.nome = nome;
    this.ano = ano;
    this.genero = genero;
  }

  sobre(){
    return `O filme ${this.nome} foi lançado em ${this.ano} e é do gênero ${this.genero}`
  }
}

const filme1 = new Filme('A casa assombrada', '2022', 'Terror')
console.log(filme1.nome)
console.log(filme1.sobre())