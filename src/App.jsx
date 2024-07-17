
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Coponent/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ManageEmployees from './Coponent/Hotel-list/Hotel-list';
import Add from './Coponent/Add/Add';
import NewEmployee from './Coponent/Form/Form';

function App() {


  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path="/viewData" element={<ManageEmployees />} />
                <Route path="/addData" element={<Add/>} />
                <Route path="/editData" element={<NewEmployee />} />
            </Routes>
        </Router>

    </>
  )
}

export default App
