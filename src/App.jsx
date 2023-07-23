import React from 'react'
import Header from "./components/utility/header";
import HomePage from "./pages/home/homePage";
import Footer from "./components/utility/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage} from "./pages/auth/LoginPage";
import {loginRoute} from "./constants/routes";

export default function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={loginRoute} element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}