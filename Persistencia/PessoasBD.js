
import Pessoas from "../Modelo/Pessoas.js";
import Conect from "./Conexao.js";

export default class PessoaBD {
  async gravar(pessoas) {
    if (pessoas instanceof Pessoas) {
      const conect = await Conect();
      const sql =
        "INSERT INTO pessoas(cpf,nome,endereco,telefone) VALUES (?,?,?,?) ";
      const values = [
        pessoas.cpf,
        pessoas.nome,
        pessoas.endereco,
        pessoas.telefone,
      ];
      await conect.query(sql, values);
    }
  }

  async atualizar(pessoas) {
    if (pessoas instanceof Pessoas) {
      const conect = await Conect();
      const sql =
        "UPDATE pessoas SET nome=?,endereco=?,telefone=? WHERE cpf=?";
      const values = [
        pessoas.nome,
        pessoas.endereco,
        pessoas.telefone,
        pessoas.cpf
      ];
      await conect.query(sql, values);
    }
  }
  async excluir(pessoas) {
    if (pessoas instanceof Pessoas) {
      const conect = await Conect();
      const sql = "DELETE FROM pessoas WHERE cpf=? ";
      const values = [pessoas.cpf];
      await conect.query(sql, values);
    }
  }
  async consultar(term) {
    const conect = await Conect();
    const sql = "SELECT * FROM pessoas";
    const values = ["%" + term + "%"];
    const [rows] = await conect.query(sql, values);
    const listPessoas = [];
    for (const row of rows) {
      const pessoas = new Pessoas (

        row["cpf"],
        row["nome"],
        row["endereco"],
        row["telefone"],

        );
      listPessoas.push(pessoas);
    }
    return listPessoas;
  }
}