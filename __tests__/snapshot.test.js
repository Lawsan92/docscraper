import renderer from 'react-test-renderer';
import Landing from '../client/src/Landing.js';
// import App from '../client/src/App.js';
import React from 'react';
import Component from '../component.js';

describe('DocuScraper UI', () => {

  test('it renders the <Landing/> component correctly', () => {
    const landing = renderer
      .create(<Landing/>)
      .toJSON();
    console.log('landing:', landing);
    expect(landing).toMatchSnapshot();
  });

  // test('it renders the <App/> component correctly', () => {
  //   const app = renderer
  //     .create(<App/>)
  //     .toJSON();
  //   console.log('app:', app);
  //   expect(app).toMatchSnapshot();
  // });

  test('it renders the <component/> component correctly', () => {
    const component = renderer
      .create(<Component/>)
      .toJSON();
    console.log('component:', component);
    expect(component).toMatchSnapshot();
  });

});

