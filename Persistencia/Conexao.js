

import mysql from "mysql2/promise";

export default async function Conect() {
  if (global.conexao) {
    return await global.conexao.getConnection();
  }
  const conexao = mysql.createPool({
    host: "localhost",
    // user: "aluno24-pfsii",
    // porta: "3306",
    // password: "BZ0rKbMOZKXF40FqpZXn",
    user: "root",
    password : "",    
    // database: "backendFullStackII",
    database: "backend",
    // waitForConnections: true,
    // connectionLimit: 10,
    // maxIdle: 10,
    // queueLimit: 0,
    // enableKeepAlive: true,
    // keepAliveInitialDelay: 0,
  });
  global.conexao = conexao;
  return await global.conexao.getConnection();
}


