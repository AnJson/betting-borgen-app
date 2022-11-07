import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound/NotFound'
import PrivateRoute from './utils/PrivateRoute/PrivateRoute'
import LoadingScreen from './components/UI/LoadingScreen/LoadingScreen'
import Start from './pages/Start/Start'
import MainLayout from './layout/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import { useAppSelector } from './hooks/use-app-selector'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const user = useAppSelector((state) => state.user)

  return (
    <Routes>
      <Route element={isLoading ? <LoadingScreen /> : <MainLayout />}>
        <Route path='/' element={<Start />} />
        <Route element={<PrivateRoute userId={user.id} redirectPath='/' />}>
          <Route path='home' element={<Home userId={userId} />} />
          <Route path='groups' element={<Groups />} />
          <Route element={<GroupAuthorizationRoute />}>
            <Route path='groups/:groupId' element={<Group />} />
            <Route path='groups/:groupId/projects' element={<Projects />} />
            <Route element={<ProjectAuthorizationRoute />}>
              <Route path='groups/:groupId/projects/:projectId' element={<Project />} />
              <Route path='groups/:groupId/projects/:projectId/tasks' element={<Tasks />} />
              <Route path='groups/:groupId/projects/:projectId/tasks/:taskId' element={<Task />} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
