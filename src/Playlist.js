import React from "react";
import Track from "./Track";
import Tracklist from "./Tracklist";
import { Button, FormControl } from "react-bootstrap";

function Playlist(props) {
    const handleRemove = props.handleRemove;
    function handleNamePlaylist(event) {props.handleNamePlaylist(event.target.value)};
    const handleSavePlaylist = (event) => {
        event.preventDefault();
        props.handleSavePlaylist(props.playlistName, props.playlistTracks.map(track => track.uri));
    };
    return (
        <div style={{alignItems: 'center'}}>
            <FormControl 
            type="text" 
            placeholder="Set playlist name" 
            style={{fontSize: '1.5rem', fontWeight:"bold", margin: '2rem', width: '20rem'}}
            onChange={handleNamePlaylist}
            />
            <ul>
                <Tracklist songList={props.playlistTracks} handleRemove={handleRemove} isRemoved={true}/>
            </ul>
            <form onSubmit={handleSavePlaylist}>
                <Button type="submit">Save to Playlist</Button>
            </form>
        </div>
    )
};  

export default Playlist;