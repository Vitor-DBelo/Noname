import express from "express";
import router from "./router.js";
import { fileURLToPath } from "url";
import path from 'path';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const app = express();
const port = 2310;

// Middleware: função que processa a requisição antes do handler
app.use(express.urlencoded({ extended: true })); // Serve para acessar os dados de formulários de forma direta, pegando os valores do body que não estão em JSON  
// app.use(express.json()); // Usado quando o frontend envia requisições com "Content-Type: application/json"  

// * - EJS: Renderiza páginas dinâmicas no servidor, injetando dados direto no HTML.
// * - Arquivos Estáticos: Serve arquivos direto (HTML, CSS, JS) e é ideal para SPAs ou front-end separado.
// * Ambas abordagens são válidas; escolha a que melhor se adapta ao seu projeto.

// Configura a pasta das views e o template engine EJS
// Atenção: usamos "views" (plural) e path.join para evitar duplicar o caminho "src"
app.set('views', path.join(__dirname, 'view'));  // app.set('views', './src/view'); para passar o caminho mais pode dar alguns poblemas
app.set('view engine', 'ejs');

app.use(router);

app.listen(port, () => {
    console.log(
        `Servidor rodando na porta ${port}\nhttp://localhost:${port}`
    );
});
