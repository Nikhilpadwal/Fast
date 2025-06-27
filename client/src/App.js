import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";

// Components
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import ContactUs from "./pages/contactUs/ContactUs";
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
      {/* Default Helmet for site-wide fallback */}
      <Helmet>
        <title>Fenton Chemical - Advanced Silicone-Based Solutions</title>
        <meta
          name="description"
          content="Fenton Chemical is a leading manufacturer of silicone-based chemicals, agro emulsifiers, and agricultural formulations."
        />
        <meta
          name="keywords"
          content="Fenton Chemical, agro emulsifiers, silicone chemicals, surfactants, orthosilicic acid, crop solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fentonchemical.com/" />
        <meta
          property="og:title"
          content="Fenton Chemical - Advanced Silicone-Based Solutions"
        />
        <meta
          property="og:description"
          content="Explore premium silicone chemicals, agro emulsifiers, and agricultural formulations by Fenton Chemical."
        />
        <meta
          property="og:image"
          content="https://www.fentonchemical.com/assets/featured-image.jpg"
        />
      </Helmet>

      <ScrollToTop smooth />
      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/SingleBlogDetails" element={<SingleBlogDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/terms" element={<Terms_Conditions />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/products/:name/:value" element={<Products />} />
        <Route path="/category/:name" element={<Agro />} />
        <Route path="/product-details/:ProductName/:ProductCode" element={<SingleProduct />} />
        <Route path="/product-details/:ProductName" element={<SingleProduct />} />
        <Route path="/details" element={<AgroproductDetails />} />
        <Route path="/Resourcecenter" element={<Resourcecenter />} />
        <Route path="/Event-Gallery" element={<EventGallery />} />
        <Route path="/Singleblog" element={<SingleBlogDetails />} />
        <Route path="/Orthosilicic_Acid" element={<Ortho />} />
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
