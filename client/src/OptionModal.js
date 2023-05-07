import React, { useState, useEffect } from 'react';

const OptionModal = ({ handleModal }) => {
  return (
    <div className='scraper_option_modal' onClick={handleModal}>
      <div className='scraper_option_modal_background'>
        <div className='scraper_option_modal content'>
        </div>
      </div>
    </div>
  )
}

export default OptionModal;