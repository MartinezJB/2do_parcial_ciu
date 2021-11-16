import React, { Fragment, useEffect, useState } from 'react';
import fetchSuperById from '../functions/fecthSuperById';
import BtnCambioDePagina from './BtnCambioDePagina';
import ListaDeResultados from './ListaDeResultados';

export default function ListadoDeSupers() {
    const [idsSupers, setIdsSupers] = useState([1,2,3,4])
    const [Supers, setSupers] = useState([]);
    const [nroPagina, setNroPagina] = useState(1);

    
    const actualizarComponente = async () => {
        const asyncRes = await Promise.all(idsSupers.map(async (id) => {
            const resultado = await fetchSuperById(id);
            return resultado
        }))
        setSupers(asyncRes)

        console.log("Si ves esto muchas veces seguidas, se rompió todo")
    }
    
    useEffect( async () => {
        actualizarComponente()
    }, [setSupers])

    

    return (
        <Fragment>
            <h3>Todos los Superheroes:</h3>
        

            <ListaDeResultados respuesta={Supers} />

            <h3>Pág. {nroPagina}</h3>
            
            <BtnCambioDePagina setPaginaActual={setIdsSupers} actualizarComponente={actualizarComponente} esPaginaSiguiente={true} nroPagina={nroPagina} setNroPagina={setNroPagina} />
            <BtnCambioDePagina setPaginaActual={setIdsSupers} actualizarComponente={actualizarComponente} esPaginaSiguiente={false} nroPagina={nroPagina} setNroPagina={setNroPagina}  />

        </Fragment>
    )
}
