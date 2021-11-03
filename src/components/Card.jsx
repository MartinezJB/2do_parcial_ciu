import React from 'react'

export default function Card({ nombre, urlImagen }) {
    return (
        <div>
            <h3>{nombre}</h3>
            <img src={urlImagen} alt={nombre} />
        </div>
    )
}
