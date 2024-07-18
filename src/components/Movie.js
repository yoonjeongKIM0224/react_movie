import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres, idx}){
    return <li id={id} className="item">
        <Link to={`/movie/${id}`} className="item_cont">
            <span className="number">{String(idx + 1).length == 1 ? `0${idx + 1}` : idx + 1}</span>
            <div className="info_list short_1">
            {genres.map((genresItem) => 
                <span key={genresItem} className="item">{genresItem}</span>
            )}
            </div>
            <h2 to={`/movie/${id}`} className="title short_2">{title}</h2>
            <div className="img_wrap">
                <img src={coverImg} alt={title} className="img" />
            </div>
            {/* <p className="text">{summary}</p> */}
        </Link>
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