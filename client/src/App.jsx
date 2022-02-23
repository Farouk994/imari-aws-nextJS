import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Home from "./pages/Home";

const App = () => {
   return (
      <div>
         <Announcement />
         <Navbar />
         <Slider/>
      </div>
   );
};

export default App;

// Installing new caniuse-lite version
// $ npm install caniuse-lite
// Cleaning package.json dependencies from caniuse-lite
// $ npm uninstall caniuse-lite
// caniuse-lite has been successfully updated
