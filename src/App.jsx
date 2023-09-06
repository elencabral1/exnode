import './App.css'
import Menu from './components/menu'
import Rodape from './components/rodape'
import {Outlet} from 'react-router-dom'

function App(){

  return(
    <>
    <Menu/>
    <Outlet/>
    <Rodape/>
    </>
  )
}
export default App
