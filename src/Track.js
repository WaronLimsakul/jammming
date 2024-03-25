import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

function Track(props) {

    const [audioSrc, setAudioSrc] = useState(null);
    
    const handleAdd = () => {props.handleAdd(props.track.id);}
    
    const handleRemove = () => {props.handleRemove(props.track.id);}

    const moveFn = () => {
      if(props.isRemoved) {
        return <Button type="button" onClick={handleRemove}>x</Button>
      }
      return <Button type="button" onClick={handleAdd}>+</Button>
    };

    const preview = () => {
      if(props.isRemoved) {
        return 
      }
      if(props.track.sample) {
        return (
          <div>
            <Button onClick={() => handlePreviewClick(props.track.sample)}>Play Preview</Button>
                {audioSrc === props.track.sample && (
                    <audio controls style={{ width: "100%" }}>
                        <source src={audioSrc}></source>
                    </audio>
                )}
          </div>
                )}
      else {return <p style={{color: "grey"}}>(No sample preview available)</p>}
    };

    const handlePreviewClick = () => {
      if (props.track.sample) {
          setAudioSrc(props.track.sample); // Set the audio source URL in local state
      }
  };
    
    return (
        <div >
          <Card class="d-inline-flex p-2" style={{width: "16rem", margin: '1rem'}}>
            <Card.Img src={props.track.picSrc}/>
            <Card.Body style={{margin: 5}}>
              {props.track && <p style={{fontWeight: 'bold'}}>{props.track.name}</p>}
              {props.track && <p>{props.track.artist} | {props.track.album}</p>}
              {preview()}
              
              {/* <Button class="btn btn-light btn-circle btn-xl" type='button' onClick={handlePreview}>&#9654;</Button> */}
            </Card.Body>
            {moveFn()}
                    
            
          </Card>
        </div>
      );
};

export default Track;

//<p style={{fontWeight:"bold"}}>{props.track.name}</p><br/>
            //<p>{props.track.artist} | {props.track.album}</p>

          //  <h3>{props.track}</h3>
          //  <p>
          //    {props.track} | {props.track}
          //  </p>