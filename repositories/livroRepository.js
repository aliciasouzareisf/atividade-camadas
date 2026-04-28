class LivroRepository {
    constructor() {
        this.livros = [];
    }

    listar() {
        return this.livros;
    }

    adicionar(livro) {
        this.livros.push(livro);
    }

    remover(index) {
        this.livros.splice(index, 1);
    }
}

export default new LivroRepository();