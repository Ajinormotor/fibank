
import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


const HomeWrapper  = lazy(() => import('./screens/Home.jsx'))

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
</Routes>
</>
  )
}

export default App
