/* eslint-disable react/jsx-indent */
import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'
import { UserForm } from './components/UserForm'
import { Redirect, Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  const { isAuth } = useContext(Context.Consumer)
  // Esto esta deprecado pero me da pereza hacerlo como el profesor.
  
  const Favs = React.lazy(() => import('./pages/Favs'))

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow/>}
        {!isAuth && <Redirect from='/users' to='/login' noThrow/>}
        {isAuth !== null && <Redirect from='/login' to='/' noThrow />}
        {console.log(isAuth + "IS AUTH")}
        <Favs path='/favs'/>
        <User path='/users'/>
      </Router>
      <NavBar />
    </Suspense>
  )
}
