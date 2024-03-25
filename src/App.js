import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row} from 'react-bootstrap';
import './App.css';
import Spotify from './util/Spotify';
import SearchBar from './SearchBar';
import SearchResult from './SearchResults';
import Playlist from './Playlist';

function App() {

  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistUris, setPlaylistUris] = useState([]);

  //get songlist then set result then pass it in searchResult
  

  function handleType(event) {
    setSearchInput(event.target.value);
  };

  const search = (term) => {
    Spotify.search(term).then(setSearchResult);
  };

  function handleAdd(id) {
    let trackToMove = searchResult.find(track => track.id === id);
    if (trackToMove) {
      setPlaylistTracks(prev => [...prev, trackToMove]);
    }
  };

  function handleRemove(id) {
    let trackToMove = playlistTracks.find(track => track.id === id);
    if (trackToMove) {
      setPlaylistTracks(prev => prev.filter(track => track.id !== id));
    }
  };

  function handleNamePlaylist(name) {
    setPlaylistName(name);
  };

  function handleSavePlaylist(name, trackUris) {
    Spotify.savePlaylist(name, trackUris);
    setPlaylistTracks([]);
  };


  return (
    <div className="App">
      <Container style={{backgroundColor:"#0275d8", color:"white", marginBottom:"3rem",}}>
        <h1>Jammming</h1>
      </Container>
      <Container>
        <SearchBar value={searchInput} handleType={handleType} onSearch={search}/>
      </Container>
      <div class="d-inline-flex p-2">
        <Container>
          <SearchResult resultList={searchResult} handleAdd={handleAdd}/>
        </Container>
        <Container>
          <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks}
          playlistUris={playlistUris}
          handleRemove={handleRemove}
          handleNamePlaylist={handleNamePlaylist} 
          handleSavePlaylist={handleSavePlaylist}
          setPlaylistUris={setPlaylistUris}/>
        </Container>
      </div>

      

    </div>
  );
}

export default App;
