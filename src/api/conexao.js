export const api = "https://swapi.dev/api/";

export const pegaConfig = (method, data) => {

    let config = {
        method,
        body: data,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    return config
}