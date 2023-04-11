import React, { useState, useEffect } from 'react';
const axios = require('axios');

export const Options = ({ optionsClicked, handleClick, setOptions }) => {

  if (!optionsClicked) {
    return (
      <div className='scraper_options-closed' onClick={handleClick}>
        Options
      </div>
    )
  }

  return (
    <div className='scraper_options-open' onClick={handleClick}>
    <ul style={{listStyle: 'none'}}>
      <li>
        <label>
          <input type='radio' value='email' onClick={(e) => {setOptions(e.target.value)}}/>
          email
        </label>
      </li>
      <li>
        <label>
          <input type='radio' value='phone number' onClick={(e) => {setOptions(e.target.value)}}/>
          phone number
        </label>
      </li>
      <li>
        <label>
          <input type='radio' value='ip address'onClick={(e) => {setOptions(e.target.value)}}/>
          ip address
        </label>
      </li>
      <li>
        <label>
          <input type='radio' value='line numbers' onClick={(e) => {setOptions(e.target.value)}}/>
          line numbers
        </label>
      </li>
    </ul>
  </div>
  );
};

export const App = () => {

  // STATE
  const [file, getFile] = useState('');
  const [grepData, getGrep] = useState('');
  const [optionsClicked, openOptions] = useState(false);
  const [doc, getDoc] = useState('');
  const [grepParams, configureParams] = useState({});

  useEffect(() => {
    fetchFile();
  }, [])

  // METHODS
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
      // console.log('fileContent:', fileContent, typeof fileContent);
      axios({
        url: './grepFiles',
        method: 'post',
        data: {data: fileContent, options: grepParams}
      })
      .then((response) => {
        console.log('response:', response.data);
        getGrep(response.data);
      })
    };
    reader.readAsText(file);
  }

  const handleClick = () => {
    openOptions(prevState => !prevState);
  };

  const setOptions = (param) => {
    configureParams({...grepParams, [param]: param})
  }

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
      <div className='scraper_dash'>
        <input type="file" name="file" onChange={(e) => { uploadFile(e); getDoc(e.target.files[0]);/*grepFile(e.target.files[0]);*/}}/>
        <button onClick={() => {grepFile(doc)}}>Filter</button>
        <Options optionsClicked={optionsClicked} handleClick={handleClick} setOptions={setOptions}/>
      </div>
    </div>
  );
}