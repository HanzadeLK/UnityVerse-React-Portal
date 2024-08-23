import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import React, { useState } from "react";
import "./App.css";
import Anasayfa from "./pages/Anasayfa";
import IlanDetaySayfasi from "./pages/IlanDetaySayfasi";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Anasayfa />} />
      <Route path="/ilan/:id" element={<IlanDetaySayfasi />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
