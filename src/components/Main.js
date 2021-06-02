import React, { useContext, useEffect, Fragment } from "react";
import instance from "../axios";
import requests from "../requests";
import Banner from "./Banner";
import CategoriesContainer from "./CategoriesContainer";
import { AppContext } from "../context/AppContext";
import "../css/Main.css";

const Main = () => {
  const { movie, setMovie } = useContext(AppContext);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (movie === null) {
      async function fetchData() {
        const data = await instance.get(requests.fetchTrending);
        setMovie(
          data?.data.results[
            Math.floor(Math.random() * data.data.results.length - 1)
          ]
        );

        return data;
      }
      fetchData();
    } // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Banner />

      <div className="gradient_top"></div>

      <div className="gradient_bottom"></div>

      <div className="gradient_left"></div>

      <div className="gradient_movies"></div>

      <div className="block"></div>

      <section className="postersSection">
        <CategoriesContainer
          category="Trending Now"
          fetchURL={requests.fetchTrending}
        />

        <CategoriesContainer
          category="Top Rated"
          fetchURL={requests.fetchTopRated}
        />

        <CategoriesContainer
          category="From Netflix"
          fetchURL={requests.fetchNetflixOriginals}
        />

        <CategoriesContainer
          category="Action Movies"
          fetchURL={requests.fetchActionMovies}
        />

        <CategoriesContainer
          category="Romance Movies"
          fetchURL={requests.fetchRomanceMovies}
        />

        <CategoriesContainer
          category="Comedy movies"
          fetchURL={requests.fetchComedyMovies}
        />

        <CategoriesContainer
          category="Horror Movies"
          fetchURL={requests.fethHorrorMovies}
        />

        <CategoriesContainer
          category="Star Wars"
          fetchURL={requests.fetchStarWars}
        />

        <CategoriesContainer
          category="Batman"
          fetchURL={requests.fetchBatman}
        />

        <CategoriesContainer
          category="Documentaries"
          fetchURL={requests.fetchDocumentaries}
        />
      </section>
    </Fragment>
  );
};

export default Main;
