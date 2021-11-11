import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const GetFavorites = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })
  return { loading, error, data }
}