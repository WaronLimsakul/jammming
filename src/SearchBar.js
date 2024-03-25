import React from "react";
import { Button, FormControl } from "react-bootstrap";

function SearchBar({value, handleType, onSearch}) {
    function handleSubmit(event) {
        event.preventDefault();
        onSearch(value);
    };
    return (
        <div style={{width: "30rem"}}>
            <form onSubmit={handleSubmit} class="d-inline-flex p-2" style={{width: '90%'}}>
                <FormControl placeholder="Search Song by anything" type="text" onChange={handleType} />
                <Button type="submit">Search</Button>
            </form>
        </div>
    )
};

export default SearchBar;