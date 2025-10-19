import { useState } from "react";

function SearchBar({ setSearchQuery, setUserHasSearched, addMovies })
{
    const [query, setQuery] = useState("");

    const OMDbAPIKEY = 'ed70b0f4';

    // use the current query to search OMDb for movies
    async function handleOMDbQuery()
    {
        if (query == '')
        {
            return;
        }

        const url = 'https://www.omdbapi.com';
        const apiKey = `apikey=${OMDbAPIKEY}`;
        const s = `s=${query}`;
        const type = 'type=movie';

        const fullUrl = `${url}/?${apiKey}&${s}&${type}`;
        console.log(`Query URL: ${fullUrl}`);

        const apiResponse = await fetch(fullUrl);
        const results = await apiResponse.json();
        
        // do this after waiting for the results to return
        setSearchQuery(query);
        setUserHasSearched(true);

        // add movie cards for each results
        addMovies(results.Search);
    }

    // when typing in the search box, update the query to be the newly typed input
    function handleQueryChange(event)
    {
        setQuery(event.target.value);
    }

    function handleKeyPress(event)
    {
        if (event.key == "Enter")
        {
            event.preventDefault();
            handleOMDbQuery();
        }
    }

    return (
        <>
            <section class="search-bar">
                <input type="text" id="searchInput" 
                    placeholder="Enter movie title..." onChange={handleQueryChange}
                    onKeyDown={handleKeyPress}/>
                <button id="searchBtn" onClick={handleOMDbQuery}>Search</button>
            </section>
        </>
    )
}

export default SearchBar;