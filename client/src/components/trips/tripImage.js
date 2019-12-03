import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

export async function getImage() {
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;
  console.log(apiKey)
  const response =
    await axios.get("https://api.pexels.com/v1/search?query=sydney+query&per_page=1&page=1",
      { headers: { 'Authorization': `${apiKey}` } }
    )
  const link = response.data.photos[0].src.medium
  const image = renderImage(link)
  ReactDOM.render(image, document.getElementById('image'));
}

const renderImage = (link) => {
  return (
    <img src={link}></img>
  );
}