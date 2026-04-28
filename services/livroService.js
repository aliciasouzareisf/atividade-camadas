import livroRepository from "../repositories/livroRepository.js";

class LivroService {

    listar() {
        return livroRepository.listar();
    }

    adicionar(titulo, autor) {
        if (!titulo || !autor) {
            throw new Error("Título e autor são obrigatórios.");
        }

        const livro = { titulo, autor };
        livroRepository.adicionar(livro);
    }

    remover(index) {
        livroRepository.remover(index);
    }
}

export default new LivroService();