import React from 'react'

export default function Footer() {
    return (
        <div className="flex flex-col bg-gray-600 p-16 align-center text-center">
            <h3 className="mb-4">Contactos</h3>
            <div className="flex justify-evenly">
                <div className="text-center">
                    <p>Telefono: 4343-3424</p>
                    <p>Email: contacto@shift.com</p>
                    <p>Sede: Hell's kitchen 720</p>
                </div>
                <div className="text-center">
                    <p>Celular: 11 3434-4424</p>
                    <p>Consultas: consultas@shift.com</p>
                    <p>Sede 2: Gotham 893</p>
                </div>
            </div>
        </div>
    )
}
