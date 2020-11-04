import React from "react";
import ChooseTicketChild from "../chooseticket/ChooseTicketChild.component";
import Footer from "../partials/footer.component";
import Header from "../partials/Header/header.component";

const ChooseTickets = () => {
  return (
    <div className="wrapper">
      <Header />
      <div  className="bg-movies">
        <ChooseTicketChild />
      </div>
      
      <Footer />
    </div>
  );
};
export default ChooseTickets;
