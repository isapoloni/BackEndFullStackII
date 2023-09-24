import mysql from "mysql2/promise";

export default async function conectar() {
  if (global.conexao && global.conexao.status != "disconnected") {
    return global.conexao;
  }
  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "aluno24-pfsii",
    port: 3306,
    password:"dSLiWNkdewTfiB4hiPvk",
    database:"backendFullStackII"
  });
  global.conexao = conexao;
  return conexao;
}

