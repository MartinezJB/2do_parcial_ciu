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

        //console.log("Si ves esto muchas veces seguidas, se rompió todo")
    }
    
    useEffect( async () => {
        actualizarComponente()
    }, [setSupers])

    

    return (
        <div className="border-2 mt-2 p-2 rounded">
            <h3 className="ml-4">Todos los Superheroes:</h3>
        

            <ListaDeResultados respuesta={Supers} />

            
            <div className="flex justify-evenly">
                <BtnCambioDePagina setPaginaActual={setIdsSupers} actualizarComponente={actualizarComponente} esPaginaSiguiente={false} nroPagina={nroPagina} setNroPagina={setNroPagina}  />
                <h3 className="self-center">Pág. {nroPagina}</h3>
                <BtnCambioDePagina setPaginaActual={setIdsSupers} actualizarComponente={actualizarComponente} esPaginaSiguiente={true} nroPagina={nroPagina} setNroPagina={setNroPagina} />
            </div>

        </div>
    )
}
