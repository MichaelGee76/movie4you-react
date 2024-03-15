import React, { useState, useEffect } from "react";
import moviesData from "../../Data/Data";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
    // I use just one state to rerender and update state in every function
    const [movies, setMovies] = useState(moviesData);
    // Another state for search bar
    const [search, setSearch] = useState("");
    console.log("movie mit id", moviesData);

    // sort by year

    const sortByYear = (ascending) => {
        const sortedMovies = [...movies].sort((a, b) => {
            // ternary
            return ascending ? a.year - b.year : b.year - a.year;
        });
        setMovies(sortedMovies);
    };

    // sort by rating

    const sortByRating = () => {
        // to prevent original arr from overwriting I create a new one
        const sortedMovies = [...movies].sort((a, b) => b.rate - a.rate);
        setMovies(sortedMovies);
    };

    // sort by title up and down

    const sortByTitle = (ascending) => {
        const sortedMovies = [...movies].sort((a, b) => {
            const titleA = a.title;
            const titleB = b.title;
            // if ascending is button clicked sort asceending boolean handed over by onclick event
            if (ascending) {
                return titleA.localeCompare(titleB);
                // else ascending false boolean handed over by onclick event
            } else {
                return titleB.localeCompare(titleA);
            }
        });
        setMovies(sortedMovies);
    };

    // function turns rating into stars

    const starsRating = (rating) => {
        // round down to integer
        const roundRating = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < 10; i++) {
            if (i < roundRating) {
                // full stars as long i < roundRating
                stars.push(
                    <span key={i} className="star">
                        &#9733;
                    </span>
                );
            } else {
                stars.push(
                    // empty stars to fill up to ten stars
                    <span key={i} className="star">
                        &#9734;
                    </span>
                );
            }
        }
        return stars;
    };

    // fix the problem, that detail "back" link navigated to end of home
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className="wrapper">
            <h1>
                <span className="logo">
                    <img src="logo.png" alt="" />
                </span>
                <span className="outline">
                    Movies<span className="fourSpan">4</span>You
                </span>
            </h1>
            <div className="buttonContainer">
                <button onClick={() => sortByYear(true)}>Date ▲</button>
                <button onClick={() => sortByYear(false)}>Date ▼</button>
                <button onClick={sortByRating}>✩ Best Rate ✩</button>
                <button onClick={() => sortByTitle(true)}>A-Z ▲</button>
                <button onClick={() => sortByTitle(false)}>Z-A ▼</button>
            </div>
            <div className="searchContainer">
                <input type="text" placeholder="Search movies..." className="inputField" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="moviesContainer">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <Link key={index} to={`/movie/${movie.id}`}>
                            <div className="tile">
                                <h2>{movie.title}</h2>
                                <p>{movie.year}</p>
                                <p>{movie.director}</p>
                                <p>{movie.duration}</p>

                                <p>{starsRating(movie.rate)}</p>
                                <p>{movie.rate}</p>
                                <p>{movie.genre.join(" | ")}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="errorMessage">No results for {search}.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
