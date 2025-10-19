import WatchListMovieCard from "../components/WatchListMoveCard"
import "../style/WatchlistPage.css"

function WatchlistPage({ watchList, resetWatchList, removeFromWatchList })
{
    function getWatchListMovieCards()
    {
        return watchList.map((info) => <WatchListMovieCard 
                                        name={info.title}
                                        yearReleased={info.yearReleased}
                                        posterSrc={info.posterSrc}
                                        imdbId={info.imdbId}
                                        key={info.imdbId}
                                        removeFromWatchList={removeFromWatchList}
                                        />
                            )
    }
    
    return (
        <>
            <main>
                <h3>My WatchList</h3>
                <button class="reset-btn" onClick={resetWatchList}>Clear</button>
                <div class="watchlist">
                {watchList.length > 0
                    ?
                    getWatchListMovieCards()
                    : 
                    <p>
                        No movies in your Watch List right now!
                    </p>
                }
                </div>
            </main>
        </>
    )
}

export default WatchlistPage;