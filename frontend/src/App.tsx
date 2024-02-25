import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        {/* Route add product */}
        {/* Route update product */}
        {/* Route Categories */}
        {/* Route add category */}
        {/* Route update category */}
        <Route path="/*" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}
