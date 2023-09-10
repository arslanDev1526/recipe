import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/homepage/home";
import Categ from "./pages/home/categ/categ";
import CreateRecipe from "./pages/home/createrecipe/createRecipe";
import Search from "./pages/search/search";
import Create from "./pages/create/create";
import Activity from "./pages/activity/activity";
import NoMatch from "./pages/extras/404";
import Header from "./pages/header/header";
import Styles from "./pages/app.module.css";
import Landing from "./pages/extras/landing";
import Footer from "./pages/footer/footer";
import SignUp from "./pages/login/signup";
import SignIn from "./pages/login/signin";
import { Tips, UpdateTip, CreateTip } from "./pages/profile/tabs/tabItems";
import { Profile } from "./pages/profile";

import { TipsProvider } from "./contexts";
import { Tabs } from "./pages/profile/tabs";

const App = () => {

  return (
    <div className={Styles["main-container"]}>
      <Router>
        <TipsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categ" element={<Categ />} />
            <Route path="/createRecipe" element={<CreateRecipe />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<Tabs />} />
              <Route path="tips/create" element={<CreateTip />} />
              <Route path="tips/:id" element={<UpdateTip />} /> 
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>

          <Footer />
        </TipsProvider>
      </Router>
    </div>
  );
};

export default App;
