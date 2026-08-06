import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes, useLocation} from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import BottomBanner from "./components/BottomBanner";
import NewLetter from "./components/NewLetter";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const showUserLogin = useAppContext();

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login/> : null}
      <Toaster />
      <div className={`${isSellerPath ? "" : "px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-32"}`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Categories />
                <BestSeller />
                <BottomBanner />
                <NewLetter />
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App; 