import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

import "./app.css";
function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <div className="container">
          <SideBar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
