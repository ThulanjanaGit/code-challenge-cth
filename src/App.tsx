import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import ProductDetails from "./pages/product-details/ProductDetails";
import ProductListing from "./pages/product-listing/ProductListing";
import Footer from "./shared/components/footer/Footer";
import Header from "./shared/components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 p-4">
        <div className="container mx-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<ProductListing />} />
                <Route
                  path="/details/:product_id"
                  element={<ProductDetails />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
