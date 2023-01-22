import React, { useState } from "react";
import axios from "axios";
import Results from "./components/Results/Results";
import Photos from "./components/Photos/Photos";
import './styles/App.css';

export default function App(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setloaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  const apiUrlEndpoint = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
  const pexelsApiKey = "563492ad6f91700001000001a3dc11e17fb1440db798f1c33646cef7";
  const pexelsUrlEndpoint = "https://api.pexels.com/v1/search?query=";
  const headers = { Authorization: `Bearer ${pexelsApiKey}` };

  function handleDictionaryApiResponse (response){
    setResults(response.data);
  }
  function handlePexelsApiResponse (response){
    setPhotos(response.data.photos);
  }
  function search(){
    axios.get(apiUrlEndpoint + keyword).then(handleDictionaryApiResponse);
    axios.get(`${pexelsUrlEndpoint}${keyword}&per_page=9`, {headers: headers}).then(handlePexelsApiResponse);
  }
  function handleSubmit (event){
    event.preventDefault();
    search();
  }
  function handleKeywordChange (event){
    setKeyword(event.target.value);
  }
  function load(){
    setloaded(true);
    search();
  }

  if (loaded){
    return (
      <div className="App">
        <h5>DICO</h5>
        <span>Enter your word, get its meaning quick !</span>
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} placeholder="Search..." onChange={handleKeywordChange} />
          <button type="submit">Go</button>
        </form>
        <Results info={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

