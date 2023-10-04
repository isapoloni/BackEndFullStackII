import { Router } from "express";
import PessoasCTRL from "../Controle/PessoasCTRL.js";

const rotaPessoas = new Router();
const pessoasCTRL = new PessoasCTRL();

rotaPessoas
    .get("/", pessoasCTRL.consultar)
    .put("/", pessoasCTRL.atualizar)
    .post("/", pessoasCTRL.gravar)
    .delete("/", pessoasCTRL.excluir);


export default rotaPessoas;