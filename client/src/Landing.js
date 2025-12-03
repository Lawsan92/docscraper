import React, { useState, useEffect } from 'react';

const Landing = ({ setLanding }) => {
  return (
    <div className='scraper_landing' onClick={() => {setLanding(false)}}>
      <div className='scraper_landing-logo'>
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681251277/Screen_Shot_2023-04-11_at_17.07.44_haqpxe.jpg' style={{height: '40vh', borderRadius: '50%'}}/>
        <h1 style={{color: '#ffce30'}}>DocuScraper</h1>
      </div>
    </div>
  )
}

export default Landing;