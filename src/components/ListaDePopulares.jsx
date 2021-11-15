import React, { Fragment, useEffect, useState } from 'react';
import fetchSuperById from '../functions/fecthSuperById';
import ListaDeResultados from './ListaDeResultados';

export default function ListaDePopulares() {
    const [idsPopulares, setPopu] = useState(["2","3","4"])
    const [populares, setPopulares] = useState([]);

    
    useEffect( async () => {
        idsPopulares.map(async (id) => {
            const resultado = await fetchSuperById(id);
            console.log(resultado)

            setPopulares([...populares, resultado]);
            
            console.log(populares)
        })
    }, [setPopulares])
    
    return (
        <Fragment>
            <h3>Superheroes populares:</h3>
            <div>

            <ListaDeResultados respuesta={populares} />
                
            </div>
            <button onClick={()=> console.log(populares)}>sa s</button>
        </Fragment>
    )
}
