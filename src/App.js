import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home/home";
import Categ from "./pages/home/categ";
import CreateRecipe from "./pages/home/createRecipe";

import Search from "./pages/search";
import Create from "./pages/create";
import Activity from "./pages/activity";
import Profile from "./pages/profile";
import NoMatch from "./pages/404";
import Header from "./pages/header";
import Styles from "./pages/app.module.css";
import Landing from "./pages/landing";
import Footer from "./pages/footer";

function App() {

  // const location = useLocation();
  return (
    <div className={Styles["main-container"]}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
            <Route path="/home/categ" element={<Categ />} />
            <Route path="/home/createRecipe" element={<CreateRecipe />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NoMatch />} />


        </Routes>

        <Footer/>
      </Router>

   

   
    </div>
  );
}

export default App;
