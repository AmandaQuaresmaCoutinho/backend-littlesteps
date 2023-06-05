/* import express from "express";
const app = express;
app.use(express.json());
import mongoose from "mongoose";
import form from "./src/models/form";
import student from "./src/models/user.js"

app.post('/manager/forms', async (req, res) => {
    const formData = req.body;

    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).json(form);

        res.status(201).json(savedForm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter todos os formulários
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find().exec();
        res.json(forms);
    } catch (error) {
        res.status(500).json({})
    }
})

// Rota para obter os formulários diários de um aluno
app.get('/forms/:studentId', async (req, res) => {
    try {
        const { studentId } = req.params;
        const forms = await Form.find({ studentId }) // .exec() '
        res.json(forms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um formulário diário
app.patch('/manager/forms/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const updatedForm = await Form.findByIdAndUpdate(_id, req.body, {
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
        const student = await student.findById(studentId);

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

// Rota para listar todos os formulários
app.get('/forms', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

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

  linha 145   */ 








