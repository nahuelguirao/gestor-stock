import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";
import { AddProduct } from "./components/AddProduct";
import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add-product" element={<AddProduct />} />
        {/* Route update product */}
        {/* Route Categories */}
        {/* Route add category */}
        {/* Route update category */}
        <Route path="/*" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}
