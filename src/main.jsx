
import { createRoot } from 'react-dom/client'

import './index.css'
import Form from './components/Form/Form.jsx'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader/Loader.jsx'

const App = lazy(()=> import("../src/App.jsx"))

createRoot(document.getElementById('root')).render(

  <>
  <Suspense fallback={<Loader/>}>
  <App/>
  </Suspense>
  </>
   
 
   
)
