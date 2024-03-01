import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";
import { AddProduct } from "./components/Products/AddProduct";
import { UpdateProduct } from "./components/Products/UpdateProduct";
import { ProductDetails } from "./components/Products/ProductDetails";
import { Categories } from "./components/Categories";
import { AddCategory } from "./components/Categories/AddCategory";
import { UpdateCategory } from "./components/Categories/UpdateCategory";
import { CategoryToProduct } from "./components/Relations/CategoryToProduct";
import toast, { Toaster } from "react-hot-toast";

export function App() {
  useEffect(() => {
    toast("Welcome! Touch a product title to manage a product.", {
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
        <Route path="/categories" element={<Categories />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/update-category/:id" element={<UpdateCategory />} />
        <Route
          path="/add-category-for/:productTitle/:productId"
          element={<CategoryToProduct />}
        />
        <Route path="/*" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}
