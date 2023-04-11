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
      // console.log('response:', response.data);
      const fileData = response.data;
      // getFile(fileData);
    })
  }

  const uploadFile = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let fileContent = e.target.result;
      getFile(fileContent);
    };
    reader.readAsText(file);
  }

  const grepFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      let fileContent = e.target.result;
      console.log('fileContent:', fileContent, typeof fileContent);
      axios({
        url: './grepFiles',
        method: 'post',
        data: {data: fileContent}
      })
      .then((response) => {
        console.log('response:', response.data);
        getGrep(response.data);
      })
    };
    reader.readAsText(file);
  }

  const [file, getFile] = useState('');
  const [grepData, getGrep] = useState('');

  useEffect(() => {
    fetchFile();
  }, [])

  return (
    <div className='scraper_container'>
      <div className='scraper_pages'>
        <div className='scraper_before-page'>
          <p>{file}</p>
        </div>
        <div className='scraper_after-page'>
          <p style={{color: 'red'}}>{grepData}</p>
        </div>
      </div>
      <input type="file" name="file" onChange={(e) => { uploadFile(e); grepFile(e.target.files[0]);}}/>
      <button className='scraper_upload-btn'>Upload</button>
    </div>
  );
}