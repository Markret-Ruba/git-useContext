import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar"
import Products from "./Pages/Products"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cart from "./Pages/Cart"

function App() {
  

  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Products/>}> </Route>
      <Route path='/cart' element={<Cart/>}> </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
