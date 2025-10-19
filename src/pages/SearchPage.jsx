import { useState } from "react"
import SearchBar from "../components/SearchBar";
import SearchMovieCard from "../components/SearchMovieCard";
import "../style/SearchPage.css"

function SearchPage({ isInWatchList, addToWatchList })
{
    const [searchQuery, setSearchQuery] = useState("");
    const [userHasSearched, setUserHasSearched] = useState(false);
    const [movieCardInfo, setMovieCardInfo] = useState([]);

    // create movie cards for each search result
    function addMovieCards(searchResults)
    {
        if (searchResults == null)
        {
            setMovieCardInfo([]);
            return;
        }

        const newMovieCardInfo = [];
        for (let i = 0; i < searchResults.length; i++)
        {
            const result = searchResults[i];

            const title = result.Title;
            const year = result.Year;
            const imdbId = result.imdbID;
            const posterSrc = result.Poster;

            newMovieCardInfo.push({
                title: title,
                year: year,
                posterSrc: posterSrc,
                imdbId: imdbId
            });
        }
        setMovieCardInfo(newMovieCardInfo);
    }

    const movieCards = movieCardInfo.map((info) => <SearchMovieCard 
                                            title={info.title}
                                            yearReleased={info.year}
                                            posterSrc={info.posterSrc}
                                            imdbId={info.imdbId}
                                            key={info.imdbId}
                                            isInWatchList={isInWatchList}
                                            addToWatchList={addToWatchList}
                                            />)

    const noSearchYet = <>
        <p>
            Enter something in the search bar!
        </p>
    </>
    const regularSearchResults = <>
        <p>
                Results for "{searchQuery}"
        </p>
        <div class="search-results">
            {movieCards}
        </div> 
    </>
    const noSearchResults = <>
        <div class="no-results">
            <p>
                Sorry, no results found for "{searchQuery}"
            </p>
        </div>
    </>

    return (
        <>
            <main>
                <SearchBar setSearchQuery={setSearchQuery} setUserHasSearched={setUserHasSearched} addMovies={addMovieCards}/>
                {movieCards.length > 0
                    ? regularSearchResults 
                    : (userHasSearched
                        ? noSearchResults
                        : noSearchYet
                      )
                }
            </main>
        </>
    )
}

export default SearchPage;