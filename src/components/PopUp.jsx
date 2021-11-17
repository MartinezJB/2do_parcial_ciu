import React from 'react'
import Progress from './Progress'

export default function PopUp({ estadoPopUp, setPopUp, personaje }) {
    
    if(estadoPopUp) {
        return (
            null
        )
    }

    return (
        <div onClick={() => setPopUp(e => !e)} className="fixed flex top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 px-auto z-10">
            <div className="flex flex-col-reverse sm:flex-row bg-gray-50 w-max m-auto justify-center p-2 rounded">
                
                <div className="">
                    <h2 className="text-center">{personaje.name}</h2>
                    <p>Estadísticas:</p>
                    <div id="stats" className="text-sm">
                        
                        <Progress titulo="Inteligencia" valor={personaje.powerstats.intelligence} />
                        <Progress titulo="Fuerza" valor={personaje.powerstats.strength} />
                        <Progress titulo="Velocidad" valor={personaje.powerstats.speed} />
                        <Progress titulo="Dureza" valor={personaje.powerstats.durability} />
                        <Progress titulo="Poder" valor={personaje.powerstats.power} />
                        <Progress titulo="Combate" valor={personaje.powerstats.combat} />
                        
                    </div>

                    <p className="text-center">{personaje.biography.publisher}</p>

                </div>
                
                
                <img src={personaje.image.url} className="sm:pl-2 h-60 sm:h-80 md:h-96" />
            
            </div>
        </div>
    )
}
