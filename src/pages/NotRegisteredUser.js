import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
            <UserForm title="Registrarse" onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
