import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import Products from "./Views/Products";
import Post from "./Views/Post";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <section className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route path="/posts/:id" element={<Post />}></Route>
          </Routes>
        </section>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
