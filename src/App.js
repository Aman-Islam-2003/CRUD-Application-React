import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from './components/Home';
import Navbar from "./components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import AddUser from "./pages/AddUser";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/users/add' element={<AddUser/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
