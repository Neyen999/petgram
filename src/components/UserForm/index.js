import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Login, Link } from './styles'


export const UserForm = ({ onSubmit, title}) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
    <Title>{title}</Title>
    <Form onSubmit={onSubmit}>
      <Input type="email" placeholder="Email" {...email} />
      <Input type="password" placeholder="Password" {...password} />
      <Button>{title}</Button>
    </Form>
    {
      title !== "Iniciar Sesión" &&
      <>
      <Login>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></Login>
      </>
    }
    </>
  )
}
