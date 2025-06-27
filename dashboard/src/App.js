import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
// import Product from "./Component/Product/Product";
import Career from "./Page/Career/Career";
import Candidate from "./Page/Candidate/Candidate";
import Contact from "./Page/Contact/Contact";
import Header from "./Component/Header/Header";
import CreateJob from "./Page/CreateJob/CreateJob";
import EditJobPost from "./Page/EditJobPost/EditJobPost";
import CreateBanner from "./Page/Banner/CreateBanner/CreateBanner";
import ShowBanner from "./Page/Banner/ShowBanner/ShowBanner";
import EditBanner from "./Page/Banner/EditBanner/EditBanner";
import CreateHomeBanner from "./Page/HomePageBanner/CreateHomeBanner/CreateHomeBanner";
import ShoeHomeBanner from "./Page/HomePageBanner/ShoeHomeBanner/ShoeHomeBanner";
import EditHomeBanner from "./Page/HomePageBanner/EditHomeBanner/EditHomeBanner";
import CreateProduct from "./Page/ProductPage/CreateProduct";
import BlogPage from "./Page/blogPage/BlogPage";
import CreateBlogPage from "./Page/blogPage/CreateBlogPage";
import EditBlog from "./Page/blogPage/EditeBlog";
import ProductList from "./Page/ProductPage/ProductList";
import EditProduct from "./Page/ProductPage/EditeProduct";

function App() {
  return (
    <div className="all-div-container">
  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Product" element={<Product />} /> */}
        <Route path="/Career" element={<Career />} />
        <Route path="/Candidate" element={<Candidate />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CreateJob" element={<CreateJob />} />
        <Route path="/editJobPost/:id" element={<EditJobPost />} />
        <Route path="/CreateBanner/" element={<CreateBanner />} />
        <Route path="/ShowBanner" element={<ShowBanner />} />
        <Route path="/EditBanner/:id" element={<EditBanner />} />
        <Route path="/CreateHomeBanner/" element={<CreateHomeBanner />} />
        <Route path="/ShowHomeBanner" element={<ShoeHomeBanner />} />
        <Route path="/EditHomeBanner/:id" element={<EditHomeBanner />} />

        <Route path="/CreateProduct" element={<CreateProduct />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
        <Route path="/Product" element={<ProductList />} />

        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/CreateBlogPage" element={<CreateBlogPage />} />
        <Route path="/EditBlogPage/:id" element={<EditBlog />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
