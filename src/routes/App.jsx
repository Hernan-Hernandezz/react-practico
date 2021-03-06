import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "@containers/Layout";
import Login from "@components/Login";
import RecoveryPassword from "@components/RecoveryPassword";
import Home from "@pages/Home";
import Products from "@pages/Products";
import NotFound from "@pages/NotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
