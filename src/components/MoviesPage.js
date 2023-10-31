import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {

  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Route exact path={match.url}>
        <h3>Please select a Movie from the list above</h3>
      </Route>
      {/* We also add a `Route` component that will render `MovieShow`
      when a movie is selected */}
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>

  );
}
export default MoviesPage;
