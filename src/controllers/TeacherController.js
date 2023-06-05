import UserTeacher from "../models/UserTeacher.js";

// Cria um novo user já com os dados
async function newTeacherUser(req, res) {
    try {
        const userData = req.body;
        const newUser = await UserTeacher.create(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
// Cria vários users já com os dados
async function newTeacherUsers(req, res) {
    try {
        const userData = req.body;
        const newUser = await UserTeacher.insertMany(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Apaga todos os formulários
async function deleteTeacherUsers(req, res) {
    try {
        const del = await UserTeacher.deleteMany();

        return res.status(200).json(del);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Obtém todos os formulários
async function getTeacherUsers(req, res) {
    try {
        const users = await UserTeacher.find().exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export {newTeacherUser, newTeacherUsers, deleteTeacherUsers, getTeacherUsers}
