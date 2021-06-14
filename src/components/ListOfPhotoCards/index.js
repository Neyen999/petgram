import React from 'react'
import { PhotoCard } from '../PhotoCard'
// import { photos } from '../../../api/db.json'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(getPhotos)
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error!</h2>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} id={photo.id} src={photo.src} />)}
    </ul>
  )
}
