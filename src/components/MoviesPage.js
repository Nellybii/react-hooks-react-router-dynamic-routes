import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MoviesShow from "./MoviesShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />

      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.url}/:movieId`}>
        <MoviesShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;