import fetchSuperById from "./fecthSuperById";

export default async function actualizarSupers (ids, setSuper) {

    const asyncRes = await Promise.all(ids.map(async (id) => {
        const resultado = await fetchSuperById(id);
        return resultado
    }))
    setSuper(asyncRes)
    console.log("error")
}