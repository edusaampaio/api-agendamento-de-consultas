const User = require('../../models/Users/users');
exports.cadastroUsuario = async (req, res) => {
    try {
        const { nome, sobrenome, email } = req.body;
        const novoUsuario = new User({ nome, sobrenome, email });
        const usuarioSalvo = await novoUsuario.save();
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
