/*
    Una función que, dado el id del superheroe, lo devuelve de la api
    Devuelve el objeto con el superheroe.
*/

export default async function fetchSuperByName(id) {
    const response = await fetch("https://www.superheroapi.com/api.php/4178825762246858/" + id)
    return await response.json()
}