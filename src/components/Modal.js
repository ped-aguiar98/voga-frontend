import React from 'react'

const Modal = ( {setModalOn, setChoice} ) => {

  const handleOKClick = () => {
    setChoice(true)
    setModalOn(false)
}
const handleCancelClick = () => {
    setChoice(false)
    setModalOn(false)
}

  return (
    <div className="   bg-zinc-200 fixed inset-0 z-50   ">
  
              <div className="flex h-screen justify-center items-center opacity 100">
  
                  <div className="flex-col justify-center  bg-white py-12 px-24 border-4 rounded-xl opacity-100">

                      <div className="flex  text-lg font-bold text-zinc-600   mb-10" >Confirmação de Investimento</div>
                      <div>
                        <div class=''>
                        
                        </div>
                        <div class='grid grid-cols-2 gap-2'>
                          <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-cyan-500 ">Confirmar</button>
                          <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-black ">Cancelar</button>
                        </div>
                      </div>

                  </div>
              </div>
          </div>
  )
}

export default Modal
