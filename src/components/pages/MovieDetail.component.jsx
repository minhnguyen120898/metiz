import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieDetailChild from "../moviedetail/MovieDetailChild.component";
import Footer from "../partials/footer.component";
import Header from "../partials/Header/header.component";

const MovieDetail = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="wrapper">
      <Header />
      <div className="bg-movies">
        <MovieDetailChild />
      </div>
      <Footer />
    </div>
  );
};
export default MovieDetail;
