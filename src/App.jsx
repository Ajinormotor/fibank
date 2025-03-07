
import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


const HomeWrapper  = lazy(() => import('./screens/Home.jsx'))
const AuthWrapper = lazy(()=> import('./screens/Auth.jsx'))

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



</Routes>
</>
  )
}

export default App
