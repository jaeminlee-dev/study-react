import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, year, title, summary, genres, id }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img}></img>
      <div>
      <h2 className={styles.movie__title}>
        
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <h3 className={styles.movie__year}>{year}</h3>
      <ul className={styles.movie__genres}>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
