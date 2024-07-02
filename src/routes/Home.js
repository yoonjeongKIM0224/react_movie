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

    return <div>
        {loading ? <h1>Loading...</h1> : <ol>{movies.map((item) => 
        <Movie 
            key={item.id}
            id={item.id}
            coverImg={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            genres={item.genres}
        />
        )}</ol>}
    </div>
}

export default Home;