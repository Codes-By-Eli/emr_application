import React, {useState, useEffect} from 'react'

function APIService() {
    const [data, setData] = useState([{}])
    const API_URL = 'http://localhost:5000/'
    
    //This function will call the backend function and parse its JSON response
    function apiGet(route){
        fetch(`${API_URL}${route}`)
        .then((response) => response.json())
        .then((data) => console.log(data));

    }

    //This function will send information to the backend for manipulation
    function apiPost(route, information){
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(information)
        }
        fetch(`${API_URL}${route}`, options)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    
    return (
        {
            apiGet,
            apiPost
        }
    )
    
}

export default APIService