import React from 'react'

const Item = () => {
  return (
    <a href="/" className='flex flex-col gap-2'>
      <img
        src="https://static.vecteezy.com/ti/vetor-gratis/p1/29781303-logotipo-do-casa-icone-casa-silhueta-isolado-projeto-vetor.jpg"
        alt="Imagem do local"
        className='aspect-square object-cover rounded-2xl'
      />
      <div>
        <h3 className='text-xl font-semibold'>Cabo frio, Rio de Janeiro</h3>
        <p className='truncate text-gray-600'>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <p>
        <span className="font-semibold"> R$ 550</span> por noite
      </p>

    </a>
  )
}

export default Item;