import React, { Fragment } from 'react'

export default function Progress({ titulo, valor }) {
    return (
        <Fragment>
            <p>{titulo}:</p>
            <progress id="progres" className="h-2 border-2 border-gray-900 rounded" min="0" max="100" value={valor} />
            <label className="ml-2" htmlFor="progres">{valor}</label>
        </Fragment>
    )
}
