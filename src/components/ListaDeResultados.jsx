import React from 'react';
import Card from './Card';
import SuperNoEncontrado from './SuperNoEncontrado';

export default function ListaDeResultados({respuesta}) {

    var lista = respuesta.results
    
    if(Object.keys(respuesta).length === 0){
        return(
            <div></div>
        )
    }

    else if(respuesta.response === "error"){
        return(
            <SuperNoEncontrado/>
        )
    }

    if(lista === undefined){
        lista = respuesta
    }

    if(lista.length > 4){
        lista=lista.slice(0,4)
    }

    
    return (
        <div className="bg-gray-400 bg-opacity-50 rounded my-2 mx-4 p-2 grid grid-cols-2 md:grid-cols-4">
            {
                lista.map((result, key)=>(
                        <Card
                            key={key}
                            nombre={result.name}
                            urlImagen={result.image.url}
                        />
                ))
            }            
        </div>
    )
}
