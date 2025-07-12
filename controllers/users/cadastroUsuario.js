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

