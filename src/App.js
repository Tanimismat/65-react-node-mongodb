import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';
import Home from './Components/Home';
import UpdateUser from './Components/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
