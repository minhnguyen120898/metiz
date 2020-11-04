import React from "react";
import Footer from "../partials/footer.component";
import Header from "../partials/Header/header.component";
import ChooseSeatsChild from "../chooseseats/ChooseSeatsChild.component";


const ChooseSeats = () => {
  return (
    <div className="choose-seat-pages wrapper">
      <Header />
      <div  className="bg-movies">
        <ChooseSeatsChild />
      </div>
      <Footer />
    </div>
  );
};
export default ChooseSeats;
