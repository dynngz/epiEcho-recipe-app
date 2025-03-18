import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

const links = [
  {name: "Home", icon: "https://frutigeraeroarchive.org/images/icons/vista_white.ico",path: "/"},
  {name: "Recipes", icon: "https://frutigeraeroarchive.org/images/icons/explorer.ico",path: "/recipes"},
  {name: "Settings", icon: "https://frutigeraeroarchive.org/images/icons/vista_personalization.ico", path: "/settings"}
]

const images = [
  "https://i.pinimg.com/originals/76/70/18/767018db15881f641019e83b167bcbf2.png",
  "https://i.pinimg.com/originals/13/92/c2/1392c2e8ab040f5a8d4767bd70e7dc3e.png",
  "https://i.pinimg.com/originals/3f/4f/29/3f4f2967051f8669c53b2d2b92f38064.png",
  "https://i.pinimg.com/originals/c9/4a/bd/c94abd72cab7039a717bc6453aaeee79.png",
  "https://i.pinimg.com/originals/dd/ba/31/ddba31958e0f633731d38dfdf9884ce4.png",
  "https://i.pinimg.com/originals/ab/83/b5/ab83b503154a7f0a0e6f2580d75136f6.png"
].sort(()=> Math.random() - 0.5)

const icons =[
  {name: "Facebook", icon: "https://th.bing.com/th/id/OIP.8cxUCD8WjOygIKPAn7W3yAHaEK?rs=1&pid=ImgDetMain"},
  {name: "Instagram", icon: "https://purepng.com/public/uploads/large/21502363139brqka1urunxkb6fsykdwwbdsp41ilsn7kwdmaogpqzi3ja4m8ewca6aqx1hsluhgvvq2zhaxujjywzcnitprj0vcgrcheaj4srev.png"},
  {name: "Search", icon: "https://src.onlinedown.net/supply/sup_logo/logo-1122/28040_g.jpg"}
]

const SocialMedia = icons.slice(0,2);
const SerachIcon = icons.slice(2,3);

const chefs = [
  { name: "Christopher Nolan", img:"https://th.bing.com/th/id/OIP.nOZuqz9r7FBWLUwkKKuXPQHaEd?rs=1&pid=ImgDetMain",
    recipesCount:"12", cousine: "British",
  }, {
    name: "Sofia Coppola", img: "https://th.bing.com/th/id/OIP.gs5Pufe0JViQgcbsdOxbUAHaJv?rs=1&pid=ImgDetMain",
    recipesCount:"10", cousine: "American",
  }
]
const adjustedChefs = Array.from({ length: images.length }, (_, i) => chefs[i % chefs.length]);

function App() {
  return (
    <Router>
      <Navbar links={links} /> 
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home images={images} chefs={chefs} SocialMediaicons={SocialMedia} />} />
          <Route path="/recipes" element={<Recipes images={images} searchIcon={SerachIcon} chefs={adjustedChefs}/>}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
      <Footer />
    </Router>

  ); 
}

export default App;
