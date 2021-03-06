import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { getPhotos } from '../hoc/getPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId: categoryId } })
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error!</h2>
  return (
    <ul className="photo--card">
      {data.photos.map(photo => <PhotoCard liked={photo.liked} key={photo.id} id={photo.id} src={photo.src} likes={photo.likes} />)}
    </ul>
  )
}
