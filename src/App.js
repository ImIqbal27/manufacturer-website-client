import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Reviews from './Pages/Home/Reviews';
import ContactUs from './Pages/Home/ContactUs';
import PurchaseProductPage from './Pages/Home/PurchaseProductPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='reviews' element={
          <RequireAuth>
            <Reviews></Reviews>
          </RequireAuth>}>
        </Route>
        <Route path='purchase/:productId' element={
          <RequireAuth>
            <PurchaseProductPage></PurchaseProductPage>
          </RequireAuth>
        }></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
