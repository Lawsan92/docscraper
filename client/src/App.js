import React, { useState, useEffect } from 'react';
const axios = require('axios');
export const App = () => {

  const fetchFile = async () => {
    // const fetchRequest = await fetch('./getFiles');
    // const fileData = await fetchRequest.json();
    axios({
      url: './getFiles',
      method: 'get'
    })
    .then((response) => {
      console.log('response:', response.data);
      const fileData = response.data;
      getFile(fileData);
    })
  }

  const [file, getFile] = useState('');

  useEffect(() => {
    fetchFile();
  }, [])

  return (
    <div className='scraper_container'>
      <div className='scraper_before-page'>
        <p>{file}</p>
      </div>
      <button className='scraper_upload-btn'>Upload</button>
    </div>
  );
}