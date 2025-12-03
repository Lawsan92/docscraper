import React, { useState, useEffect } from 'react';
import Options from './Options.js';
import OptionModal from './OptionModal.js';
import Landing from './Landing.js';
const axios = require('axios');
const fs = require('fs');
import '../dist/styles.scss';

export const App = () => {

  // STATE
  const [file, getFile] = useState({});
  const [grepData, getGrep] = useState('');
  const [optionsClicked, openOptions] = useState(false);
  const [doc, getDoc] = useState('');
  const [grepParams, configureParams] = useState({
    sort: {

    }
  });
  const [grepText, getText] = useState();
  const [landing, setLanding] = useState(true);
  const [modalOpen, setModal] = useState(false);

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
      console.log('response:', response.data);
      const fileData = response.data;
      // getFile(fileData);
    })
    .catch((err) => {
      // console.log('err.stack:', err.stack);
    })
  }

  const uploadFile = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let fileContent = e.target.result;
      getFile({'content': fileContent, 'name': file.name});
    };
    reader.readAsText(file);
  }

  const grepFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      let fileContent = e.target.result;
      // console.log('fileContent:', fileContent, typeof fileContent);
      // console.log('grepParams:', grepParams)
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
    configureParams({...grepParams, [param]: param});
  }

  const handleModal = () => {
    setModal(prevState => !prevState);
  }

  // const handleDownload = () => {

  //   let data = grepData;

  //   fs.writeFile(`${file.name}_grepped.txt`, grepData, (err) => {
  //           if (err) throw err;
  //           console.log('File saved!');
  //       });
  // }

  if (landing) {
    return <Landing setLanding={setLanding}/>
  } else {
    return (
      <div className='scraper_container'>
        <div className='scraper_pages'>
          <div className='scraper_before-page'>
            <p>{file.content}</p>
          </div>
          <div className='scraper_after-page'>
            <p style={{color: 'red'}}>{grepData}</p>
          </div>
        </div>
        <div className='scraper_dash'>
          <span className='scraper_dash_el1'>
            <input type="file" name="file" id='upload_btn'onChange={(e) => { uploadFile(e); getDoc(e.target.files[0]);/*grepFile(e.target.files[0]);*/}} style={{display: 'none'}}/>
            <label for='upload_btn' className='scraper_dash_btn'>Upload file</label>
            {file.name ? <p className='scraper_dash_upload_text'>{file.name} uploaded</p> : <p>select a file</p>}
          </span>
          <span className='scraper_dash_el2'>
            <button className='scraper_dash_btn' onClick={() => {grepFile(doc); configureParams({})}}>Filter</button>
            {/* <button onClick={handleDownload}>ReadFile</button> */}
          </span>
          <Options optionsClicked={optionsClicked} handleClick={handleClick} setOptions={setOptions} configureParams={configureParams} grepParams={grepParams} handleModal={handleModal} grepText={grepText} getText={getText}/>
        </div>
        {modalOpen && <OptionModal handleModal={handleModal}/> }
      </div>
    );
  }
}

export default App;

// REFERENCES
// https://www.pluralsight.com/guides/how-to-access-custom-attributes-from-aevent-object-in-react
// https://bobbyhadz.com/blog/react-remove-key-from-state-object
// https://bobbyhadz.com/blog/react-update-nested-state-object-property