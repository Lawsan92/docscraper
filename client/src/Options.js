import React, { useState, useEffect } from 'react';

export const Options = ({ optionsClicked, handleClick, setOptions, configureParams, grepParams, handleModal, grepText, getText }) => {

  const [isChecked, toggleRadio] = useState(false);
  const [isExpanded, setBar] = useState(false);

  const OptionBars = () => {
    let options = ['email', 'phone number', 'ip address', 'line numbers'];

    const mapOptions = () => {
      let count = 0;
      return options.map((option) => {
        count ++;
        return <div key={count} className='scraper_option_cell' onClick={handleModal}>{option}</div>;
      })
    }
    return (
      <div>
        {mapOptions()}
      </div>
    );
  }

  const handleRadio = (param, key) => {
    toggleRadio((prevState )=> ({...isChecked, [key]:! prevState[key]}));
    console.log('isChecked:', isChecked);
    if (!isChecked[key]) {
      if (param.slice(0, 4) === 'sort') {
        configureParams(currentState => {
          return {
            ...currentState,
            sort: {
              ...currentState.sort,
              [param.slice(5)]: true
            }
          }
        });
      } else {
        // configureParams({...grepParams, [param]: param});
        configureParams(currentState => {
          return {
            ...currentState,
            param: {
              ...currentState.param,
              [param]: true
            }
          }
        });
      }
    } else {
      if (param.slice(0, 4) === 'sort') {
        configureParams(currentState => {
          return {
            ...currentState,
            sort: {
              ...currentState.sort,
              [param.slice(5)]: false
            }
          }
        });

      } else {
        configureParams(currentState => {
          return {
            ...currentState,
            param: {
              ...currentState.param,
              [param]: false
            }
          }
        });
      }
    }
  }

  const renderOptions = () => {
    let count = 1;


  }

  const handleText = (i, e) => {
    configureParams(currentState => {
      return {
        ...currentState,
        text: {
          ...currentState.text,
          [i]: e
        }
      }
    });
  }

  if (!optionsClicked) {
    return (
      <div className='scraper_options-closed' onClick={handleClick}>
        Options
      </div>
    )
  }

  return (
    <div className='scraper_options-open'>
    <ul style={{listStyle: 'none'}}>
      <li>
        <label>
          <input type='radio' value='email' data-id='1' checked={isChecked['1']} onClick={(e) => { handleRadio(e.target.value, e.target['dataset']['id'])}}/>
          email
        </label>
      </li>
      <li>
        <label>
          <input type='radio' value='phone number' data-id='2' checked={isChecked['2']} onClick={(e) => { handleRadio(e.target.value,  e.target['dataset']['id'])}} />
          phone number
        </label>
      </li>
      <li>
        <label>
          <input type='radio' value='ip address' data-id='3'checked={isChecked['3']} onClick={(e) => { handleRadio(e.target.value,  e.target['dataset']['id'])}} />
          ip address
        </label>
      </li>
      <li>
        <label>
          <input type='radio' value='line numbers' data-id='4' checked={isChecked['4']} onClick={(e) => {handleRadio(e.target.value,  e.target['dataset']['id'])}} />
          line numbers
        </label>
      </li>
      <li>
        <label>
          <input type='radio' value='sort-alphabet' data-id='5' checked={isChecked['5']} onClick={(e) => {handleRadio(e.target.value,  e.target['dataset']['id'])}} />
          sort? (alphabet)
        </label>
      </li>
    </ul>
    <div className='scraper_options_email_input'>
      <input type='text' data-id='0' onChange={(e) => {handleText(e.target['dataset']['id'], e.target.value)}}></input>
      @
      <input type='text' data-id='1' onChange={(e) => {handleText(e.target['dataset']['id'], e.target.value)}}></input>
      .
      <input type='text'data-id='2' onChange={(e) => {handleText(e.target['dataset']['id'], e.target.value)}} ></input>
     </div>
    <button onClick={handleClick}>x</button>
    {/* {OptionBars()} */}
  </div>
  );
};

export default Options;