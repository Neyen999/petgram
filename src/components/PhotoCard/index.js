import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

// const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, ref] = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const { mutation, mutationLoading, mutationError } = ToggleLikeMutation()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }
  console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })
  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img loading='lazy' src={src} />
              </ImgWrapper>
            </a>

            <FavButton liked={liked} likes={likes} onClick={handleFavClick}/> 
          </>
      }
    </Article>
  )
}
