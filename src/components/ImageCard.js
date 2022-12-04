import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/card-image.jpg';

const ImageCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:opacity-80 duration-300">
    <Link to="/cardDetail">
      <img src={image} alt="" className="w-full"/>
      <div className="px-6 py-2">
        <div className="text-left font-bold text-cyan-700 text-xl mb-2">
          Empresa Ficticia
        </div>
        <ul class='text-left'>
          <li class='py-1'>
            Tipo de Ativo:  
            <strong>dolorem ipsum</strong>
          </li>
          <li class='py-1'>
            Valuation: 
            <strong>dolorem ipsum</strong>
          </li>
          <li class='py-1'>
            Rentabilidade Alvo:
            <strong>dolorem ipsum</strong>
          </li>
          <li class='py-1'>
            Investidor lider:
            <strong>dolorem ipsum</strong>
          </li>
        </ul>
      </div>
      <div className="px-2 py-3">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Startup
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Tecnologia
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          On Demand
        </span>
      </div>
      </Link>
    </div>
  )
}

export default ImageCard
