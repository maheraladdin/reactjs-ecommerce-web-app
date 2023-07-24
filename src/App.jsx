import React from 'react'
import Header from "./components/utility/header";
import HomePage from "./pages/home/homePage";
import Footer from "./components/utility/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import {loginRoute, signupRoute, categoriesRoute, brandsRoute} from "./constants/routes";
import SignupPage from "./pages/auth/SignupPage";
import CategoriesPage from "./pages/category/CategoriesPage";
import BrandsPage from "./pages/brand/BrandsPage";

export default function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={loginRoute} element={<LoginPage />} />
                    <Route path={signupRoute} element={<SignupPage />} />
                    <Route path={categoriesRoute} element={<CategoriesPage />} />
                    <Route path={brandsRoute} element={<BrandsPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}