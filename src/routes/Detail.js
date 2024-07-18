import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DetailInfo(props) {
    return <div className="detail_wrap">
        <h2 className="section_title">{props.movie.title}</h2>
        <div className="container">
            <img src={props.movie.medium_cover_image} className="img" />
            <div className="info_wrap">
                <div className="info_container">
                    <h3 className="title">Rating</h3>
                    <p className="text">{props.movie.rating}/10</p>
                </div>
                <div className="info_container">
                    <h3 className="title">Year</h3>
                    <p className="text">{props.movie.year}/10</p>
                </div>
                <div className="info_container">
                    <h3 className="title">Description</h3>
                    <p className="text">{props.movie.description_full}/10</p>
                </div>
            </div>
        </div>

        <div className="btn_wrap">
            <Link to="/react_movie" className="btn_1">View List</Link>
        </div>
    </div>
}

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const {id} = useParams();

    const getMovie = async() => {
        const json = await(
            await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        console.log(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return <div>
        {loading ? <div aria-label="Loading" className="loading">
            <div className="container">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div> : <DetailInfo movie={movie}></DetailInfo>}
    </div>
}

export default Detail;