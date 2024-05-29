import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Home";
import AdminPP from "./components/AdminPostPage";
import Post1 from "./Posts/Post1";
import Post2 from "./Posts/Post2";
import Post3 from "./Posts/Post3";
import Post4 from "./Posts/Post4";
import Post5 from "./Posts/Post5";
import Post6 from "./Posts/Post6";
import Post7 from "./Posts/Post7";
import Nyheter from "./components/Nyheter";
import Team from "./components/Team";
import Video from "./components/Video";
import Artiklar from "./components/Artiklar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/AdminPP" element={<AdminPP />} />
        <Route path="/Post1" element={<Post1 />} />
        <Route path="/Post2" element={<Post2 />} />
        <Route path="/Post3" element={<Post3 />} />
        <Route path="/Post4" element={<Post4 />} />
        <Route path="/Post5" element={<Post5 />} />
        <Route path="/Post6" element={<Post6 />} />
        <Route path="/Post7" element={<Post7 />} />
        <Route path="/Nyheter" element={<Nyheter />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Artiklar" element={<Artiklar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;