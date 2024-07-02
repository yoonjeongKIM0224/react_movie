import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailInfo(props) {
    return <div>
        <h1>{props.movie.title}</h1>
        <img src={props.movie.medium_cover_image} />
        <p>별점: {props.movie.rating}/10</p>
        <p>개봉: {props.movie.year}</p>
        <p>설명: {props.movie.description_full}</p>
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
        {loading ? <h1>Loading...</h1> : <DetailInfo movie={movie}></DetailInfo>}
    </div>
}

export default Detail;