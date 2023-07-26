import React from 'react'
import Header from "./components/utility/header";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/utility/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import {
    loginRoute,
    signupRoute,
    categoriesRoute,
    brandsRoute,
    productsRoute,
    productDetailsRoute
} from "./constants/routes";
import SignupPage from "./pages/auth/SignupPage";
import CategoriesPage from "./pages/category/CategoriesPage";
import BrandsPage from "./pages/brand/BrandsPage";
import ProductBrowser from "./pages/product/ProductBrowser"
import ProductDetailsPage from "./pages/product/ProductDetailsPage";

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
                    <Route path={productsRoute} element={<ProductBrowser />} />
                    <Route path={productDetailsRoute} element={<ProductDetailsPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}