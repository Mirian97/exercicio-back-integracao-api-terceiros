const instanciaAxios = require("../api");
const fs = require("fs/promises");

const listarEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.query;

    try {
        const { data: empresa } = await instanciaAxios.get("/", { params: { domain: dominioEmpresa } })

        if (!empresa.name) {
            return res.status(404).json({ mensagem: "Domínio de empresa não encontrado." })
        }

        if (empresa && empresa.name) {
            const dadosEmpresas = JSON.parse(
                await fs.readFile("./data/empresas.json")
            )

            dadosEmpresas.push(empresa);

            await fs.writeFile(
                "./data/empresas.json",
                JSON.stringify(dadosEmpresas, null, 2)
            )
        }

        return res.status(200).json(empresa)

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do seervidor." })
    }
}

module.exports = {
    listarEmpresa
}