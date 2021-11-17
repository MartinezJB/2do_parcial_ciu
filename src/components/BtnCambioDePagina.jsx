import React, { Fragment } from 'react';

export default function BtnCambioDePagina({setPaginaActual, actualizarComponente, esPaginaSiguiente, nroPagina, setNroPagina}) {

    /*
        NOTA: Una página es un array de 4 ids de supers que hay en pantalla
            Al cambiar de pagina, estos ids aumentan para mostrar otros ids
    */
    var nroPaginaAActualizar = nroPagina;
    var paginaAActualizar;
    var aQuePaginaApunta = "";
    var urlImagenFlecha = "./flecha.png";
    var imgClass = "h-8 mx-auto"

    if(esPaginaSiguiente) {
        nroPaginaAActualizar += 1;
        paginaAActualizar = (e) => e.map(id => id + e.length);
        aQuePaginaApunta = "Página siguiente"
    }
    else{
        nroPagina <= 1 ? nroPaginaAActualizar = nroPagina : nroPaginaAActualizar -= 1;
        paginaAActualizar = (e) => e[0] <= 1 ? e : e.map(id => id - e.length);
        aQuePaginaApunta = "Página anterior";
        imgClass += " transform rotate-180"
    }

    function cambiarPagina() {
    /*
        Este metodo cambia el valor de los ids de los superheroes para simular 
        una paginación dentro de la pagina principal.
    */

        setNroPagina( nroPaginaAActualizar )
        
        setPaginaActual(paginaAActualizar)

        actualizarComponente()
        
    }

    return (
        <Fragment>
            <button className="bg-yellow-400 hover:bg-yellow-500 rounded py-1 px-2" onClick={() => cambiarPagina()}>
                {aQuePaginaApunta}
                <img src={urlImagenFlecha} className={imgClass} alt="" />
            </button>
        </Fragment>
    )
}
