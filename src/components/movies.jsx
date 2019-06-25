import React, { Component } from "react";
import { getMovies } from "../services/doubanMovies";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete(movie) {
    console.log("curent movie", movie);
    const movies = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({ movies: movies });
  }
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return (
        <p style={{ fontWeight: "bolder" }}>
          There are no movies in the database.
        </p>
      );
    }
    return (
      <React.Fragment>
        <p style={{ fontWeight: "bolder" }}>
          Showing {count} movies in the database.
        </p>
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
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genres}</td>
                <td>{movie.year}</td>
                <td>{movie.rating.average}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(movie);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
