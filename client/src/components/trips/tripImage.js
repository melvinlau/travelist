import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

export async function getImage(destination) {
  const formattedDestination = formatDestination(destination)
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;
  const url = `https://api.pexels.com/v1/search?query=${formattedDestination}&per_page=1&page=1`
  console.log(url)
  console.log(apiKey)
  const result =
    await axios.get(url,
      { headers: { 'Authorization': `${apiKey}` } }
    )
      .then(response => { return response.data.photos[0].src.medium })
  return result
  // ReactDOM.render(image, document.getElementById('image'));
}

const renderImage = (link) => {
  const renderStyle = {
    background: `url(${link}) no-repeat center center`,
    backgroundSize: "cover",
    height: "16rem"
  }
  return (
    <div className="card-img-top"></div>
  );
}

const formatDestination = (dest) => {
  return dest.split(' ').join('+')
}
