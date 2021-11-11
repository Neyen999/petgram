import React from 'react'
import { GetFavorites } from '../container/GetFavorites'
import { ListOfFavs } from '../components/ListOfFavs/index'
import { Layout } from '../components/Layout'

export default () => {

  const { loading, error, data } = GetFavorites();

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error...</h2>

  const { favs } = data

  return (
    <Layout title='Tus Favoritos' subtitle='Puedes encontrar tus animales favoritos'>
      <h2>Favorite Images</h2>
      <ListOfFavs favs={favs}/>
    </Layout>
  )
}