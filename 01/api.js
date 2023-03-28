const axios = require("axios")

const instanciaAxios = axios.create({
    baseURL: `https://companyenrichment.abstractapi.com/v1`,
    params: {
        api_key: "cc14f44d21674180bb1d6e99e2d9a42a",
    }
})

module.exports = instanciaAxios;