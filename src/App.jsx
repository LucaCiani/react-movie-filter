import { useState, useEffect } from "react";
import moviesList from "./assets/data/movies";

function App() {
    const [Titles, setTitles] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(moviesList);
    const [querySearch, setQuerySearch] = useState("");

    useEffect(() => {}, []);

    const handleFilterChange = (e) => {
        if (e.target.value === "") {
            setFilteredMovies(moviesList); // Mostra tutti i film
        } else {
            setFilteredMovies(
                moviesList.filter((movie) => movie.genre == e.target.value)
            );
        }
    };

    const handleInputChange = (e) => {
        setTitles(e.target.value);
        console.log(e.target.value);
    };

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!Titles) {
            alert("Inserisci un titolo valido");
            return;
        }

        const newMovie = { title: Titles, genre: selectedGenre };
        const newMovies = [...filteredMovies, newMovie];
        setFilteredMovies(newMovies);
        setTitles("");
        setSelectedGenre("");
    };

    const handleDelete = (name) => {
        setFilteredMovies([
            ...filteredMovies.filter((movie) => movie.title !== name),
        ]);
    };
    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <h1>MOVIE REACT</h1>
                    <h3>Filtra</h3>
                    <form>
                        <select
                            onChange={handleFilterChange}
                            name="genre-filter"
                        >
                            <option value="">Seleziona un genere</option>
                            <option value="Fantascienza">Fantascienza</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Romantico">Romantico</option>
                            <option value="Azione">Azione</option>
                        </select>
                    </form>
                    <form onSubmit={handleFormSubmit} className="form">
                        <select name="genre" onChange={handleGenreChange}>
                            <option defaultValue="">Seleziona un genere</option>
                            <option value="Fantascienza">Fantascienza</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Romantico">Romantico</option>
                            <option value="Azione">Azione</option>
                        </select>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            className="form-input"
                            name="title"
                            value={Titles}
                        />
                        <button className="form-button">AGGIUNGI</button>
                    </form>
                    <div className="d-flex">
                        <ul className="titles-list">
                            {filteredMovies.map((movie) => (
                                <li
                                    className="titles-list-item"
                                    key={movie.title}
                                >
                                    Titolo: {movie.title}, Genere: {movie.genre}
                                    <div>
                                        <i
                                            onClick={() =>
                                                handleDelete(movie.title)
                                            }
                                            className="fa-solid fa-trash"
                                        ></i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
