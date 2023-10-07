import { Router } from "express";
import DoacaoCTRL from "../Controle/DoacaoCTRL.js";

const doacaoCTRL = new DoacaoCTRL();
const rotaDoacao = Router();

rotaDoacao
    .get("/", doacaoCTRL.consultar)
    .post("/", doacaoCTRL.gravar)
    .get("/:codigo", doacaoCTRL.consultar)
    .put("/", doacaoCTRL.atualizar)


export default rotaDoacao;