import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import "./app.css";
function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
