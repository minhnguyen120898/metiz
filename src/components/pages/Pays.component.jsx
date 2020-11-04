import React from "react";
import Footer from "../partials/footer.component";
import Header from "../partials/Header/header.component";
import PaysChild from "../pays/PaysChild.component";


const Pays = () => {
  return (
    <div className="pay-pages wrapper">
      <Header />
       <div  className="bg-movies">
        <PaysChild />
       </div>
      <Footer />
    </div>
  );
};
export default Pays;
