import React from 'react';
import Card from './Card';
import SuperNoEncontrado from './SuperNoEncontrado';

export default function ListaDeResultados({respuesta}) {

    var lista = respuesta.results
    
    if(respuesta == 0){
        return(
            <div></div>
        )
    }

    else if(respuesta.response === "error"){
        return(
            <SuperNoEncontrado/>
        )
    }

    if(lista.length > 5){
        lista=lista.slice(1,6)
    }

    
    return (
        <div>
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
