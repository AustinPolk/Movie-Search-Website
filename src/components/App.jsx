import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import HomePage from "../pages/HomePage"
import SearchPage from "../pages/SearchPage"
import WatchlistPage from "../pages/WatchlistPage"
import '../style/App.css'

function App() 
{
  const [watchListIsLoaded, setWatchListIsLoaded] = useState(false);
  const [watchList, setWatchList] = useState([]);

  function setWatchListInLocalStorage(newWatchList)
  {
    localStorage.setItem('user-watchlist-json', JSON.stringify(newWatchList));
  }

  function getOrCreateWatchListFromLocalStorage()
  {
    let watchlist = localStorage.getItem('user-watchlist-json');
    if (watchlist == null)
    {
      watchlist = [];
      setWatchListInLocalStorage(watchlist);
    }
    return JSON.parse(watchlist);
  }

  function refreshWatchList()
  {
    if (!watchListIsLoaded)
    {
        const localWatchList = getOrCreateWatchListFromLocalStorage();
        setWatchList(localWatchList);
        setWatchListIsLoaded(true);
    }
  }

  function resetWatchList()
  {
    setWatchList([]);
    setWatchListInLocalStorage([]);
  }

  function isInWatchList(imdbId)
  {
    for (let i = 0; i < watchList.length; i++)
    {
      const watchListedMovie = watchList[i];
      if (watchListedMovie.imdbId == imdbId)
      {
        return true;
      }
    }
    return false;
  }

  function addToWatchList(imdbId, title, yearReleased, posterSrc)
  {
    const newItem = {
      imdbId: imdbId,
      title: title,
      yearReleased: yearReleased,
      posterSrc: posterSrc
    };
    const newWatchList = [...watchList, newItem];
    setWatchList(newWatchList);
    setWatchListInLocalStorage(newWatchList);

    console.log(`Added imdbId=${imdbId} to watch list`);
  }

  function removeFromWatchList(imdbId)
  {
    let newWatchList = watchList.filter(item => item.imdbId != imdbId);
    setWatchList(newWatchList);
    setWatchListInLocalStorage(newWatchList);

    console.log(`Removed imdbId=${imdbId} from watch list`);
  }

  refreshWatchList();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage isInWatchList={isInWatchList} addToWatchList={addToWatchList} />} />
        <Route path="/watchlist" element={<WatchlistPage watchList={watchList} resetWatchList={resetWatchList} removeFromWatchList={removeFromWatchList} />} />
      </Routes>
    </>
  )
}

export default App;