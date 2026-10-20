
# API de Professores - AC2

Projeto desenvolvido em Node.js utilizando Express para gerenciar professores e suas turmas.

Os dados são armazenados em arrays, sem utilizar banco de dados.

## Como executar

1. Instalar o Node.js.
2. Abrir a pasta do projeto no VS Code.
3. No terminal, executar:

```bash
npm install
npm start
```

O servidor será iniciado na porta 3000.

## Rotas da API

- GET /professores - Listar professores
- GET /professores/:id - Buscar professor por ID
- GET /professores/:id/turmas - Listar turmas
- GET /professores/departamento/:departamento - Buscar por departamento
- PUT /professores/:id - Atualizar professor
- POST /professores/:id/turmas - Adicionar turma
- DELETE /professores/:id - Excluir professor

## Testes

Os testes foram realizados utilizando o Postman.

As capturas de tela estão na pasta prints.

## Autor

Jean Augusto de Souza Gomes - RA: 251131  
