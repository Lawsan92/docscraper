import renderer from 'react-test-renderer';
import { Landing, Options } from '../client/src/components.js';
import App from '../client/src/App.js';
import React from 'react';
import Component from '../component.js';
import { isElement } from 'react-dom/test-utils';
const log = process.argv[process.argv.length - 1] === '-log'; // jest __tests__/api.test.js -log

log && console.log('process.argv:', process.argv, 'process.argv[process.argv.length - 1:', process.argv[process.argv.length - 1]);

describe('DocuScraper UI', () => {

  describe('<Landing/>', () => {

    test('it should be recognized as a React element', () => {
      log && console.log('<Landing/>:', <Landing/>);
      expect(isElement(<Landing/>)).toBe(true)
    });

    test('it matches snapshot', () => {
      const landing = renderer
        .create(<Landing/>)
        .toJSON();
      log && console.log('landing:', landing);
      expect(isElement(<Landing/>)).toBe(true)
      expect(landing).toMatchSnapshot();
    });

  });

  describe('<App/>', () => {

    test('it should be recognized as a React element', () => {
      log && console.log('<App/>:', <App/>);
      expect(isElement(<App/>)).toBe(true)
    });

    test('it matches snapshot', async () => {
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

  });

  describe('<Options/>', () => {

    test('it should be recognized as a React element', () => {
      log && console.log('<Options/>:', <Options/>);
      expect(isElement(<Options/>)).toBe(true)
    });

    test('it matches snapshot', () => {
      const options = renderer
        .create(<Options/>)
        .toJSON();
      log && console.log('options:', options);
      expect(options).toMatchSnapshot();
    });

  });

  describe('<Component/>', () => {

    test('it should be recognized as a React element', () => {
      log && console.log('<Component/>:', <Component/>);
      expect(isElement(<Component/>)).toBe(true)
    });

    test('it matches snapshot', () => {
      const component = renderer
        .create(<Component/>)
        .toJSON();
      log && console.log('component:', component);
      expect(component).toMatchSnapshot();
    });

  });

});

