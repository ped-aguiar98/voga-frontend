import React from 'react'
import image from '../images/card-image.jpg';
import CardBottom from './CardBottom';
import CardItems from './CardItems';
import Graph from './Graph';
import Modal from './Modal';
import { useState } from "react";

const ImageCardDetail = () => {

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div class='relative w-full h-auto  px-7'>
      {choice &&
      <div className="flex justify-end">
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"  role="alert">
          <strong class="font-bold pr-4">Investimento confirmado</strong>
          <span class="block sm:inline"></span>
          <span class="absolute top-0 bottom-0 right-0 pl-40 py-3">
            <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      </div>
      }
      {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}
      <div class='relative h-full min-h-fit grid grid-cols-2 gap-9 p-4 max-w-7x1 m-auto z-10 rounded-t-xl bg-zinc-300 bg-opacity-50'>
        <div class='relative h-128'>
          <img src={image} alt="" className=" object-fill rounded-2xl px-1"/>
        </div>
        <div>
          <div class='grid grid-cols-2 py-1'>
            <div>
              <h1 class=' text-start text-2xl font-bold '>Empresa Ficticia</h1>
            </div>
            <div class='justify-self-end px-9'>
              <button class="mx-2 my-1 md:my-0 px-20 py-2 font-semibold text-xl rounded text-white bg-amber-500 hover:bg-amber-600 duration-500 inline-block" onClick={clicked}>
                Investir
              </button>
            </div>
          </div>
          <div class='grid grid-cols-2 py-8'>
            <div class='justify-self-start'>
              <CardItems/>
            </div>
            <div class='justify-self-end px-12 pb-3'>
              <Graph/>
            </div>
          </div>
        </div>
      </div>
      <div class='relative h-full min-h-fit gap-4 max-w-7x1 p-4 m-auto z-10 rounded-b-xl text-white bg-cyan-600 bg-opacity-90'>
        <CardBottom/>
      </div>

      {/* {choice &&
      <div className="flex justify-center">
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Investimento confirmado</strong>
          <span class="block sm:inline"></span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      </div>
      }
      {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />} */}
    </div>
  )
}

export default ImageCardDetail
