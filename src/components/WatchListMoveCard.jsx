function WatchListMovieCard({ imdbId, name, yearReleased, posterSrc, removeFromWatchList })
{
    function handleRemoveFromWatchListButtonClick()
    {
        removeFromWatchList(imdbId);
    }

    return (
        <>
            <div class="movie-card">
                <img src={posterSrc} alt={`Poster for ${name} (${yearReleased})`}/>
                <div class="movie-info">
                    <h5>{name}</h5>
                    <p>
                        ImdbId: {imdbId}
                    </p>
                    <p>
                        Released: {yearReleased}
                    </p>                
                </div>
                <div class="remove-button">
                    <button class="remove-btn" onClick={handleRemoveFromWatchListButtonClick}>-</button>
                    <label>Remove from Watchlist</label>
                </div>
            </div>
        </>
    )
}

export default WatchListMovieCard;