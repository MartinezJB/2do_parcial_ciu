import React from 'react'

export default function Header() {
    return (
      <header>
        <nav className="bg-gradient-to-b from-green-500 to-green-200 p-2">
          <h2 className="font-semibold text-xl text-white text-center">Superhero's inc.</h2>
        </nav>
        <div className="flex p-2 md:p-6 bg-gray-50 mx-8">
          <div className="flex flex-col justify-end">
            <h1 className="text-center sm:text-left text-5xl mb-4 font-bold text-gray-600">SuperHeroes Incorporation Fundation Tropic</h1>
            <p className="text-center sm:text-left text-xl font-semibold text-yellow-600 mb-4">Fundación de superheroes</p>
            <p className="text-center sm:text-left mb-4">Bienvenidos a SHIFT: Una fundación sin fines de lucro que presenta un amplio catálogo de superheroes y villanos de comics más emblemáticos. Podrás cheacar sus estadísticas y poder elegir al personaje que más te convenga llevar a tu misión</p>
          </div>
          <img src="./superheroe_con_capa.png" className="hidden lg:block" alt="" />
        </div>
      </header>
    )
}
