import React, { useState, useEffect } from 'react';
import Options from './Options.js';
import OptionModal from './OptionModal.js';
import Landing from './Landing.js';
const axios = require('axios');
// const fs = require('fs');
// import '../dist/styles.scss';

export const App = () => {

  // STATE
  const [file, getFile] = useState('');
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
      getFile(fileContent);
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
  //   writeFile('grepFile.txt', data, (err) => {
  //     if (err) {
  //       console.log('err:', err.stack)
  //     } else {
  //       console.log("File written successfully\n");
  //       console.log("The written has the following contents:");
  //       console.log(fs.readFileSync("books.txt", "utf8"));
  //     }
  //   })
  // }

  if (landing) {
    return <Landing setLanding={setLanding}/>
  } else {
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
          <button onClick={() => {grepFile(doc); configureParams({})}}>Filter</button>
          <Options optionsClicked={optionsClicked} handleClick={handleClick} setOptions={setOptions} configureParams={configureParams} grepParams={grepParams} handleModal={handleModal} grepText={grepText} getText={getText}/>
          {/* <button onClick={handleDownload}>ReadFile</button> */}
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