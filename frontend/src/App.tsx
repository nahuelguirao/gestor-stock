import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";
import { AddProduct } from "./components/AddProduct";
import { UpdateProduct } from "./components/UpdateProduct";
import { ProductDetails } from "./components/ProductDetails";
import { Categories } from "./components/Categories";

export function App() {
  useEffect(() => {
    toast("Welcome! Touch a product title to see product details.", {
      icon: "👋",
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "rgb(59, 59, 59)",
            color: "#EEE",
            textAlign: "center",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path={"/categories"} element={<Categories />} />
        {/* Route add category */}
        {/* Route update category */}
        <Route path="/*" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}
