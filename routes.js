import { Router } from "express";

import { newForm, deleteForms, newForms, getForms, updateForm } from "./src/controllers/FormController.js";
import { newStudentUser, newStudentUsers, deleteStudentUsers, getStudentUsers, getDailyForm } from "./src/controllers/StudentController.js"
import { newTeacherUser, newTeacherUsers, deleteTeacherUsers, getTeacherUsers } from "./src/controllers/TeacherController.js";

const routes = Router();

// New form
routes.post("/api/manager/forms", newForm)
// InsertMany Forms
routes.post("/api/manager/forms", newForms)
// Delete forms
routes.delete("/api/manager/forms", deleteForms)
// Obter formulários
routes.get("/api/manager/forms", getForms)
// Atualizar o formulário
routes.post('/api/manager/forms/:_id', updateForm);

// UserStudent

// New user
routes.post("/api/manager/studentUser", newStudentUser)
// InsertMany Users
routes.post("/api/manager/studentUsers", newStudentUsers)
// Delete users
routes.delete("/api/manager/studentUsers", deleteStudentUsers)
// Obter users
routes.get("/api/manager/studentUsers", getStudentUsers)
// Obter formulário diário
routes.get("/api/forms/:date/:studentId", getDailyForm)

// UserTeacher

// New user
routes.post("/api/manager/teacherUser", newTeacherUser)
// InsertMany Users
routes.post("/api/manager/teacherUsers", newTeacherUsers)
// Delete users
routes.delete("/api/manager/teacherUsers", deleteTeacherUsers)
// Obter users
routes.get("/api/manager/teacherUsers", getTeacherUsers)

export default routes