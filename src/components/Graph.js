import React from 'react'

const Graph = () => {
  return (
    <div class='pt-7'>
      <div class='rounded-full w-56 h-56 bg-white flex justify-center items-center text-white text-2xl font-bold'>
        <div class='rounded-full w-52 h-52 bg-cyan-600 flex justify-center items-center text-white text-2xl font-bold'>
          <div class='rounded-full w-44 h-44 bg-white flex justify-center items-center text-cyan-600 text-3xl font-bold'>
            100%
          </div>
        </div>
      </div>
      <div class='pt-4'>
        <h4 class=' text-center text-xs font-bold pt-2'>
          Arrecadação Mínima: R$ 1700,00
        </h4>
        <h4 class=' text-center text-xs font-bold pt-2'>
          Arrecadação máxima: R$ 3750,00
        </h4>
        <h4 class=' text-center text-xs font-bold pt-2'>
          Valor Mínimo de Investimento: R$ 1,00
        </h4>
      </div>
    </div>
  )
}

export default Graph
