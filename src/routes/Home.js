import { useState, useEffect } from "react";

import Movie from "../components/Movie";

function Home() {
  const [isLoaded, setLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(true);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {isLoaded ? (
        <div>
          {movies.map((movie) => (
            <Movie
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              key={movie.id}
              id={movie.id}
            />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Home;
