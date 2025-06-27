import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// components
import MainHeader from "./components/MainHeader/MainHeader";

import Home from "./pages/Home/Home";
import ContactUs from "./pages/contactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Career from "./pages/Career/Career";
import AboutUs from "./pages/AboutUs/AboutUs";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/Products/Products";
import Agro from "./pages/Agro/Agro";
import AgroproductDetails from "./components/AgroproductDetails/AgroproductDetails";
import Terms_Conditions from "./pages/Terms_Conditions/Terms_Conditions";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import Resourcecenter from "./pages/Resourcecenter/Resourcecenter";
import SingleBlogDetails from "./pages/SingleBlogDetails/SingleBlogDetails";
import Ortho from "./pages/Ortho/Ortho";
import TechnicalDataSheet from "./pages/TechnicalDataSheet/TechnicalDataSheet";
import EmulsifiersProduct from "./components/AllSubCategorys/EmulsifiersProduct/EmulsifiersProduct";
import EventGallery from "./pages/EventGallery/EventGallery";
import Fensil360 from "./components/Fensil_360/Fensil_360";
import MultiBalance from "./components/MultiBalance/MultiBalance ";

function App() {
  return (
    <Router>
      <ScrollToTop smooth />

      <MainHeader />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<ContactUs />} />
        <Route
          path="/SingleBlogDetails"
          exact
          element={<SingleBlogDetails />}
        />
        <Route path="/career" exact element={<Career />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/Categories" exact element={<Categories />} />
        <Route path="/terms" element={<Terms_Conditions />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/products/:name/:value" exact element={<Products />} />
        <Route path="/category/:name" exact element={<Agro />} />
        <Route
          path="/product-details/:ProductName/:ProductCode"
          exact
          element={<SingleProduct />}
        />
        <Route
          path="/product-details/:ProductName"
          exact
          element={<SingleProduct />}
        />
        <Route path="/details" element={<AgroproductDetails />} />
        <Route path="/Resourcecenter" element={<Resourcecenter />} />
        <Route path="/Event-Gallery" element={<EventGallery />} />
        <Route path="/Singleblog" element={<SingleBlogDetails />} />

        <Route path="/Orthosilicic_Acid" exact element={<Ortho />} />
        <Route path="/Pheromones" element={<TechnicalDataSheet />} />
        <Route path="/Fensil360" element={<Fensil360 />} />
        <Route path="/MultiBalance4IN1" element={<MultiBalance />} />

        <Route path="/Blog/:title" element={<SingleBlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
