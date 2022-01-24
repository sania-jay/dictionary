import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
let [keyword, setKeyword] = useState ("");
let [results, setResults] = useState(null);

function handleResponse(response){
    console.log(response);
    setResults(response.data[0]);
}

function Search(event){
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

function handleKeyWordChange(event){
    setKeyword(event.target.value);
}

    return (
    <div className="Dictionary">
        <form onSubmit={Search}>
            <input type="search" onChange={handleKeyWordChange} />
        </form>
        <Results results={results}/>
    </div>
    );
}