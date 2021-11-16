import React, { Fragment, useEffect, useState } from 'react';
import fetchSuperById from '../functions/fecthSuperById';
import ListaDeResultados from './ListaDeResultados';

export default function ListadoDeSupers() {
    const [idsSupers, setIdsSupers] = useState(["1","2","3","4"])
    const [Supers, setSupers] = useState([]);

    
    useEffect( async () => {
        const asyncRes = await Promise.all(idsSupers.map(async (id) => {
            const resultado = await fetchSuperById(id);
            return resultado
        }))
        setSupers(asyncRes)
    }, [setSupers])

    function cambiarPagina() {
        console.log("siguiente pagina")
    }
    
    return (
        <Fragment>
            <h3>Todos los Superheroes:</h3>
            <div>

            <ListaDeResultados respuesta={Supers} />
                
            </div>

            <button className="bg-gray-700" onClick={() => cambiarPagina()}>Siguiente página --+</button>
            
        </Fragment>
    )
}
