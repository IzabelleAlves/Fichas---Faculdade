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
const filme2 = new Filme('Assombração', '1998', 'Terror')

class ListaDeFilmes {
  filmes: Filme[] = [];

  adicionarFilme(filme: Filme) {
    this.filmes.push(filme);
  }

  listarFilmes(): void {
    this.filmes.forEach(filme => console.log(filme.sobre()));
  }
}

const listaFilmes = new ListaDeFilmes();
listaFilmes.adicionarFilme(new Filme("Inception", '2010', 'Ação'));
listaFilmes.adicionarFilme(new Filme("Matrix", '1999', 'Ficção'));

console.log(listaFilmes.filmes)