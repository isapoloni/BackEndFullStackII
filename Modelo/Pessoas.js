import PessoaBD from "../Persistencia/PessoasBD.js";

export default class Pessoas {

    #cpf;
    #nome;
    #endereco;
    #telefone;

    constructor(
        cpf,
        nome,
        endereco,
        telefone,
    ) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#telefone = telefone;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(newCpf) {
        this.#cpf = newCpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(newNome) {
        this.#nome = newNome;
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(newTelefone) {
        this.#telefone = newTelefone;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(newEndereco) {
        this.#endereco = newEndereco;
    }

    toJSON() {
        return {
            cpf: this.#cpf,
            nome: this.#nome,
            endereco: this.#endereco,
            telefone: this.#telefone,
        };
    }

    async gravar() {
        const pessoaBD = new PessoaBD();
        await pessoaBD.gravar(this);
    }
    async excluir() {
        const pessoaBD = new PessoaBD();
        await pessoaBD.excluir(this);
    }
    async atualizar() {
        const pessoaBD = new PessoaBD();
        await pessoaBD.atualizar(this);
    }
    async consultar(term) {
        const pessoaBD = new PessoaBD();
        const pessoas = await pessoaBD.consultar(term);
        return pessoas;
    }
}
