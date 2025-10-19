function SearchMovieCard({ imdbId, title, yearReleased, posterSrc, isInWatchList, addToWatchList })
{
    function handleAddToWatchListButtonClick()
    {
        addToWatchList(imdbId, title, yearReleased, posterSrc);
    }

    return (
        <>
            <div class="movie-card">
                <img src={posterSrc} alt={`Poster for ${title} (${yearReleased})`}/>
                <div class="movie-info">
                    <h5>{title}</h5>
                    <p>
                        ImdbId: {imdbId}
                    </p>
                    <p>
                        Released: {yearReleased}
                    </p>
                </div>
                <div class="watchlist-stuff">
                    {isInWatchList(imdbId)
                        ?
                        <>
                            <label>✅ Added to watchlist</label>
                        </>
                        : 
                        <>
                            <button class="add-btn" onClick={handleAddToWatchListButtonClick}>+</button>
                            <label>Add to Watchlist</label>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchMovieCard;