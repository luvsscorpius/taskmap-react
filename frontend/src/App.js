import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { Register } from './Pages/Register/Register';
import { Context } from './Context/Context';
import { Taskview } from './Pages/Taskview/Taskview';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { ButtonTheme } from './Components/ToggleThemeButton/Button';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';

function App() {

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Router>
        <Context>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/taskview' element={<Taskview />} />
            <Route path='/privateRoute' element={<PrivateRoute />} />
          </Routes>
          <ButtonTheme />
        </Context>
      </Router>
    </>
  );
}

export default App;
