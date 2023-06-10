/*import React from "react";
import About from "./Components/About";


const App = () => <About />;

export default App;*/

import "./App.css";
import React, { useState } from "react";
import About from "../src/Components/About";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import Resume from "../src/Components/Resume";
import Portfolio from "../src/Components/Portfolio";
import Contact from "../src/Components/Contact";
function App() {
  const [currentPage, handlePageChange ] = useState("about");

  // This function checks to see which tab is selected and then generates the appropriate tab.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
      if (currentPage === "Contact") {
       return <Contact />;
     }
     if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
     if (currentPage === "Resume") {
       return <Resume />;
    }
    return <About />;
  };

  return (
    <div>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      </div>
      <div>
        <main>{renderPage()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;