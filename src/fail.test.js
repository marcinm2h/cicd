const fail = () => {
  throw new Error('fail');
};

it('fails', () => {
  expect(fail()).toBe('');
});
