describe('parseInt()', () => {
  it('should return 15', () => {
    expect(parseInt('15')).toBe(15);
    expect(parseInt('15px')).toBe(15);
    expect(parseInt('fifteen')).not.toBe(15);
  });

  it('should return NaN', () => {
    expect(parseInt('fifteen')).toBe(NaN);
  });
});
