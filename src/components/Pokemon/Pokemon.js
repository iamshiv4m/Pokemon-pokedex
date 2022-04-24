import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Pokemon.css";
import PokemonThumb from "./PokemonThumb";

function Pokemon({ pageCount, page, prev, next, pokemonData }) {
  const [active, setActive] = useState(1);
  return (
    <>
      <Navbar />
      <div className="app-contaner">
        <h1 className="head">Pokemon Evolution</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {pokemonData.map((pokemonStats, index) => (
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pagination-wrapper">
        <ul className="pages">
          {pageCount ? (
            <>
              <li
                className="prev"
                onClick={() => {
                  prev();
                  setActive(active - 1);
                }}
              >
                Prev
              </li>
              {[...Array(pageCount)].map((e, i) => {
                return (
                  <li
                    className={`page ${active === i + 1 ? "active" : ""}`}
                    onClick={() => {
                      page(
                        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${
                          20 * i
                        }`
                      );
                      setActive(i + 1);
                    }}
                    key={i}
                  >
                    {i + 1}
                  </li>
                );
              })}
              <li
                className="next"
                onClick={() => {
                  next();
                  setActive(active + 1);
                }}
              >
                Next
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
}

export default Pokemon;
