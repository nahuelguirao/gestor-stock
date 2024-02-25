import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsList } from "./components/ProductsList";

export function App() {
  return (
    <BrowserRouter>
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
