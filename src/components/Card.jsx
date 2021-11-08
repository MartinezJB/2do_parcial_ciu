import React from 'react'

export default function Card({ nombre, urlImagen }) {
    return (
        <div className="text-center bg-gray-200 border-2 border-gray-800 rounded-lg p-2 m-2 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img src={urlImagen} alt={nombre} className="rounded border-2 border-black" />
            <h3 className="mt-2">{nombre}</h3>
        </div>
    )
}
