import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes, useLocation} from 'react-router-dom'

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      <div className={`${isSellerPath ? "" : "px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-32"}`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Categories />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App; 