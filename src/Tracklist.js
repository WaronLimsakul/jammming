import React, {useState, useEffect} from "react";
import Track from "./Track";
import { Row, Container } from "react-bootstrap";

function Tracklist(props) {

    const handleAdd = props.handleAdd;
    const handleRemove = props.handleRemove;
    const trackMap = props.songList.map((track) => {
        return <Track track={track}  
                    isRemoved={props.isRemoved}
                    handleAdd={handleAdd}
                    handleRemove={handleRemove}/>
    }); 
    return (
        <Container>
            <Row className="mx-2 row row-cols-2">
                {trackMap}
            </Row>
        </Container>
    )
};

export default Tracklist;
