import { isDNTEnabled } from '../';

it('should have DNT disabled', () => {
  expect(isDNTEnabled(window)).toBe(false);
});

it('should have DNT enabled', () => {
  const dummyWindow = { doNotTrack: '1' } as Window;
  expect(isDNTEnabled(dummyWindow)).toBe(true);
});
