/*
    Una función que, dado un nombre de superheroe, lo busca en la api.
    Devuelve un arreglo con todos los resultados posibles.
*/

export default async function fetchSuperByName(name) {
    const response = await fetch("https://www.superheroapi.com/api.php/4178825762246858/search/" + name)
    return await response.json()
}