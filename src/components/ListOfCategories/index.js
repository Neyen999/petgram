import React from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        // eslint-disable-next-line react/jsx-key
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
