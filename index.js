import express from "express";
import cors from "cors";
import rotaProduto from "./Router/rotaProduto.js";
import rotaCategoriaProd from './Router/rotaCategoriaProd.js';
import rotaPessoas from "./Router/rotaPessoas.js";
import rotaDoacao from "./Router/rotaDoacao.js";

const app = new express();

app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/produto', rotaProduto);
app.use('/categoriaProduto', rotaCategoriaProd);
app.use('/pessoas', rotaPessoas)
 app.use('/doacao', rotaDoacao)

 const porta = 4024;
 const hostname = '0.0.0.0';

 app.listen(porta,hostname,()=>{
     console.log("Backend ouvindo em http://"+hostname+":"+porta);
 });

// app.listen(3307, "localhost", () => {
//     console.log("Service running on http://localhost:3307");
// });


//https://129.146.68.51/aluno24-pfsii/endpoint
//http://localhost:3307/endpoint