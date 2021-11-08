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

        <form onSubmit={(e) => e.preventDefault()} className="mt-2 p-2 w-max mx-auto bg-pink-300 bg-opacity-20 rounded">
            <input type="text" className="p-2 rounded-md border-2 border-black"
                onChange={e => setNombreABuscar(e.target.value)}
            />
            <button onClick={() => buscar(nombreABuscar)}  type="submit" className="ml-2 bg-green-400 hover:bg-green-600 rounded py-2 px-4">buscar</button>
        </form>

        <ListaDeResultados respuesta={respuesta}/>

        </Fragment>
    )
}
