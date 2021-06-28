import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'


export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder="Email" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <button>Iniciar Sesión</button>
    </form>
  )
}
