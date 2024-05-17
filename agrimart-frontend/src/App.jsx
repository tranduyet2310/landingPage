import './App.css'
import PublicPage from './components/PublicPage'
import ListEmployeeComponent from './components/admin/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<PublicPage/>}/>
        <Route path='/admin' element = {<ListEmployeeComponent/>}/>
        <Route path='/login' element = {<ListEmployeeComponent/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
