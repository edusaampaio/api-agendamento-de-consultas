const User = require('../../models/Users/users');
exports.cadastroUsuario = async (req, res) => {
    try {
        const { nome, sobrenome, email } = req.body;
        const novoUsuario = new User({ nome, sobrenome, email });
        const usuarioSalvo = await novoUsuario.save();
        db.usuarios.createIndex({ email: 1 }, { unique: true })
        return res.status(201).json(usuarioSalvo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const usuarios = await User.find();
        return res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await User.findById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, sobrenome, email } = req.body;
        const usuarioAtualizado = await User.findByIdAndUpdate(id, { nome, sobrenome, email }, { new: true });
        if (!usuarioAtualizado) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json(usuarioAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioDeletado = await User.findByIdAndDelete(id);
        if (!usuarioDeletado) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}