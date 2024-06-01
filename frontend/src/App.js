import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { GlobalStyle } from './Pages/Home/Styles';
import { Register } from './Pages/Register/Register';
import { Context } from './Context/Context';
import { Taskview } from './Pages/Taskview/Taskview';

function App() {
  return (
    <>
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
