import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return <li id={id}>
        <div>
            <img src={coverImg} alt={title} />
        </div>
        <strong>
            <Link to={`/movie/${id}`}>{title}</Link>
        </strong>
        <p>{summary}</p>
        <ul>
        {genres.map((genresItem) => 
            <li key={genresItem}>{genresItem}</li>
        )}
        </ul>
    </li>
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;