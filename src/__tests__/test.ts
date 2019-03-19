import { isDNTEnabled } from '../';

describe('JSDom', () => {
  it('should have DNT disabled', () => {
    expect(isDNTEnabled(window)).toBe(false);
  });
});
