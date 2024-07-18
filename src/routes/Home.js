import Movie from '../components/Movie';
import { useState, useEffect } from 'react';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await(
            await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9'
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies)

    return <div>
        <h2 className="section_title">
            <span className="container">
                <span>20Twenty</span>
                <span>movie</span>
            </span>
            recommendations
        </h2>
        {loading ? 
        <div aria-label="Loading" className="loading">
            <div className="container">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div> : <ol className="movie_list">{movies.map((item, idx) => 
        <Movie 
            key={item.id}
            id={item.id}
            idx={idx}
            coverImg={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            genres={item.genres}
        />
        )}</ol>}
    </div>
}

export default Home;