import React from 'react'
import ImageCard from './ImageCard'

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
        <div className="flex-col justify-center bg-white py-12 px-24 border-4 rounded-xl opacity-100 pl-40">
         <div className="flex text-3xl tex font-bold text-cyan-700  mb-4" >
          <h1 class>Confirmação de Investimento</h1>
          </div>
           <div>
             <div>
              <form class="bg-white rounded px-0 pt-6 pb-8 mb-4 grid grid-cols-2 gap-7">
                <div class="mb-4">
                  <h1 class="text-gray-700 text-lg text-left font-bold mb-2 flex flex-auto" for="username">
                    <p class='text-cyan-500'>[User]</p>, pronto para fazer parte dessa jornada com a <p class='text-cyan-500'> [Empresa]</p>?
                  </h1>
                  <p class='text-left pt-16 pb-6'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="R$"></input>
                  <div className="form-control">
                  <div class='pt-7'>
                    <label className="label cursor-pointer">
                      <div class='text-left'>
                      <span className="label-text text- pr-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                      <div class='pt-2'>
                        <span class='font-bold pr-2'>Concordo com os termos</span>
                        <input type="checkbox" checked className="checkbox checkbox-primary" />
                      </div>
                      </span> 
                      
                      
                      </div>
                    </label>
                    </div>
                  </div>
                </div>
                <div class='w-fit'>
                  <ImageCard/>
                </div>
                <div class="flex items-center justify-between">
                </div>
              </form>
          </div>
          <div class='grid grid-cols-12 gap-2'>
            <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-cyan-500 col-start-1 col-end-6 ">Confirmar</button>
            <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4  text-white bg-black col-start-6 col-end-11">Cancelar</button>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Modal
