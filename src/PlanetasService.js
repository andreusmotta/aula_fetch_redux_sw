import { api, pegaConfig } from "./conexao";


export const getPlanetas =  async () => {

    let config = pegaConfig("GET", null);

    try {
        const resposta = await fetch(`${api}/planets`, config)
            .then(resposta => resposta.json())
            .then(retorno => {console.log(retorno)})
            .catch(erro => erro.json())
            
            return resposta;
    } catch (erro) {
        console.log(`Erro ao requisitar os planetas: ${erro}`)
    }
}

const planetasService = {
    getPlanetas
}

export default planetasService;