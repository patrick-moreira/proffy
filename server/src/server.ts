import express from "express";

const app = express();

app.use(express.json());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// CORPO (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, Filtros, Ordenação...

app.post("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.listen(3333);
