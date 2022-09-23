import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import {Routes,Route} from "react-router-dom";

function App() {//顯示common component
    return (
        <div className="App">
            <Nav/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

// import About from "./pages/About";
// import { Routes, Route } from "react-router-dom";
// function App() {
//     return (
//         <div className="App">
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<Homepage />} />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//             <Footer />
//         </div>
//     );
// }