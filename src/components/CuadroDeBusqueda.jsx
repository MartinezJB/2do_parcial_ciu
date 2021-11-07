import React, { useState, Fragment } from 'react';
import fetchSuperByName from '../functions/fetchSuperByName';
import ListaDeResultados from './ListaDeResultados';

export default function CuadroDeBusqueda() {
    async function buscar(busqueda) {
        const resultado = await fetchSuperByName(busqueda)
        setRespuesta(resultado)
    }
    const [nombreABuscar, setNombreABuscar] = useState("");
    const [respuesta, setRespuesta] = useState({});
    return (
        <Fragment>

        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
                onChange={e => setNombreABuscar(e.target.value)}
            />
            <button onClick={() => buscar(nombreABuscar)}  type="submit">buscar</button>
        </form>

        <ListaDeResultados respuesta={respuesta}/>

        </Fragment>
    )
}
