import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound/NotFound'
import PrivateRoute from './utils/PrivateRoute/PrivateRoute'
import LoadingScreen from './components/UI/LoadingScreen/LoadingScreen'
import Start from './pages/Start/Start'
import MainLayout from './layout/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import { useAppSelector } from './hooks/use-app-selector'
import Groups from './pages/Groups/Groups'
import User from './pages/User/User'
import Group from './pages/Group/Group'
import GroupAuthRoute from './utils/GroupAuthRoute/GroupAuthRoute'
import UserAuthRoute from './utils/UserAuthRoute/UserAuthRoute'
import { UserState } from './store/reducers/user'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const user = useAppSelector<UserState>((state) => state.user)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  const loginHandler = (email: string, password: string) => {
    console.log(`email: ${email}`)
    console.log(`password: ${email}`)
  }

  return (
    <Routes>
      <Route element={isLoading ? <LoadingScreen /> : <MainLayout />}>
        <Route path='/' element={<Start />} />
        <Route path='login' element={<Login onLogin={loginHandler} />} />
        <Route path='register' element={<SignUp />} />
        <Route element={<PrivateRoute userId='user.id' redirectPath='/' />}>
          <Route path='home' element={<Home />} />
          <Route path='groups' element={<Groups />} />
          <Route element={<UserAuthRoute redirectPath='home' />}>
            <Route path='users/:userId' element={<User />} />
          </Route>
          <Route element={<GroupAuthRoute redirectPath='home' />}>
            <Route path='groups/:groupId' element={<Group />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
