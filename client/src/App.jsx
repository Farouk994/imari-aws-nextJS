import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

const App = () => {
   return (
      <div>
         <Navbar />
         {/* <Home /> */}
         {/* <ProductList /> */}
         <Product />
         {/* <Footer/> */}
      </div>
   );
};

export default App;

// Installing new caniuse-lite version
// $ npm install caniuse-lite
// Cleaning package.json dependencies from caniuse-lite
// $ npm uninstall caniuse-lite
// caniuse-lite has been successfully updated
