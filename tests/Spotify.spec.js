/* eslint-disable */

import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
  describe('Smoke Tests', () => {
    it('should be an object', () => {
      expect(spotify).to.be.an('object')
    });

    it('should exist the search method', () => {
      expect(spotify.search).to.exist;
    });

    it('should exist the album method', () => {
      expect(spotify.album).to.exist;
    });
  });
});
