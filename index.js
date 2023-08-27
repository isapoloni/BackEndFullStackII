import express from "express";
import cors from "cors";
import rotaProduto from "./Router/rotaProduto.js";

// const server = express();
// server.use(cors({ origin: "*" }));
// server.use(express.urlencoded({ extended: false }));
// server.use(express.json());
// server.use("/pessoas", routerPessoa);
// server.use("/produto", rotaProduto);
// server.use("/servicos", routerServico);
// server.use("/categoria", rotaCategoriaProd);

// server.listen(3308, "localhost", () => {
//   console.log("Service running on http://localhost:3308 ");
// });

const app = new express();
app.use(cors({origin:"*"}));

 app.use(express.urlencoded({extended:false})); 

 app.use(express.json());

 app.use('/produto', rotaProduto);
 
 const porta = 4024;
 const hostname = '0.0.0.0';
 
 app.listen(porta,hostname,()=>{
     console.log("Backend ouvindo em http://"+hostname+":"+porta);
 });

