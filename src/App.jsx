
import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


const HomeWrapper  = lazy(() => import('./screens/Home.jsx'))
const AuthWrapper = lazy(()=> import('./screens/Auth.jsx'))
const AdminWrapper = lazy(()=> import('./screens/AdminDashboard.jsx'))
const UserWrapper = lazy(()=> import('./screens/UsersDashboard.jsx'))

function App() {
  return (
<>
<Routes>

  <Route  index element={
    <Suspense  fallback={<></>}>
   <HomeWrapper
     />
    </Suspense>
  } />

<Route  path='/auth' element={
    <Suspense  fallback={<></>}>
   <AuthWrapper
     />
    </Suspense>
  } />


<Route  path='/dashboard/user' element={
    <Suspense  fallback={<></>}>
   <UserWrapper
     />
    </Suspense>
  } />

<Route  path='/dashboard/admin' element={
    <Suspense  fallback={<></>}>
   <AdminWrapper
     />
    </Suspense>
  } />





</Routes>
</>
  )
}

export default App
