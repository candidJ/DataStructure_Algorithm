const maxChar_WithCharMap = require('./index');

test('maxChar_WithCharMap function exists', () => {
  expect(typeof maxChar_WithCharMap).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar_WithCharMap('a')).toEqual('a');
  expect(maxChar_WithCharMap('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar_WithCharMap('ab1c1d1e1f1g1')).toEqual('1');
});
