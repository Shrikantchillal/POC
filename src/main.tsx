import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

const Main = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
};

export default Main;