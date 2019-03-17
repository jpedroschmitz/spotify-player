/* eslint-disable */
import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertTime';

describe('ConvertToHumanTime', () => {
  describe('Smoke Tests', () => {
    it('should exist the convertToHumanTime method', () => {
      expect(convertToHumanTime).to.exist;
    });
  });

  describe('convertToHumanTime', () => {
    it('should receive 0ms and convert to 0:00', () => {
      expect(convertToHumanTime(0)).to.be.equal('0:00');
    });

    it('should receive 1000ms and convert to 0:01', () => {
      expect(convertToHumanTime(1000)).to.be.equal('0:01');
    });

    it('should receive 11000ms and convert to 0:11', () => {
      expect(convertToHumanTime(11000)).to.be.equal('0:11');
    });

    it('should receive 60000ms and convert to 1:00', () => {
      expect(convertToHumanTime(60000)).to.be.equal('1:00');
    });
  });
});
