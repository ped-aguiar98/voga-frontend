import React from 'react'
import ImageCard from './ImageCard'

const Investment = () => {
  return (
    <div>
      <h2 class=' text-left text-xl font-bold py-9 px-7'>Investment Opportunities</h2>
      <div class="container mx-auto">
        <div class='grid grid-cols-4 gap-4 px-7 mb-4'>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
        </div>
      </div>
    </div>
  )
}

export default Investment
