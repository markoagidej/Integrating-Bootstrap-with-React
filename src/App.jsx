import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home2' element={<Home />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
