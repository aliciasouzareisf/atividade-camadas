import livroService from "../services/livroService.js";

class LivroController {

    adicionar() {
        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;

        try {
            livroService.adicionar(titulo, autor);
            this.listar();
            this.limparCampos();
        } catch (erro) {
            alert(erro.message);
        }
    }

    listar() {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        const livros = livroService.listar();

        livros.forEach((livro, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${livro.titulo}</strong> - ${livro.autor}
                <button onclick="controller.remover(${index})">Excluir</button>
            `;
            lista.appendChild(li);
        });
    }

    remover(index) {
        livroService.remover(index);
        this.listar();
    }

    limparCampos() {
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
    }
}

const controller = new LivroController();
window.controller = controller;
export default controller;