import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ProductsContextProvider } from "./context/ProductsContext.tsx";
import { CategoriesContextProvider } from "./context/CategoriesContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CategoriesContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </CategoriesContextProvider>
  </>
);
