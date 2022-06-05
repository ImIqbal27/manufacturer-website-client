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
import Footer from './Pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import NotFoundPage from './Pages/Home/NotFoundPage';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Blogs from './Pages/Home/Blogs';
import AddProduct from './Pages/Dashboard/AdminPanel/AddProduct';
import ManageProducts from './Pages/Dashboard/AdminPanel/ManageProducts';
import ManageAllOrder from './Pages/Dashboard/AdminPanel/ManageAllOrder';
import MyPortfolio from './Pages/Home/MyPortfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='purchase/:productId' element={
          <RequireAuth>
            <PurchaseProductPage></PurchaseProductPage>
          </RequireAuth>}>
        </Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          {/* <Route index element={<MyOrders></MyOrders>}></Route> */}
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='add-review' element={<AddReview></AddReview>}></Route>
          <Route path='my-order' element={<MyOrders></MyOrders>}></Route>
          {/* <Route path='myprofile' element={<MyProfile></MyProfile>}></Route> */}
          <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
          <Route path='manage-products' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='manage-all-order' element={<ManageAllOrder></ManageAllOrder>}></Route>
          <Route path='users' element={<RequireAdmin> <Users></Users></RequireAdmin>}></Route>
        </Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>


    </div>
  );
}

export default App;
