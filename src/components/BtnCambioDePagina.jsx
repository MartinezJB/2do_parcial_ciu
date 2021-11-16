import React, { Fragment } from 'react';

export default function BtnCambioDePagina({setPaginaActual, actualizarComponente}) {

    /*
        NOTA: Una página es un array de 4 ids de supers que hay en pantalla
            Al cambiar de pagina, estos ids aumentan para mostrar otros ids
    */
    function cambiarPagina() {
        /*
            Este metodo cambia el valor de los ids de los superheroes para simular 
            una paginación dentro de la pagina principal.
        */

        setPaginaActual((e) => {
            return e.map(id => id + e.length)
        })
        actualizarComponente()
        
    }

    return (
        <Fragment>
            <button className="bg-gray-700" onClick={() => cambiarPagina()}>Siguiente página --+</button>
        </Fragment>
    )
}
