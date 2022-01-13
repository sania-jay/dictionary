import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary(){
let [keyword, setKeyword] = useState ("");

function Search(event){
    event.preventDefault();
    alert(`Searching for ${keyword}`);
}

function handleKeyWordChange(event){
    setKeyword(event.target.value);
}

    return (
    <div className="Dictionary">
        <form onSubmit={Search}>
            <input type="search" onChange={handleKeyWordChange} />


        </form>
    </div>
    );
}