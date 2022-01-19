import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.scss'
// import Home from '@/pages/Home'
// import Login from '@/pages/Login'

const Login = React.lazy(() => import('@/pages/Login'))
// import Login from '@/pages/Login'
const Home = React.lazy(() => import('@/pages/Layout'))
const ProfileEdit = React.lazy(() => import('@/pages/Profile/Edit'))
// import Layout from '@/pages/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>loading.....</div>}>
        <Routes>
          {/* <Redirect exact from="/" to="/home"></Redirect> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="/profile/edit" element={<ProfileEdit />}></Route>
        </Routes>
      </React.Suspense>

      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </BrowserRouter>
  )
}
