import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

export const Home = ({ id }) => {
  console.log(id)
  return (
    <> 
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'/>
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
