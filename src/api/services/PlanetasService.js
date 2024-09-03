import { api, pegaConfig } from "../conexao";


const getPlanetas =  async () => {

    let config = pegaConfig("GET", null);

    try {
        const resposta = await fetch(`${api}/planets`, config)
            .then(resposta => resposta.json())                       
            .catch(erro => erro.json())
            
            return resposta            
    } catch (erro) {
        console.log(`Erro ao requisitar os planetas: ${erro}`)
    }
}

export default getPlanetas;