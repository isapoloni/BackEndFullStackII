import mysql from "mysql2/promise";

export default async function conectar() {
  if (global.conexao && global.conexao.status != "disconnected") {
    return global.conexao;
  }
  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "aluno24-pfsii",
    porta: 3306,
    password:"ISABELLA-BANCO",
    database:"backendFullStackII"
  });
  global.conexao = conexao;
  return conexao;
}
