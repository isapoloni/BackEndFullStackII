import express from 'express';
import Denuncia from './Modelos/Denuncia.js';
import cors from 'cors';
import rotaDenuncia from './rotaDenuncia.js';

const app = new express();
app.use(cors({origin:"*"}));

//Faz com que o body seja lido corretamente, pois passa a usar a biblioteca query
 app.use(express.urlencoded({extended:false})); 

//configura para a processar corretamente o formato Json
 app.use(express.json());

 app.use('/denuncias',rotaDenuncia);

//  const porta= 4033;
 const hostname = '0.0.0.0';
 
 app.listen(porta,hostname,()=>{
     console.log("Backend ouvindo em http://"+hostname+":"+porta);
 });



/* ----  Criando entidade a partir da camada de modelo----*/
// const denuncia1 = new Denuncia('abandono','Rua Y','52','456544','Bora','coitadinho','4564-4454')  

// /* ---------------GRAVANDO--------------------*/
// denuncia1.gravar().then(()=>{
//     console.log("Cliente armazenado com sucesso")
// });


/* --------------ATUALIZANDO--------------------*/
/*paciente1.nome = 'Roberta';
paciente1.atualizar().then(()=>{
    console.log("Cliente atualizado com sucesso")
});*/

/* ---------------DELETANDO--------------------*/
/*paciente1.removerdoBD().then(()=>{
    console.log("Cliente excluido com sucesso")
});*/

/* ---------------BUSCANDO --------------------*/
/*
const busc = new Pacientes();
busc.consultar('').then((pacientes)=>{
    for (const paciente of pacientes){
        console.log(paciente.toJson());
    }
});*/

/* ---------------BUSCANDO POR CPF--------------------*/
/*
const busc = new Pacientes();
busc.consultarCPF('123456789-5').then((pacientes)=>{
    for (const paciente of pacientes){
        console.log(paciente.toJson());
    }
});*/