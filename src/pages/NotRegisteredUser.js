import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, loading, error, data } = RegisterMutation()
  const { loginMutation, loadingLogin, errorLogin, dataLogin } = LoginMutation()
  
  return (
      <Context.Consumer>
          {     
              ({activateAuth}) => {
                  const onSubmit = ({email, password}) => {
                      console.log(email, password)
                      const input = { email, password }
                      const variables = { input }
                      registerMutation({ variables })
                      .then(({data}) => {
                          const { signup } = data
                          activateAuth(signup)
                      })
                  }
                
                  const onSubmitLogin = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      loginMutation({ variables })
                      .then(({data}) => {
                          const { login } = data
                          activateAuth(login)
                      })
                  }
                  const errorMsg = error && "El usuario ya existe o hubo un error"
                  const errorLogin = error && "El usuario o la contraseña son incorrectos"

                  return <>
                      <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse'/>
                      <UserForm disabled={loadingLogin} error={errorLogin} onSubmit={onSubmitLogin} title='Iniciar Sesion'/>
                  </>
              }
          }
      </Context.Consumer>
  )
}
