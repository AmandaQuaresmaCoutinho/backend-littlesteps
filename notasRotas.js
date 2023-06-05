/*
// Rota para criar um novo formulário diário
const Form = mongoose.model('Form', formSchema);
const Form = require('../models/Form');

app.post('/manager/forms', async (req, res) => {
  const formData = req.body;

  try {
    // Crie uma cópia do modelo de formulário com os dados recebidos
    const copyForm = new Form(formData);

    // Salve o formulário no banco de dados
    const savedForm = await copyForm.save();

    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

  
  // Rota para atualizar um formulário diário
  app.patch('/manager/forms/:formId', async (req, res) => {
    try {
      const { formId } = req.params;
      const updatedForm = await Form.findByIdAndUpdate(formId, req.body, {
        new: true,
      }).exec();
  
      if (!updatedForm) {
        return res.status(404).json({ error: 'Formulário não encontrado' });
      }
  
      res.json(updatedForm);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Rota para submeter o formulário do respectivo aluno
  app.post('/manager/forms/submit/:studentId', async (req, res) => {
    const { studentId } = req.params;
    const formData = req.body;
  
    try {
      // Encontre o aluno pelo ID
      const student = await Student.findById(studentId);
  
      if (!student) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }
  
      // Adicione o formulário do dia ao aluno
      student.dailyForm = formData;
      await student.save();
  
      res.json({ message: 'Formulário submetido com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Rota para criar um novo formulário
router.post('/forms', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


// Rota para listar todos os formulários
app.get('/forms', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter os formulários diários de um aluno
app.get('/forms/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;
    const forms = await Form.find({ studentId });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const Form = require('../models/Form');

// Rota para obter todos os formulários
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find().exec();
    res.json(forms);
  } catch (error) {
    res.status(500).json({})
  })


// Rota para salvar os formulários respondidos pela professora
router.post('/save', async (req, res) => {
  try {
    const forms = req.body;
    const savedForms = await Form.insertMany(forms);
    res.json(savedForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para salvar os formulários respondidos pela professora
router.post('/submit', async (req, res) => {
  try {
    const { forms } = req.body;

    // Atualiza os formulários com as respostas da professora
    const updatedForms = await Promise.all(
      forms.map(async (form) => {
        const { formId, ...formFields } = form;
        const updatedForm = await Form.findByIdAndUpdate(
          formId,
          formFields,
          { new: true }
        ).exec();
        return updatedForm;
      })
    );

    res.json(updatedForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Dentro do arquivo routes/forms.js, atualize as rotas de atualização
// e submissão da seguinte maneira:
// Rota para atualizar um formulário existente no dia especificado
router.put('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const { date, ...formFields } = req.body;

    const updatedForm = await Form.findOneAndUpdate(
      { _id: formId, date },
      formFields,
      { new: true }
    ).exec();

    if (!updatedForm) {
      return res.status(404).json({ error: 'Formulário não encontrado' });
    }

    res.json(updatedForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para salvar os formulários do dia respondidos pela professora
router.post('/submit', async (req, res) => {
  try {
    const { date, forms } = req.body;

    // Atualiza os formulários do dia com as respostas da professora
    const updatedForms = await Promise.all(
      forms.map(async (form) => {
        const { formId, ...formFields } = form;
        const updatedForm = await Form.findOneAndUpdate(
          { _id: formId, date },
          formFields,
          { new: true }
        ).exec();
        return updatedForm;
      })
    );

    res.json(updatedForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agora, as rotas de atualização e submissão levam em consideração a 
// data fornecida juntamente com o ID do formulário para encontrar 
// e atualizar apenas os formulários do dia específico. Lembre-se de que
// você precisará fornecer a data juntamente com o ID do formulário ao 
// fazer solicitações para essas rotas no seu aplicativo React. 
// Certifique-se de testar as rotas para garantir que elas estejam 
// funcionando corretamente antes de integrá-las ao seu aplicativo.

// OU

// Rota para atualizar as respostas de um formulário
router.put('/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!form) {
      return res.status(404).json({ error: 'Formulário não encontrado' });
    }
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para salvar os formulários do dia
router.post('/save', async (req, res) => {
  try {
    const forms = req.body.forms;
    const savedForms = await Form.create(forms);
    res.status(201).json(savedForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const formsRouter = require('./routes/forms');

// Certifique-se de que você tenha as rotas definidas corretamente no arquivo server.js. Adicione o seguinte código após a linha const app = express();:
app.use(express.json()); // Middleware para analisar o corpo das requisições como JSON
app.use('/forms', formsRouter);

// OU

// Rota para atualizar as respostas de um formulário existente
router.patch('/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.patch('/forms/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Rota para salvar os formulários do dia que a professora responde
router.post('/salvar', async (req, res) => {
  try {
    const forms = req.body.forms;
    const savedForms = await Promise.all(forms.map(async (form) => {
      const updatedForm = await Form.findByIdAndUpdate(form._id, form, { new: true });
      return updatedForm;
    }));
    res.json(savedForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


// OU

const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Rota para criar um novo formulário
router.post('/', async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o formulário.' });
  }
});

// Rota para obter um formulário específico por ID
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      res.status(404).json({ error: 'Formulário não encontrado.' });
    } else {
      res.json(form);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o formulário.' });
  }
});

// Rota para obter todos os formulários de um aluno específico
router.get('/student/:studentId', async (req, res) => {
  try {
    const forms = await Form.find({ studentId: req.params.studentId });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os formulários.' });
  }
});

// Outras rotas...

module.exports = router


// OU

app.put('/students/:studentId', async (req, res) => {
  const { studentId } = req.params;
  const updatedData = req.body;

  try {
    // Encontre o aluno no banco de dados pelo ID
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    // Atualize os dados pessoais do aluno com os novos valores
    student.name = updatedData.name;
    student.email = updatedData.email;
    // Atualize outros campos conforme necessário

    // Salve as alterações no banco de dados
    await student.save();

    return res.json({ message: 'Dados pessoais do aluno atualizados com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar os dados pessoais do aluno:', error);
    return res.status(500).json({ message: 'Erro ao atualizar os dados pessoais do aluno' });
  }
});


// OU

app.put('/teachers/:teacherId', async (req, res) => {
  const { teacherId } = req.params;
  const updatedData = req.body;

  try {
    // Encontre a professora no banco de dados pelo ID
    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: 'Professora não encontrada' });
    }

    // Atualize os dados pessoais da professora com os novos valores
    teacher.name = updatedData.name;
    teacher.email = updatedData.email;
    teacher.phone = updatedData.phone; // Exemplo de campo adicional
    teacher.address = updatedData.address; // Exemplo de campo adicional
    // Atualize outros campos conforme necessário

    // Salve as alterações no banco de dados
    await teacher.save();

    return res.json({ message: 'Dados pessoais da professora atualizados com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar os dados pessoais da professora:', error);
    return res.status(500).json({ message: 'Erro ao atualizar os dados pessoais da professora' });
  }
});
*/