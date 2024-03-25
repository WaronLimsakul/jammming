import React from "react";
import Tracklist from "./Tracklist";

function SearchResult(props) {
    const handleAdd = props.handleAdd;
    return (
        <div>
            <h2 style={{margin: '2rem'}}>Result</h2>
            <Tracklist songList={props.resultList} handleAdd={handleAdd}/>
        </div>
    )
};

export default SearchResult;
