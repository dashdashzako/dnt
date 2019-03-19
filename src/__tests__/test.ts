import { JSDOM } from 'jsdom';
import { isDNTEnabled } from '../';

describe('JSDom', () => {
  it('should have DNT disabled', () => {
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const { window } = jsdom;

    expect(isDNTEnabled(window)).toBe(false);
  });
});
