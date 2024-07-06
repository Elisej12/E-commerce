import React from "react";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "@components/login/LoginContainer";
import Footer from "@components/footer/Footer";
import HeaderContainer from "@components/header/HeaderContainer";
import ProfilePageRouting from "@components/profile/ProfilePageRouting";
import ProductContainer from "@components/productPage/ProductContainer";
import MainPage from "@components/mainPage/MainPage";
import "./app.module.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="profile/:tab"
            element={ 
              <>
                <HeaderContainer />
                <ProfilePageRouting />
                <Footer />
              </>
            }
          />
          <Route
            path="mainPage"
            element={
              <>
                <HeaderContainer />
                <MainPage />
                <Footer />
              </>
            }
          />

          <Route
            path="product/:id"
            element={
              <>
                <HeaderContainer />
                <ProductContainer />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<LoginContainer />} />

          {/* <Route path="*" element={<Navigate to={"/mainPage"} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
