import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'


export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
    <Title>{title}</Title>
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Input disabled={disabled} type="email" placeholder="Email" {...email} />
      <Input disabled={disabled} type="password" placeholder="Password" {...password} />
      <SubmitButton disabled={disabled} >{title}</SubmitButton>
    </Form>
    {error && <Error>{error}</Error>}
      {/* <Login>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></Login> */}
    </>
  )
}
