import React, { useState } from 'react';
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
        <div className="bg-gray-300 rounded p-2">

        <form onSubmit={(e) => e.preventDefault()} className="p-2 w-max mx-auto">
            <input type="text" placeholder="Buscar" className="p-2 rounded-md border-2 border-green-400"
                onChange={e => setNombreABuscar(e.target.value)}
            />
            <button onClick={() => buscar(nombreABuscar)}  type="submit" className="ml-2 bg-yellow-500 hover:bg-yellow-700 rounded py-2 px-4">buscar</button>
        </form>

        <ListaDeResultados respuesta={respuesta}/>

        </div>
    )
}
