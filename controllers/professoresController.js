
 // Lista de professores armazenada na memória
let professores = [
  {
    id: 1,
    nome: 'Jean Augusto de Souza Gomes',
    idade: 25,
    departamento: 'Matemática',
    turmas: [
      {
        codigo: 'MAT101',
        disciplina: 'Matemática',
        alunos: ['Ana', 'Pedro']
      }
    ]
  },
  {
    id: 2,
    nome: 'Maria Silva',
    idade: 35,
    departamento: 'História',
    turmas: []
  }
];

// GET - Listar todos os professores
exports.listar = (req, res) => {
  res.json(professores);
};

// GET - Buscar professor pelo ID
exports.buscar = (req, res) => {
  const professor = professores.find(p => p.id === Number(req.params.id));

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  res.json(professor);
};

// GET - Listar turmas de um professor
exports.listarTurmas = (req, res) => {
  const professor = professores.find(p => p.id === Number(req.params.id));

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  res.json(professor.turmas);
};

// GET - Buscar professores por departamento
exports.porDepartamento = (req, res) => {
  const resultado = professores.filter(p =>
    p.departamento.toLowerCase() === req.params.departamento.toLowerCase()
  );

  res.json(resultado);
};

// PUT - Atualizar professor
exports.atualizar = (req, res) => {
  const professor = professores.find(p => p.id === Number(req.params.id));

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  if (req.body.nome !== undefined) professor.nome = req.body.nome;
  if (req.body.idade !== undefined) professor.idade = req.body.idade;
  if (req.body.departamento !== undefined) professor.departamento = req.body.departamento;

  res.json(professor);
};

// POST - Adicionar turma
exports.adicionarTurma = (req, res) => {
  const professor = professores.find(p => p.id === Number(req.params.id));

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const { codigo, disciplina, alunos } = req.body;

  // Impede o cadastro de turmas sem informações
  if (!codigo || !disciplina) {
    return res.status(400).json({
      mensagem: 'Informe o código e a disciplina da turma'
    });
  }

  const turma = {
    codigo: codigo,
    disciplina: disciplina,
    alunos: Array.isArray(alunos) ? alunos : []
  };

  professor.turmas.push(turma);

  res.status(201).json(turma);
};

// DELETE - Remover professor
exports.remover = (req, res) => {
  const indice = professores.findIndex(p => p.id === Number(req.params.id));

  if (indice === -1) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  professores.splice(indice, 1);

  res.json({ mensagem: 'Professor removido com sucesso' });
};
