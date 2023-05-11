import renderer from 'react-test-renderer';
import { Landing, Options } from '../client/src/components.js';
import App from '../client/src/App.js';
import React from 'react';
import Component from '../component.js';
import { isElement } from 'react-dom/test-utils';
const log = process.argv[process.argv.length - 1] === '-log'; // jest __tests__/api.test.js -log

log && console.log('process.argv:', process.argv, 'process.argv[process.argv.length - 1:', process.argv[process.argv.length - 1]);

describe('DocuScraper UI', () => {

  test('it renders the <Landing/> component correctly', () => {
    const landing = renderer
      .create(<Landing/>)
      .toJSON();
    log && console.log('landing:', landing);
    expect(isElement(<Landing/>)).toBe(true)
    expect(landing).toMatchSnapshot();
  });

  test('it renders the <App/> component correctly', async () => {
    try {
      const app = renderer
      .create(<App/>)
      .toJSON();
    log && console.log('app:', app);
    expect(app).toMatchSnapshot();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('it renders the <Options/> component correctly', () => {
    const options = renderer
      .create(<Options/>)
      .toJSON();
    log && console.log('options:', options);
    expect(options).toMatchSnapshot();
  });

  test('it renders the <component/> component correctly', () => {
    const component = renderer
      .create(<Component/>)
      .toJSON();
    log && console.log('component:', component);
    expect(component).toMatchSnapshot();
  });

});

