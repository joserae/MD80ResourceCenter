import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Admin from './pages/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import NormalChecklist from './pages/NormalChecklist';
import Home from './pages/Home/Home';
import AddBeforeStart from './BeforeStart/AddBeforeStartItem';
import EditBeforeStart from './BeforeStart/EditBeforeStartItem';
import Limitations from './pages/Limitations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/normalChecklist" element={<NormalChecklist/>}/>
          <Route exact path="/createUser" element={<AddUser/>}/>
          <Route exact path="/editUser/:id" element={<EditUser/>}/>
          <Route exact path='/viewUser/:id' element={<ViewUser/>}/>
          <Route exact path='/addItem' element={<AddBeforeStart/>}/>
          <Route exact path='/editItem/:id' element={<EditBeforeStart/>}/>
          <Route exact path="/limitations" element={<Limitations/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
