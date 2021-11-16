import React from 'react';
import CuadroDeBusqueda from './CuadroDeBusqueda';
import ListadoDeSupers from './ListadoDeSupers';

export default function Body() {
    return (
        <div className="p-2 md:p-4 bg-gray-50 mx-8">
            <CuadroDeBusqueda />
            <ListadoDeSupers />
        </div>
    )
}
