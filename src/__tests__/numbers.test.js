import fnum from '../logic/numbers';

test('Fnum function', () => {
  const number = 758966;
  expect(fnum(number)).toBe('759 K');
});
