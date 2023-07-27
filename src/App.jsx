import React from 'react'
import Header from "./components/utility/header";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/utility/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import {
    loginRoute,
    signupRoute,
    categoriesRoute,
    brandsRoute,
    productsRoute,
    productDetailsRoute,
    cartRoute,
    adminProductsRoute,
    adminOrdersRoute,
    adminOrderDetailsRoute,
    adminAddBrandRoute,
    adminAddCategoryRoute, adminAddSubcategoryRoute, adminAddProductRoute, userOrdersRoute
} from "./constants/routes";
import SignupPage from "./pages/Auth/SignupPage";
import CategoriesPage from "./pages/Category/CategoriesPage";
import BrandsPage from "./pages/Brand/BrandsPage";
import ProductBrowser from "./pages/Product/ProductBrowser"
import ProductDetailsPage from "./pages/Product/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import {AdminProductsManagementPage} from "./pages/Admin/AdminProductsManagementPage";
import AdminOrdersManagementPage from "./pages/Admin/AdminOrdersManagementPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubcategoryPage from "./pages/Admin/AdminAddSubcategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import {UserOrdersManagementPage} from "./pages/User/UserOrdersManagementPage";

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
                    <Route path={cartRoute} element={<CartPage />} />
                    <Route path={adminProductsRoute} element={<AdminProductsManagementPage />} />
                    <Route path={adminOrdersRoute} element={<AdminOrdersManagementPage />} />
                    <Route path={adminOrderDetailsRoute} element={<AdminOrderDetailsPage />} />
                    <Route path={adminAddBrandRoute} element={<AdminAddBrandPage />} />
                    <Route path={adminAddCategoryRoute} element={<AdminAddCategoryPage />} />
                    <Route path={adminAddSubcategoryRoute} element={<AdminAddSubcategoryPage />} />
                    <Route path={adminAddProductRoute} element={<AdminAddProductPage />} />
                    <Route path={userOrdersRoute} element={<UserOrdersManagementPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}