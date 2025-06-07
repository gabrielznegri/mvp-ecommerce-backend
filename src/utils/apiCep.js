const axios = require('axios');

const buscarCep = async (req, res) => {
  try {
    const cep = req.params.cep;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    const response = await axios.get(url);

    if (response.data.erro) {
        return res.status(404).json({ error: 'CEP não encontrado' });
    }

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao consultar CEP' });
  }
}

module.exports = { 
    buscarCep 
};
