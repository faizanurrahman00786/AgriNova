import Navbar from "../src/component/Navbar";
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import MSP from "./page/MSP";
import OrderHistory from "./component/Dashboard/OrderHistory";
import ProductList from "./component/Homepage/ProductList";
import ProductDetails from "./page/ProductDetails";
import CropDis from "./page/CropDis";
import ModalPage from "./page/ModalPage";
import Error from "./page/Error";
import Dashboard from "./page/Dashboard";
import MyProfile from "./component/Dashboard/MyProfile";
import Settings from "./component/Dashboard/Setting";
import AddProduct from "./component/Dashboard/AddProduct";
import ProductForm from "./component/Dashboard/ProductForm";
import MyProduct from "./component/Dashboard/MyProduct";
import UpdateForm from "./component/Dashboard/UpdateForm";
import MyDashboard from "./component/Dashboard/MyDashboard";
import AddMSP from "./component/Dashboard/AddMSP";
import UpdateMSP from "./component/Dashboard/UpdateMSP";
import AreaForm from "./component/Modal/AreaForm";
import { toast } from "sonner";



function App() {

  const [login, setisLogin] = useState(false);
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);
  const [cityModal, setcityModal] = useState(false);
  const [cityName, setcityName] = useState("");


  async function checkLogin() {

    try {

      const Response = await fetch(

        `${process.env.REACT_APP_BASE_URL}/auth/loginCheck`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include"
        }
      );

      if (Response.ok) {
        const data = await Response.json();
        setisLogin(true);
        setUser(data.user);
      }
    }

    catch (error) {
      toast.error("Failed to Logged In.");
      console.error("Failed to Logged In", error);
    }

    const city = sessionStorage.getItem("city");

    if (!city) {
      setcityModal(true);
    }
    else {
      setcityName(city);
    }
  }


  useEffect(function () {

    checkLogin();

  }, []);


  return (

    <div className='w-screen min-h-screen bg-darkcream'>

      <Navbar login={login} setUser={setUser} setisLogin={setisLogin} setModal={setModal} cityName={cityName} setcityName={setcityName} setcityModal={setcityModal}></Navbar>
      {modal && <ModalPage setModal={setModal} setUser={setUser} setisLogin={setisLogin}></ModalPage>}
      {cityModal && <AreaForm setcityModal={setcityModal} setcityName={setcityName} cityName={cityName}></AreaForm>}

      <Routes>

        <Route path="/" element={<Home login={login} user={user} cityName={cityName} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/category/MSP List" element={<MSP />}></Route>

        <Route path="category/Product List" element={<ProductList user={user} login={login} setModal={setModal} cityName={cityName}></ProductList>}></Route>
        <Route path="/product-details/:productName/:productID" element={<ProductDetails user={user} login={login} setModal={setModal} />}></Route>
        <Route path="/category/Crop Disease Detection" element={<CropDis login={login} setModal={setModal} />}></Route>


        <Route element={login ? <Dashboard user={user} setisLogin={setisLogin} setcityName={setcityName} /> : <Home />}>
          <Route path="user/dashboard/My-profile" element={<MyProfile user={user} />}></Route>
          <Route path="user/dashboard/setting" element={<Settings user={user} setUser={setUser} setisLogin={setisLogin} />}></Route>
          <Route path="user/dashboard/purchase-history" element={<OrderHistory user={user}></OrderHistory>}></Route>
          <Route path="user/dashboard/sell-history" element={<OrderHistory user={user}></OrderHistory>}></Route>
          <Route path="user/dashboard/payment-history" element={<OrderHistory user={user}></OrderHistory>}></Route>
          <Route path="user/dashboard/my-products" element={<MyProduct />}></Route>
          <Route path="user/dashboard/price-update" element={<MyProduct />}></Route>
          <Route path="user/dashboard/my-dashboard" element={<MyDashboard />}></Route>

          <Route element={<AddProduct user={user} />}>
            <Route path="user/dashboard/add-products" element={<ProductForm user={user} />} />
            <Route path="user/dashboard/add-msp" element={<AddMSP />} />
            <Route path="user/dashboard/msp-update" element={<UpdateMSP />} />
            <Route path="/update/:productId/:productName" element={<UpdateForm />} />
          </Route>

        </Route>

        <Route path="*" element={<Error />}></Route>

      </Routes>

    </div>
  );
}

export default App;
