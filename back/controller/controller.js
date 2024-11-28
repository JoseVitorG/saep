import Tabela from '../module/Tabela.js'

const listarAlgo = async (req, res) => {
    try {
        const response = await Tabela.findAll()
        res.status(200).send(response)
    } catch (err) {
        console.log(err)
        res.status(500).send("erro")
    }
}

export {listarAlgo}