import React, { Fragment, useState } from 'react'
import PopUp from './PopUp'

export default function Card({ superHeroe }) {

    const [estadoPopUp, setEstadoPopUp] = useState(true) //devuelve true si el popup está abierto. Y false si está cerrado

    return (
        <Fragment>
        <div onClick={() => setEstadoPopUp(e => !e)} className="text-center bg-gray-200 border-2 border-gray-800 rounded-lg p-2 m-2 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img src={superHeroe.image.url} alt={superHeroe.name} className="rounded border-2 border-black" />
            <h3 className="mt-2">{superHeroe.name}</h3>
        </div>

        <PopUp estadoPopUp={estadoPopUp} setPopUp={setEstadoPopUp} personaje={superHeroe} />
        </Fragment>
    )
}
