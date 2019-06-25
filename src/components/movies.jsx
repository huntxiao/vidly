import React, { Component } from "react";
import { getMovies } from "../services/doubanMovies";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genres</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genres}</td>
              <td>{movie.year}</td>
              <td>{movie.rating.average}</td>
              <td>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
