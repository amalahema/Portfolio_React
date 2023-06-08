import React, { useState } from "react";
import Header from "../src/Components/Header";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import Portfolio from "../src/Components/Portfolio";
import Resume from "../src/Components/Resume";
import Footer from "../src/Components/Footer";

import "./App.css";

function App() {
  const [currentPage, handlePageChange] = useState("About");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
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

  return(
      <div>
       <Header>
          currentPage= {currentPage}
          handlePageChange= {handlePageChange}
       </Header>
        <div>
          <main> {renderPage()} </main>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
  );
}
export default App