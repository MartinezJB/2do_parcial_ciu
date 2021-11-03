import React, { useState, Fragment } from 'react';
import fetchSuperByName from '../functions/fetchSuperByName';

export default function CuadroDeBusqueda() {
    async function buscar(busqueda) {
        const result = await fetchSuperByName(busqueda)
        console.log(result);
    }
    const [nombreABuscar, setNombreABuscar] = useState("")
    return (
        <Fragment>

        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
                onChange={e => setNombreABuscar(e.target.value)}
            />
            <button onClick={() => buscar(nombreABuscar)}  type="submit">buscar</button>
        </form>

        </Fragment>
    )
}
