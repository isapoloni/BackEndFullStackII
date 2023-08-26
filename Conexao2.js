import mysql from 'mysql2/promise'
/* Estabelecendo conexão com o banco de dados*/

export default async function conectando(){
    if (global.conexao && (global.conexao.status !== "disconnected"))
        return global.conexao
    else{

    const connec = await mysql.createConnection({
        host:"localhost",
        user:"aluno33-pfsii",
        porta:"3306",
        password:"aluno33-pfsii",
        database:"backend-fullstackii"
        // waitForConnections:true,
        // connectionLimit:10,
        // maxIdle:10,
        // idleTimeout:60000,
        // queueLimit:0,
        // enableKeepAlive:true,
        // keepAliveInitialDelay:0
    })

    global.conexao = connec

    return connec
}}