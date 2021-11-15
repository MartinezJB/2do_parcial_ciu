import React from 'react';
import CuadroDeBusqueda from './CuadroDeBusqueda';
import ListaDePopulares from './ListaDePopulares';

export default function Body() {
    return (
        <div className="p-2 md:p-4 bg-gray-50 mx-8">
            <CuadroDeBusqueda />
            <ListaDePopulares />
        </div>
    )
}
