import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { GlobalStyle } from './Pages/Home/Styles';
import { Register } from './Pages/Register/Register';
import { Context } from './Context/Context';
import { Taskview } from './Pages/Taskview/Taskview';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
    <ToastContainer autoClose={3000}/>
    <GlobalStyle/>
    <Router>
    <Context>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/taskview' element={<Taskview/>}/>
      </Routes>
      </Context>
    </Router>
    </>
  );
}

export default App;
