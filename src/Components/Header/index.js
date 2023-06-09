import React from "react";
import Navbar from "../Navbar";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
         
          </div>
          <div>
            <Navbar
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></Navbar>
          </div>
        </header>
      </section>
     
    </div>
  );
}

export default Header;