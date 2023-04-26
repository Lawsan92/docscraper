import React, { useState, useEffect } from 'react';
import Options from './Options.js';
import OptionModal from './OptionModal.js';
const axios = require('axios');
import '../dist/styles.scss';

export const Landing = ({ setLanding }) => {
  return (
    <div className='scraper_landing' onClick={() => {setLanding(false)}}>
      <div className='scraper_landing-logo'>
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681251277/Screen_Shot_2023-04-11_at_17.07.44_haqpxe.jpg'style={{height: '40vh', borderRadius: '50%'}}/>
        <h1 style={{color: '#ffce30'}}>DocuScraper</h1>
      </div>
    </div>
  )
}

// export const OptionBars = () => {
//   let options = ['email', 'phone number', 'ip address', 'line numbers'];

//   const mapOptions = () => {
//     let count = 0;
//     return options.map((option) => {
//       count ++;
//       return <div key={count} className='scraper_option_cell'>{option}</div>;
//     })
//   }
//   return (
//     <div>
//       {mapOptions()}
//     </div>
//   );
// }

// export const Options = ({ optionsClicked, handleClick, setOptions, configureParams, grepParams }) => {

//   const [isChecked, toggleRadio] = useState(false);

//   const handleRadio = (param, key) => {
//     toggleRadio((prevState )=> ({...isChecked, [key]:! prevState[key]}));
//     console.log('isChecked:', isChecked);
//     if (!isChecked[key]) {
//       if (param.slice(0, 4) === 'sort') {
//         configureParams(currentState => {
//           return {
//             ...currentState,
//             sort: {
//               ...currentState.sort,
//               [param.slice(5)]: true
//             }
//           }
//         });
//       } else {
//         // configureParams({...grepParams, [param]: param});
//         configureParams(currentState => {
//           return {
//             ...currentState,
//             param: {
//               ...currentState.param,
//               [param]: true
//             }
//           }
//         });
//       }
//     } else {
//       if (param.slice(0, 4) === 'sort') {
//         configureParams(currentState => {
//           return {
//             ...currentState,
//             sort: {
//               ...currentState.sort,
//               [param.slice(5)]: false
//             }
//           }
//         });

//       } else {
//         configureParams(currentState => {
//           return {
//             ...currentState,
//             param: {
//               ...currentState.param,
//               [param]: false
//             }
//           }
//         });
//       }
//     }
//   }

//   const mapOptions = () => {
//     let options = ['email', 'phone number', 'ip address', 'line numbers'];
//     let count = 1;
//     options.map((option) => {
//       return (
//       <li>
//         <label>
//           <input type='radio' value={option} data-id={count} checked={isChecked[{count}]} onClick={(e) => { handleRadio(e.target.value, e.target['dataset']['id'])}}/>
//           {option}
//         </label>
//       </li>
//       );
//       count++;
//     })
//   }

//   if (!optionsClicked) {
//     return (
//       <div className='scraper_options-closed' onClick={handleClick}>
//         Options
//       </div>
//     )
//   }

//   return (
//     <div className='scraper_options-open'>
//     <ul style={{listStyle: 'none'}}>
//       <li>
//         <label>
//           <input type='radio' value='email' data-id='1' checked={isChecked['1']} onClick={(e) => { handleRadio(e.target.value, e.target['dataset']['id'])}}/>
//           email
//         </label>
//       </li>
//       <li>
//         <label>
//           <input type='radio' value='phone number' data-id='2' checked={isChecked['2']} onClick={(e) => { handleRadio(e.target.value,  e.target['dataset']['id'])}} />
//           phone number
//         </label>
//       </li>
//       <li>
//         <label>
//           <input type='radio' value='ip address' data-id='3'checked={isChecked['3']} onClick={(e) => { handleRadio(e.target.value,  e.target['dataset']['id'])}} />
//           ip address
//         </label>
//       </li>
//       <li>
//         <label>
//           <input type='radio' value='line numbers' data-id='4' checked={isChecked['4']} onClick={(e) => {handleRadio(e.target.value,  e.target['dataset']['id'])}} />
//           line numbers
//         </label>
//       </li>
//       <li>
//         <label>
//           <input type='radio' value='sort-alphabet' data-id='5' checked={isChecked['5']} onClick={(e) => {handleRadio(e.target.value,  e.target['dataset']['id'])}} />
//           sort? (alphabet)
//         </label>
//       </li>
//     </ul>
//     <div className='scraper_options_email_input'>
//       <input type='text'></input>
//       @
//       <input type='text'></input>
//       .com
//      </div>
//     <button onClick={handleClick}>x</button>
//     {/* {OptionBars()} */}
//   </div>
//   );
// };

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
        </div>
        {modalOpen && <OptionModal handleModal={handleModal}/> }
      </div>
    );
  }
}

// REFERENCES
// https://www.pluralsight.com/guides/how-to-access-custom-attributes-from-aevent-object-in-react
// https://bobbyhadz.com/blog/react-remove-key-from-state-object
// https://bobbyhadz.com/blog/react-update-nested-state-object-property