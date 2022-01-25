import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";

export default function Dictionary(props){
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response){
    console.log(response);
    setResults(response.data[0]);
}

function handlePexelsResponse(response){
  setPhotos(response.data.photos);
}
function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);

let pexelsApiKey = "563492ad6f9170000100000101f56c21bd2f4ecfbd9ef2fd05a55765";

let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers= {"Authorization" : `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
}
function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleKeyWordChange(event){
    setKeyword(event.target.value);
}
function load() {
    setLoaded(true);
    search();
}
if (loaded) {
return (
  <div className="Dictionary">
    <section>
      <h1>What word do you want to look up?</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeyWordChange} defaultValue={props.defaultKeyword} />
      </form>
      <div className="hint">
        suggested words: sunset, gym, coffee, panda ...
      </div>
    </section>
    <Results results={results} />
    <Photos photos={photos} />
  </div>
);
} else {
    load();
    return "Loading...";
}

    
}