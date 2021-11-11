import React from 'react'
import { ImgWrapper, Img, Article, UserInfo, UserName } from './styles' 
import { Button } from '../FavButton/styles'
import { BsThreeDots } from "react-icons/bs" 
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const [show, ref] = useNearScreen()


  const { mutation, mutationLoading, mutationError } = ToggleLikeMutation()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }


  return (
    <Article ref={ref}>
      <UserInfo>
        <UserName>userName</UserName>
        <Button>
          <BsThreeDots />
        </Button>
      </UserInfo>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img loading='lazy' src={src} />
              </ImgWrapper>
            </Link>

            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}
